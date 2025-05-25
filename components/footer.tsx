"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, Youtube, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WebTest Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-bold">
                <span className="text-green-500 bg-white rounded px-1 text-sm">W</span>
                <span className="text-green-500 bg-white rounded px-1 ml-1 text-sm">T</span>
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">
                  W<span className="text-white bg-green-500 px-1 rounded">eb</span>T
                  <span className="text-white bg-green-500 px-1 rounded">est</span>
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional cybersecurity services including secure web development and expert penetration testing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-green-500 smooth-transition text-sm">
                Home
              </Link>
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Anas</h3>
            <div className="space-y-3">
              <a
                href="mailto:anasmagane1@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>anasmagane1@gmail.com</span>
              </a>
              <a
                href="tel:0621191580"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>0621191580</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-magane-3aa287262"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://www.youtube.com/@Anas_Education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 smooth-transition text-sm"
              >
                <Youtube className="h-4 w-4" />
                <span>Anas Education</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Powered by</span>
              <span className="font-semibold text-green-500">Anas Education</span>
              <Heart className="h-4 w-4 text-red-500" />
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WebTest. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
