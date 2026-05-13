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
  CheckCircle2,
  Building2,
  Factory,
  Wrench
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Safety Consultant SME",
    description: "Top subject matter experts dedicated to ensuring your project runs safely and smoothly, identifying hazards without disrupting workflow.",
  },
  {
    icon: HardHat,
    title: "Construction Manager",
    description: "Expert construction managers to ensure your project runs smoothly and safely, tackling challenges with expertise and precision.",
  },
  {
    icon: ClipboardCheck,
    title: "Cost Manager",
    description: "Dedicated professionals maintaining budgets and ensuring financial goals are met without compromising quality or safety.",
  },
  {
    icon: Users,
    title: "Field Safety Professional",
    description: "On-site safety professionals providing real-time monitoring and immediate response to safety concerns.",
  },
]

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "0", label: "Compromise on Safety" },
]

const process = [
  {
    step: "01",
    title: "Consultation & Assessment",
    description: "We begin with a detailed consultation to understand your needs, risks, and operational goals.",
  },
  {
    step: "02",
    title: "Customized Planning",
    description: "Our experts design a tailored strategy focused on effective and practical risk solutions.",
  },
  {
    step: "03",
    title: "Implementation & Support",
    description: "We implement your plan with precision and provide reliable, ongoing client support.",
  },
]

const industries = [
  { icon: Building2, name: "Commercial Construction" },
  { icon: Factory, name: "Industrial Facilities" },
  { icon: Wrench, name: "Semiconductor Plants" },
  { icon: HardHat, name: "Data Centers" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-construction.jpg"
              alt="Construction site at golden hour"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-accent font-medium mb-4 tracking-wide"
              >
                OPERATIONAL SAFETY GOVERNANCE
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
              >
                Protecting People.<br />
                <span className="text-accent">Powering Projects.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl"
              >
                At Controlled Risk Services, we deliver comprehensive safety solutions with executive-level governance, data-driven management, and measurable outcomes for construction and industrial projects.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-card relative -mt-16 z-20 mx-6 rounded-xl shadow-lg">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-medium mb-4 tracking-wide">WHO WE ARE</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Built on Three Decades of Excellence
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  CRS Safety was founded on nearly three decades of experience in construction and the oil field. Our founder worked in some of the toughest environments—confined spaces, towers, and high-risk industrial sites—where he witnessed firsthand the devastating impact of unsafe practices.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Today, CRS Safety provides top-level management support and safety staffing for AGC air gap cloud data centers, commercial construction, semiconductors, and high-risk industries nationwide.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Executive-level safety governance", "Data-driven risk management", "Multi-year program support", "Regulatory compliance expertise"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/about-team.jpg"
                    alt="CRS Safety team on job site"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-4xl font-bold">30+</p>
                  <p className="text-sm">Years of Combined Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR SERVICES</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Comprehensive Safety Solutions
              </h2>
              <p className="text-muted-foreground">
                We deliver customized risk management and security solutions tailored to your operational needs, ensuring protection, compliance, and peace of mind.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card border-0">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR PROCESS</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                How We Work With You
              </h2>
              <p className="text-muted-foreground">
                Our streamlined approach ensures you receive tailored safety solutions from initial consultation to ongoing support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">INDUSTRIES WE SERVE</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Expertise Across Sectors
              </h2>
              <p className="text-primary-foreground/80">
                From commercial construction to high-tech semiconductor facilities, we bring specialized safety expertise to every industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <industry.icon className="w-10 h-10 text-accent" />
                  </div>
                  <p className="font-medium">{industry.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">MEET OUR TEAM</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Leadership You Can Trust
              </h2>
              <p className="text-muted-foreground">
                Our experienced leadership team brings decades of combined expertise in construction safety and risk management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Carlos Castro", role: "Founder & CEO", image: "/team/ceo.jpg" },
                { name: "Maria Rodriguez", role: "Chief Operations Officer", image: "/team/coo.jpg" },
                { name: "James Mitchell", role: "Director of Safety", image: "/team/safety-director.jpg" },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/team">
                  View Full Team & Org Chart
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent-foreground mb-6">
                Ready to Elevate Your Safety Standards?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Partner with CRS for comprehensive safety solutions that protect your team and keep your projects on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  <a href="tel:346-436-3004">
                    Call 346-436-3004
                  </a>
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
