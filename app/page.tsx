"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Users, 
  ClipboardCheck, 
  HardHat, 
  ArrowUpRight,
  Building2,
  Factory,
  Wrench,
  Cpu
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Shield,
    title: "Safety Consultant SME",
    description: "Top subject matter experts ensuring your project runs safely, identifying hazards without disrupting workflow.",
    tags: ["OSHA", "COMPLIANCE", "AUDITS"],
  },
  {
    icon: HardHat,
    title: "Construction Manager",
    description: "Expert managers ensuring projects run smoothly and safely, tackling challenges with precision.",
    tags: ["PROJECT MGMT", "COORDINATION"],
  },
  {
    icon: ClipboardCheck,
    title: "Cost Manager",
    description: "Dedicated professionals maintaining budgets without compromising quality or safety.",
    tags: ["BUDGETING", "FINANCIAL"],
  },
  {
    icon: Users,
    title: "Field Safety Professional",
    description: "On-site professionals providing real-time monitoring and immediate response to safety concerns.",
    tags: ["ON-SITE", "MONITORING"],
  },
]

const stats = [
  { value: "30+", label: "YEARS EXPERIENCE", suffix: "" },
  { value: "500", label: "PROJECTS COMPLETED", suffix: "+" },
  { value: "98", label: "CLIENT SATISFACTION", suffix: "%" },
  { value: "24/7", label: "SAFETY SUPPORT", suffix: "" },
]

const industries = [
  { icon: Building2, name: "Commercial Construction", code: "COM" },
  { icon: Factory, name: "Industrial Facilities", code: "IND" },
  { icon: Cpu, name: "Semiconductor Plants", code: "SEMI" },
  { icon: Wrench, name: "Data Centers", code: "DC" },
]

const updates = [
  { date: "2026.05.10", title: "New Data Center Partnership", desc: "Expanded safety operations to major Texas data center." },
  { date: "2026.04.22", title: "Safety Excellence Award", desc: "Recognized for outstanding safety performance in Q1." },
  { date: "2026.03.15", title: "Team Expansion", desc: "Added 12 new field safety professionals to our roster." },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background noise">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-10 w-px h-40 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
          <div className="absolute bottom-40 left-10 w-px h-40 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs font-mono text-muted-foreground mb-6 tracking-widest"
                >
                  OPERATIONAL SAFETY GOVERNANCE
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-2 leading-[1.1] tracking-tight"
                >
                  <span className="text-accent">CONTROLLED</span>
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
                >
                  RISK SERVICES
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg"
                >
                  We deliver comprehensive safety solutions with executive-level governance, data-driven management, and measurable outcomes. From concept to completion.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-xs font-mono tracking-wider hover:bg-accent/90 transition-colors"
                  >
                    VIEW SERVICES
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/team"
                    className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs font-mono tracking-wider hover:border-accent hover:text-accent transition-colors"
                  >
                    MEET THE ORG
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs font-mono text-muted-foreground mt-12 tracking-wider"
                >
                  CRS INTERFACE / 2026
                </motion.p>
              </div>
              
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/5] relative border border-border overflow-hidden">
                  <Image
                    src="/hero-construction.jpg"
                    alt="Construction site"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-mono text-muted-foreground mb-2">HOUSTON, TX / CHEYENNE, WY</p>
                    <p className="text-sm text-foreground">Protecting People. Powering Projects.</p>
                  </div>
                </div>
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-accent" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-accent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Updates Ticker */}
        <section className="border-y border-border py-4 overflow-hidden bg-card/50">
          <div className="flex animate-marquee">
            {[...updates, ...updates].map((update, index) => (
              <div key={index} className="flex items-center gap-8 px-8 whitespace-nowrap">
                <span className="text-xs font-mono text-accent">{update.date}</span>
                <span className="text-sm text-foreground">{update.title}</span>
                <span className="text-xs text-muted-foreground">{update.desc}</span>
                <span className="text-muted-foreground">|</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-2 tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Bento Grid */}
        <section className="py-24" id="services">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">01 / SERVICES</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            >
              <span className="text-accent">COMPREHENSIVE</span> SAFETY
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mb-16"
            >
              We deliver customized risk management solutions tailored to your operational needs, ensuring protection, compliance, and peace of mind.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors mb-6">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-secondary text-muted-foreground tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href="/services"
                    className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-border group-hover:border-accent group-hover:text-accent transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">02 / ABOUT</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                  BUILT ON <span className="text-accent">THREE DECADES</span> OF EXCELLENCE
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  CRS Safety was founded on nearly three decades of experience in construction and the oil field. Our founder worked in some of the toughest environments—confined spaces, towers, and high-risk industrial sites.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Today, CRS Safety provides top-level management support and safety staffing for AGC air gap cloud data centers, commercial construction, semiconductors, and high-risk industries nationwide.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Executive Governance", "Data-Driven Mgmt", "Multi-Year Support", "OSHA Compliance"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-accent text-sm font-mono tracking-wider hover:underline"
                >
                  LEARN MORE
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] relative border border-border overflow-hidden">
                  <Image
                    src="/about-team.jpg"
                    alt="CRS Safety team"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-6 bg-accent text-accent-foreground">
                  <p className="text-3xl font-serif font-bold">30+</p>
                  <p className="text-xs font-mono tracking-wider">YEARS EXP</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">03 / INDUSTRIES</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-card border border-border hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-8">
                    <industry.icon className="w-8 h-8 text-accent" />
                    <span className="text-xs font-mono text-muted-foreground">{industry.code}</span>
                  </div>
                  <p className="text-foreground font-medium">{industry.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">04 / TEAM</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { name: "Carlos Castro", role: "FOUNDER & CEO", image: "/team/ceo.jpg" },
                { name: "Maria Rodriguez", role: "CHIEF OPERATIONS OFFICER", image: "/team/coo.jpg" },
                { name: "James Mitchell", role: "DIRECTOR OF SAFETY", image: "/team/safety-director.jpg" },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] relative border border-border overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">{member.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground tracking-wider">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/team"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs font-mono tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                VIEW FULL TEAM & ORG CHART
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">05 / CONTACT</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8"
              >
                GET IN <span className="text-accent">TOUCH</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg mb-12 max-w-xl"
              >
                Partner with CRS for comprehensive safety solutions that protect your team and keep your projects on track.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-xs font-mono tracking-wider hover:bg-accent/90 transition-colors"
                >
                  SCHEDULE CONSULTATION
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="tel:346-436-3004"
                  className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-xs font-mono tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  346-436-3004
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
