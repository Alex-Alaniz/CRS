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
  Cpu,
  Star,
  Award,
  Flag
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { homepageTeam, type TeamProfile } from "@/lib/team-data"

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

const values = [
  { title: "INTEGRITY", description: "Unwavering commitment to honesty and ethical conduct in all operations." },
  { title: "PROTECTION", description: "Safeguarding workers, assets, and communities through expert risk management." },
  { title: "EXCELLENCE", description: "Delivering superior results that exceed industry standards and expectations." },
]

function ProfileVisual({ member }: { member: TeamProfile }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.imageAlt ?? member.name}
        fill
        className="object-cover"
      />
    )
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#081020]">
      <div className="text-5xl font-bold text-metallic">{member.initials}</div>
      <div className="mt-4 h-px w-16 bg-[#d4a955]" />
      <div className="mt-4 text-[10px] font-semibold tracking-[0.3em] text-[#8ba3c7]">CRS</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a1628]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* American flag overlay in corner */}
          <div className="absolute top-0 right-0 w-96 h-64 opacity-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#0a1628] to-[#0a1628]" style={{ zIndex: 1 }} />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aIdjaGGD3SchYQcvbrOY4jExPpFbgK.png"
              alt=""
              fill
              className="object-cover object-left"
              aria-hidden="true"
              loading="eager"
            />
          </div>
          
          {/* Stars pattern background */}
          <div className="absolute inset-0 stars-pattern" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 flag-gradient" />
          
          {/* Decorative gold stars */}
          <div className="absolute top-40 left-20 hidden lg:block">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4a955] text-[#d4a955] opacity-60" />
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-3 px-4 py-2 border border-[#1e3a5f] bg-[#0f2140]/50 mb-8"
                >
                  <Flag className="w-4 h-4 text-[#c41e3a]" />
                  <span className="text-xs font-medium text-[#8ba3c7] tracking-widest">AMERICAN OWNED & OPERATED</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-[1.1] tracking-tight">
                    <span className="text-metallic">CONTROLLED</span>
                  </h1>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight">
                    <span className="text-[#c41e3a]">RISK</span>{" "}
                    <span className="text-metallic">SERVICES</span>
                  </h1>
                </motion.div>
                
                {/* Tagline with gold accent */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px flex-1 max-w-24 bg-[#d4a955]" />
                  <p className="text-[#d4a955] text-sm font-semibold tracking-[0.25em]">
                    INTEGRITY. PROTECTION. EXCELLENCE.
                  </p>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-[#8ba3c7] text-lg mb-10 leading-relaxed max-w-lg"
                >
                  We deliver comprehensive safety solutions with executive-level governance, data-driven management, and measurable outcomes. Proudly serving America&apos;s construction and industrial sectors.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] text-white text-sm font-semibold tracking-wider hover:bg-[#a01830] transition-all"
                  >
                    <Star className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                    VIEW SERVICES
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/team"
                    className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1e3a5f] text-[#f0f4f8] text-sm font-semibold tracking-wider hover:border-[#3b82f6] hover:bg-[#0f2140] transition-all"
                  >
                    MEET OUR TEAM
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
                
                {/* Locations */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-6 mt-12 pt-8 border-t border-[#1e3a5f]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c41e3a]" />
                    <span className="text-xs text-[#8ba3c7] tracking-wider">HOUSTON, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                    <span className="text-xs text-[#8ba3c7] tracking-wider">CHEYENNE, WY</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Hero Image with badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/5] relative overflow-hidden border-2 border-[#1e3a5f]">
                  <Image
                    src="/hero-construction.jpg"
                    alt="Construction site"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
                  
                  {/* CRS Badge overlay */}
                  <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-4 border-[#d4a955] bg-[#0f2140]/90 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xl font-bold text-metallic">CRS</p>
                      <p className="text-[6px] text-[#d4a955] tracking-wider">EST. 1996</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a1628] to-transparent">
                    <p className="text-sm text-[#f0f4f8] font-medium">Protecting People. Powering Projects.</p>
                    <p className="text-xs text-[#8ba3c7] mt-1">Serving America&apos;s Infrastructure</p>
                  </div>
                </div>
                
                {/* Corner accent stripes */}
                <div className="absolute -top-3 -left-3 w-12 h-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#c41e3a]" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#c41e3a]" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12">
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-[#3b82f6]" />
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-[#3b82f6]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Banner - Red White Blue */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-3">
            {values.map((value, index) => {
              const bgColors = ["bg-[#c41e3a]", "bg-[#f0f4f8]", "bg-[#3b82f6]"]
              const textColors = ["text-white", "text-[#0a1628]", "text-white"]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${bgColors[index]} ${textColors[index]} p-8 lg:p-12 text-center`}
                >
                  <Star className={`w-6 h-6 mx-auto mb-4 ${index === 1 ? 'fill-[#d4a955] text-[#d4a955]' : 'fill-current'}`} />
                  <h3 className="text-lg font-bold tracking-wider mb-2">{value.title}</h3>
                  <p className={`text-sm ${index === 1 ? 'text-[#0a1628]/70' : 'opacity-90'}`}>{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-b border-[#1e3a5f] bg-[#0f2140]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-metallic">
                    {stat.value}
                    <span className="text-[#d4a955]">{stat.suffix}</span>
                  </p>
                  <p className="text-xs text-[#8ba3c7] mt-2 tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24" id="services">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Award className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">OUR SERVICES</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-4"
            >
              COMPREHENSIVE <span className="text-[#c41e3a]">SAFETY</span> SOLUTIONS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8ba3c7] max-w-2xl mb-16"
            >
              We deliver customized risk management solutions tailored to your operational needs, ensuring protection, compliance, and peace of mind for American businesses.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 bg-[#0f2140] border border-[#1e3a5f] hover:border-[#c41e3a]/50 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c41e3a] via-[#f0f4f8] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#d4a955]/20 text-[#d4a955]/20 group-hover:fill-[#d4a955] group-hover:text-[#d4a955] transition-colors" style={{ transitionDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  
                  <div className="w-14 h-14 flex items-center justify-center border border-[#1e3a5f] bg-[#0a1628] group-hover:border-[#c41e3a] transition-colors mb-6">
                    <service.icon className="w-7 h-7 text-[#c41e3a]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#f0f4f8] mb-3">{service.title}</h3>
                  <p className="text-[#8ba3c7] text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-3 py-1 bg-[#0a1628] text-[#8ba3c7] tracking-wider border border-[#1e3a5f]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href="/services"
                    className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center border border-[#1e3a5f] group-hover:border-[#c41e3a] group-hover:bg-[#c41e3a] transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#8ba3c7] group-hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-[#0f2140] border-y border-[#1e3a5f] relative overflow-hidden">
          {/* Decorative flag stripes */}
          <div className="absolute top-0 right-0 w-2 h-full">
            <div className="h-1/3 bg-[#c41e3a]" />
            <div className="h-1/3 bg-[#f0f4f8]" />
            <div className="h-1/3 bg-[#3b82f6]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Shield className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">ABOUT US</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-8 leading-tight">
                  BUILT ON <span className="text-[#c41e3a]">THREE DECADES</span> OF AMERICAN EXCELLENCE
                </h2>
                <p className="text-[#8ba3c7] mb-6 leading-relaxed">
                  CRS Safety was founded on nearly three decades of experience in construction and the oil field. Our founder worked in some of the toughest environments—confined spaces, towers, and high-risk industrial sites across America.
                </p>
                <p className="text-[#8ba3c7] mb-8 leading-relaxed">
                  Today, CRS Safety provides top-level management support and safety staffing for AGC air gap cloud data centers, commercial construction, semiconductors, and high-risk industries nationwide.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Executive Governance", "Data-Driven Mgmt", "Multi-Year Support", "OSHA Compliance"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
                      <span className="text-[#f0f4f8]">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-[#c41e3a] text-sm font-semibold tracking-wider hover:text-[#f0f4f8] transition-colors"
                >
                  LEARN MORE ABOUT OUR MISSION
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] relative border-2 border-[#1e3a5f] overflow-hidden">
                  <Image
                    src="/about-team.jpg"
                    alt="CRS Safety team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-6 bg-[#c41e3a] text-white">
                  <p className="text-3xl font-bold">30+</p>
                  <p className="text-xs tracking-wider">YEARS SERVING AMERICA</p>
                </div>
                
                {/* Gold stars decoration */}
                <div className="absolute -top-4 -left-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                  ))}
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
              className="flex items-center gap-4 mb-16"
            >
              <Factory className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">INDUSTRIES WE SERVE</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-[#0f2140] border border-[#1e3a5f] hover:border-[#3b82f6] transition-all"
                >
                  <div className="flex items-center justify-between mb-8">
                    <industry.icon className="w-10 h-10 text-[#3b82f6]" />
                    <span className="text-xs font-bold text-[#d4a955] tracking-wider">{industry.code}</span>
                  </div>
                  <p className="text-[#f0f4f8] font-semibold">{industry.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-24 bg-[#0f2140] border-y border-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Users className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">OUR PEOPLE</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {homepageTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] relative border-2 border-[#1e3a5f] overflow-hidden mb-4 group-hover:border-[#c41e3a] transition-colors">
                    <ProfileVisual member={member} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                    
                    {/* USA badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0f2140] border border-[#d4a955] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[#d4a955]">USA</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#f0f4f8]">{member.name}</h3>
                  <p className="text-xs text-[#8ba3c7] tracking-wider">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-[#1e3a5f] flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <p className="text-[#8ba3c7] text-sm">View our complete organizational structure and team</p>
              <Link
                href="/team"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-[#c41e3a] text-white text-sm font-semibold tracking-wider hover:bg-[#a01830] transition-all"
              >
                <Star className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                VIEW FULL TEAM & ORG CHART
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Patriotic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c41e3a]/10 via-transparent to-[#3b82f6]/10" />
          
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-2 mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d4a955] text-[#d4a955]" />
              ))}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-6"
            >
              READY TO <span className="text-[#c41e3a]">ELEVATE</span> YOUR SAFETY?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8ba3c7] mb-10 max-w-2xl mx-auto"
            >
              Partner with America&apos;s trusted safety experts. Contact us today to discuss how CRS can protect your people and power your projects.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] text-white text-sm font-semibold tracking-wider hover:bg-[#a01830] transition-all"
              >
                <Star className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                START YOUR CONSULTATION
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="tel:+13464363004"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1e3a5f] text-[#f0f4f8] text-sm font-semibold tracking-wider hover:border-[#3b82f6] hover:bg-[#0f2140] transition-all"
              >
                CALL 346-436-3004
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
