"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

// Input sanitization function
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


// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Name validation regex (letters, spaces, hyphens, apostrophes only)
const nameRegex = /^[a-zA-Z\s\-']+$/

function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

 



  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes"
    } else if (formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = "Name must be between 2 and 50 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.length < 5 || formData.subject.length > 100) {
      newErrors.subject = "Subject must be between 5 and 100 characters"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10 || formData.message.length > 1000) {
      newErrors.message = "Message must be between 10 and 1000 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value)
    setFormData((prev) => ({
      ...prev,
      [field]: sanitizedValue,
    }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-custom-token": "vulntrust-token-frontend"
        },
        body: JSON.stringify(formData),
      })
      

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background smooth-transition">
      <Navbar />

      {/* Hero Section with same background as landing page */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Same background as landing page */}
        <div className="absolute inset-0 dark:bg-black light-hero-bg"></div>

        {/* Subtle animated elements */}
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-green-600/10 to-green-800/10 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Secure Contact Form
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 text-glow">
                Us
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to enhance your cybersecurity? Get in touch with our expert team for a consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our cybersecurity experts are ready to help you secure your business. Contact us for a free
                  consultation.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card/50 smooth-transition card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">anasmagane1@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card/50 smooth-transition card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">0621191580</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card/50 smooth-transition card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">Remote Location</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border border-green-200 dark:border-green-800 card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-foreground mb-2">Why Choose WebTest?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Certified security professionals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    OWASP compliant development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Comprehensive penetration testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional reporting
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form with enhanced hover effects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover hover-lift"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full smooth-transition hover:border-green-500 focus:border-green-500 focus:ring-green-500 ${errors.name ? "border-red-500" : ""}`}
                    placeholder="Enter your full name"
                    maxLength={50}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full smooth-transition hover:border-green-500 focus:border-green-500 focus:ring-green-500 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger
                      className={`w-full smooth-transition hover:border-green-500 focus:border-green-500 focus:ring-green-500 ${errors.subject ? "border-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select a service or enter custom subject" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Secure Development Service">Secure Development Service</SelectItem>
                    <SelectItem value="Pentest Service">Pentest Service</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                    <SelectItem value="Support Request">Support Request</SelectItem>
                  </SelectContent>
                  </Select>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`w-full min-h-[120px] smooth-transition hover:border-green-500 focus:border-green-500 focus:ring-green-500 ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Tell us about your cybersecurity needs..."
                    maxLength={1000}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </motion.p>
                    ) : (
                      <div></div>
                    )}
                    <span className="text-xs text-muted-foreground">{formData.message.length}/1000</span>
                  </div>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800"
                  >
                    <p className="text-green-700 dark:text-green-300 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800"
                  >
                    <p className="text-red-700 dark:text-red-300 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Failed to send message. Please try again or contact us directly.
                    </p>
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                  
                                <input
                  type="text"
                  name="website"
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                  value=""
                  onChange={() => {}}
                />


                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full green-gradient hover:green-gradient-dark text-white py-6 text-lg smooth-transition hover-lift animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function ContactPage({
  defaultSubject = ""
}: { defaultSubject?: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm defaultSubject={defaultSubject} />
    </Suspense>
  )
}

