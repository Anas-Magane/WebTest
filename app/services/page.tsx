"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Shield, Code, Search, FileText, Users, Award, CheckCircle, Globe, Database, Lock } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Professional Cybersecurity Services
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Services
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business and ensure compliance with
              industry standards.
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Secure Web Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-all duration-500 group-hover:opacity-30"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6">
                  <Code className="w-8 h-8" />
                </div>

                <h2 className="text-3xl font-bold text-card-foreground mb-4">Secure Web Development</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Professional web development services with security at the core. We build websites and applications
                  that comply with OWASP standards and legal requirements.
                </p>

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-card-foreground">What We Offer:</h3>
                  {[
                    "OWASP Top 10 Compliance Implementation",
                    "Secure Coding Practices & Standards",
                    "Legal & Regulatory Compliance (GDPR, CCPA)",
                    "Security-First Architecture Design",
                    "Code Security Reviews & Audits",
                    "Vulnerability Assessments",
                    "Secure API Development",
                    "Authentication & Authorization Systems",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    <strong>Perfect for:</strong> Businesses requiring secure web applications, e-commerce platforms,
                    and compliance-critical systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pentesting Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 blur transition-all duration-500 group-hover:opacity-30"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-6">
                  <Search className="w-8 h-8" />
                </div>

                <h2 className="text-3xl font-bold text-card-foreground mb-4">Pentesting Services</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Expert penetration testing services conducted by certified professionals with extensive experience in
                  web applications and Active Directory environments.
                </p>

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-card-foreground">Specialized Testing:</h3>
                  {[
                    "Web Application Penetration Testing",
                    "Active Directory Security Assessment",
                    "Network Infrastructure Testing",
                    "API Security Testing",
                    "Mobile Application Testing",
                    "Social Engineering Assessments",
                    "Wireless Network Security Testing",
                    "Cloud Security Assessments",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Perfect for:</strong> Organizations requiring security validation, compliance testing, and
                    vulnerability identification.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Additional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Services
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Pentesting Web Applications",
                  description:
                    "Comprehensive security testing of web applications to identify vulnerabilities, security flaws, and potential attack vectors.",
                },
                {
                  icon: Database,
                  title: "Pentesting Active Directory",
                  description:
                    "Specialized testing of Active Directory environments to assess domain security, privilege escalation, and lateral movement risks.",
                },
                {
                  icon: FileText,
                  title: "Professional Reports",
                  description:
                    "Detailed security assessment reports with executive summaries, technical findings, and actionable remediation recommendations.",
                },
                {
                  icon: Lock,
                  title: "Security Compliance",
                  description:
                    "Ensure your systems meet industry standards and regulatory requirements including OWASP, PCI DSS, and GDPR.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expert Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Team
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our certified cybersecurity professionals bring years of experience and industry-recognized
                certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Certified Professionals",
                  description: "OSCP and CRTO certified team members",
                  details:
                    "Industry-recognized certifications ensuring the highest standards of penetration testing expertise.",
                },
                {
                  icon: Users,
                  title: "Experienced Team",
                  description: "2+ years pentest, 5+ years development",
                  details: "Deep understanding of both offensive security techniques and secure development practices.",
                },
                {
                  icon: FileText,
                  title: "Professional Reports",
                  description: "Comprehensive documentation and guidance",
                  details:
                    "Detailed findings with risk assessments, proof-of-concepts, and step-by-step remediation instructions.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{item.description}</p>
                  <p className="text-muted-foreground text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
