"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Users, 
  ClipboardCheck, 
  HardHat, 
  ArrowRight,
  Zap,
  Settings,
  FileSearch,
  AlertTriangle,
  CheckCircle2
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mainServices = [
  {
    icon: Shield,
    title: "Safety Consultant SME",
    description: "We pride ourselves on having top subject matter experts (SMEs) dedicated to ensuring your project runs safely and smoothly. Our team identifies hazards without disrupting your workflow, allowing work to continue efficiently, only pausing for critical risks.",
    features: [
      "Hazard identification and assessment",
      "Safety program development",
      "Regulatory compliance consulting",
      "On-site safety monitoring",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Manager",
    description: "At Controlled Risk Services, we provide expert Construction Managers to ensure your project runs smoothly and safely. Partner with us to access the right expertise and tackle any challenges—your success is our priority.",
    features: [
      "Project oversight and coordination",
      "Quality assurance management",
      "Schedule optimization",
      "Stakeholder communication",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Cost Manager",
    description: "Our cost manager is dedicated to maintaining current budgets and ensuring that we prioritize staying within financial limits. Their expertise helps us make informed decisions that align with our financial goals.",
    features: [
      "Budget development and tracking",
      "Cost forecasting and analysis",
      "Value engineering support",
      "Financial reporting",
    ],
  },
  {
    icon: Users,
    title: "Field Safety Professional",
    description: "Our field safety professionals provide real-time monitoring and immediate response to safety concerns on your job site. They work alongside your team to maintain a culture of safety every day.",
    features: [
      "Daily safety inspections",
      "Safety meeting facilitation",
      "Incident response coordination",
      "Worker safety training",
    ],
  },
]

const additionalServices = [
  {
    icon: FileSearch,
    title: "Safety Program Assessment",
    description: "Comprehensive evaluation of your existing safety programs to identify gaps and opportunities for improvement.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Investigation",
    description: "Thorough investigation of workplace incidents with detailed reporting and corrective action recommendations.",
  },
  {
    icon: Settings,
    title: "Organizational Audits",
    description: "In-depth audits of your safety organization, processes, and documentation for compliance and efficiency.",
  },
  {
    icon: Zap,
    title: "Emergency Response Planning",
    description: "Development and implementation of emergency response plans tailored to your specific operations.",
  },
]

const specialties = [
  "Fire Marshall Services",
  "Fire Watch Personnel",
  "Flaggers & Spotters",
  "Confined Space Attendants",
  "Safety Auditors",
  "Electrical Engineers",
  "Project Schedulers",
  "General Laborers",
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR SERVICES</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Comprehensive Safety<br />
                <span className="text-accent">Solutions for Every Project</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                From safety consulting to full project management, we deliver customized solutions that protect your team and keep your projects on track.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">CORE SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Expert Services for Your Success
              </h2>
              <p className="text-muted-foreground">
                Our core service offerings are designed to provide comprehensive coverage for all aspects of your project&apos;s safety and management needs.
              </p>
            </motion.div>

            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">
                        Request This Service
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-accent/20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">ADDITIONAL SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Specialized Support
              </h2>
              <p className="text-muted-foreground">
                Beyond our core offerings, we provide specialized services to address specific safety and operational needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-medium mb-4 tracking-wide">STAFFING SOLUTIONS</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Professional Safety Staffing
                </h2>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  We provide qualified professionals for every role on your job site. Our team members are fully certified, experienced, and committed to maintaining the highest safety standards.
                </p>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Whether you need short-term support or long-term staffing solutions, CRS delivers reliable professionals who integrate seamlessly with your team.
                </p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Discuss Staffing Needs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {specialties.map((specialty, index) => (
                    <div key={specialty} className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every project is unique. Contact us to discuss your specific needs and how CRS can deliver tailored solutions for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="tel:346-436-3004">Call 346-436-3004</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
