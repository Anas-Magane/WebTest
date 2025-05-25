"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 smooth-transition">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Professional Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-green-600 opacity-0 blur transition-all duration-300 group-hover:opacity-50"></div>
              <div className="relative flex h-10 w-14 sm:h-12 sm:w-16 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg shadow-lg">
                <span className="text-green-500 bg-white rounded px-1 text-xs sm:text-sm">W</span>
                <span className="text-green-500 bg-white rounded px-1 ml-1 text-xs sm:text-sm">T</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-foreground">
                W<span className="text-white bg-green-500 px-1 rounded text-sm sm:text-base">eb</span>T
                <span className="text-white bg-green-500 px-1 rounded text-sm sm:text-base">est</span>
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">CyberSecurity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-green-500 smooth-transition font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-green-500 smooth-transition font-medium"
            >
              Services
            </button>
            <Link href="/contact" className="text-muted-foreground hover:text-green-500 smooth-transition font-medium">
              Contact Us
            </Link>
          </div>

          {/* Theme Toggle & Contact Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 hover:bg-green-500/10 hover:text-green-500 smooth-transition"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Link href="/contact" className="hidden md:block">
              <Button className="green-gradient hover:green-gradient-dark text-white px-6 py-2 rounded-lg smooth-transition hover-lift">
                Contact Me
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 hover:bg-green-500/10 hover:text-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-green-500 smooth-transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-green-500 smooth-transition"
              >
                Services
              </button>
              <Link
                href="/contact"
                className="block px-3 py-2 text-muted-foreground hover:text-green-500 smooth-transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
