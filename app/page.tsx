"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Code, Search, FileText, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const scrollToContact = (service: string) => {
    window.location.href = `/contact?service=${encodeURIComponent(service)}`
  }

  return (
    <div className="min-h-screen bg-background smooth-transition">
      <Navbar />

      {/* Hero Section - Clean backgrounds for both modes */}
      <section
        id="home"
        className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        {/* Clean background - no animations in dark mode */}
        <div className="absolute inset-0 dark:bg-black light-hero-bg"></div>

        {/* Remove floating particles completely */}

        {/* Keep only the subtle animated elements */}
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-green-600/10 to-green-800/10 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Professional Cybersecurity Services
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
                  Boost your security
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 text-glow">
                    with us
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                  <span className="text-green-500 font-mono text-xl sm:text-2xl">{"<"}</span>
                  Get secure dev or request a pentest now!
                  <span className="text-green-500 font-mono text-xl sm:text-2xl">{"/>"}</span>
                </p>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Specializing in cybersecurity, web development, and penetration testing. Building secure systems and
                  breaking them to make them stronger.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
                <Button
                 onClick={() => window.location.href = "/contact/dev"}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg green-gradient hover:green-gradient-dark text-white rounded-lg smooth-transition hover-lift animate-pulse-glow"
                >
                  Request Dev Web →
                </Button>

                <Button
                  onClick={() => window.location.href = "/contact/pentest"}
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg smooth-transition hover-lift"
                >
                  Request Pentest →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-green-500 font-mono">{"<"}</span>
              Featured Services
              <span className="text-green-500 font-mono">{"/>"}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of my work in cybersecurity, web development, and penetration testing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Secure Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 card-hover"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 opacity-0 blur transition-all duration-500 group-hover:opacity-30"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl green-gradient text-white mb-4">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4">Secure Web Development</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">
                    We craft secure, high-performance websites fully aligned with OWASP standards and legal compliance.
                    Our team of seasoned developers — with over 5 years of experience — embeds security at every stage
                    of the development lifecycle, from system architecture to deployment.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">Our approach includes:</h4>
                  {[
                    "Comprehensive OWASP Top 10 risk mitigation",
                    "Secure coding practices based on industry standards",
                    "Compliance with legal and regulatory frameworks (e.g., GDPR, ISO)",
                    "In-depth code security reviews prior to production",
                    "DevSecOps-oriented workflows for continuous security integration",
                    "Regular vulnerability assessments to stay ahead of threats",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Web Development", "Security", "OWASP", "Compliance"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToContact("Secure Development Service")}
                  className="w-full green-gradient hover:green-gradient-dark text-white smooth-transition text-sm sm:text-base"
                >
                  Get Secure Development
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Pentesting Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 card-hover"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 opacity-0 blur transition-all duration-500 group-hover:opacity-30"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl green-gradient text-white mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Professional Penetration Testing</h3>
                  <p className="text-muted-foreground mb-6">
                    Get your applications and infrastructure thoroughly tested by our certified offensive security
                    experts. With real-world attack simulations, we uncover weaknesses before attackers do — and provide
                    actionable fixes.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-card-foreground">Our Pentesting Services include:</h4>
                  {[
                    "Advanced Web Application Penetration Testing",
                    "Active Directory & Internal Network Assessments",
                    "A team certified in OSCP, CRTO, and more",
                    "Clear, professional reporting with impact-based severity",
                    "Remediation guidance tailored to your environment",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Pentesting", "OSCP", "CRTO", "Security Assessment"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToContact("Pentest Service")}
                  className="w-full green-gradient hover:green-gradient-dark text-white smooth-transition"
                >
                  Request Pentest
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified professionals bring years of experience in cybersecurity and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Certified Professionals",
                description:
                  "OSCP and CRTO certified team members with proven expertise in penetration testing and security assessment.",
              },
              {
                icon: Users,
                title: "Experienced Team",
                description: "Over 2 years of specialized penetration testing experience and 5+ years in development.",
              },
              {
                icon: FileText,
                title: "Professional Reports",
                description:
                  "Comprehensive reporting with detailed findings, risk assessments, and actionable remediation steps.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 rounded-xl border border-border bg-card card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl green-gradient text-white mb-4">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 green-gradient text-white">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your cybersecurity needs and get a customized solution for your organization.
            </p>
            <Link href="/contact">
              <Button className="px-8 py-6 text-lg bg-white text-green-600 hover:bg-gray-100 rounded-lg smooth-transition hover-lift">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
