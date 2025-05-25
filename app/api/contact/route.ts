import { type NextRequest, NextResponse } from "next/server"

import nodemailer from "nodemailer"

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()



// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}
function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, "")                // remove all HTML tags
    .replace(/javascript:/gi, "")             // strip javascript:
    .replace(/on\w+\s*=/gi, "")               // remove onclick, onerror, ...
    .replace(/["']/g, "")                     // remove quotes
    .replace(/[\r\n]/g, " ")                  // remove line breaks (prevent header injection)
    .replace(/[<>]/g, "")                     // remove angle brackets
    .trim()
}

const allowedServices = ["Secure Development Service", "Pentest Service"]

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-']+$/
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50
}

function validateSubject(subject: string): boolean {
  return subject.length >= 5 && subject.length <= 100
}

function validateMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 1000
}


export async function POST(request: NextRequest) {
  
const originToken = request.headers.get("x-custom-token")
if (originToken !== "vulntrust-token-frontend") {
  return NextResponse.json({ error: "CSRF protection triggered" }, { status: 403 })
}
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, subject, message, website } = body
    if (website && website.trim() !== "") {
      console.warn("Bot detected via honeypot field!")
      return NextResponse.json({ error: "Access Denied" }, { status: 403 })
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)


    const bannedPatterns = [
      /bcc:/i, 
      /cc:/i, 
      /content-type:/i, 
      /to:/i, 
      /from:/i, 
      /reply-to:/i
    ]
    
    // Validate inputs
    if (!validateName(sanitizedName)) {
      return NextResponse.json({ error: "Invalid name format" }, { status: 400 })
    }

    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (!validateSubject(sanitizedSubject)) {
      return NextResponse.json({ error: "Invalid subject format" }, { status: 400 })
    }

    if (!validateMessage(sanitizedMessage)) {
      return NextResponse.json({ error: "Invalid message format" }, { status: 400 })

    if (!allowedServices.includes(subject.replace("Request: ", ""))) {
        return NextResponse.json({ error: "Invalid subject content" }, { status: 400 })
      }
      
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({

      service: "gmail",
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (error) {
      console.error("SMTP configuration error:", error)
      return NextResponse.json({ error: "Email service temporarily unavailable" }, { status: 503 })
    }
    for (const pattern of bannedPatterns) {
      if (pattern.test(sanitizedMessage) || pattern.test(sanitizedSubject)) {
        return NextResponse.json({ error: "Oops...Error !!" }, { status: 400 })
      }
    }
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_HOST_USER,
      to: process.env.EMAIL_HOST_USER,
      subject: `WebTest Contact Form: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">WebTest Contact Form</h1>
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <h2 style="color: #333; margin-top: 0;">New Contact Form Submission</h2>
            
            <div style="margin: 15px 0;">
              <strong style="color: #495057;">Name:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border: 1px solid #dee2e6;">${escapeHTML(sanitizedName)}</p>
            </div>
            
            <div style="margin: 15px 0;">
              <strong style="color: #495057;">Email:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border: 1px solid #dee2e6;">${escapeHTML(sanitizedEmail)}</p>
            </div>
            
            <div style="margin: 15px 0;">
              <strong style="color: #495057;">Subject:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border: 1px solid #dee2e6;">${escapeHTML(sanitizedSubject)}</p>
            </div>
            
            <div style="margin: 15px 0;">
              <strong style="color: #495057;">Message:</strong>
              <p style="margin: 5px 0; padding: 15px; background: white; border-radius: 5px; border: 1px solid #dee2e6; white-space: pre-wrap;">${escapeHTML(sanitizedMessage)}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 5px; border-left: 4px solid #0066cc;">
              <p style="margin: 0; color: #004085; font-size: 14px;">
                <strong>Submission Details:</strong><br>
                IP Address: ${ip}<br>
                Timestamp: ${new Date().toISOString()}<br>
                User Agent: ${request.headers.get("user-agent") || "Unknown"}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: sanitizedEmail,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log successful submission (in production, use proper logging)
    console.log(`Contact form from ${sanitizedEmail} — IP: ${ip} — At: ${new Date().toISOString()}`)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
