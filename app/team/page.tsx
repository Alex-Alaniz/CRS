"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Mail, Star, Shield, Users, Flag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrganizationalChart } from "@/components/org-chart"

const leadership = [
  {
    name: "Carlos Castro",
    role: "FOUNDER & CEO",
    image: "/team/ceo.jpg",
    bio: "With nearly three decades of experience in construction and oil field operations, Carlos founded CRS with a mission to prioritize safety professionals and deliver exceptional results.",
    linkedin: "https://linkedin.com",
    email: "carlos.castro@controlledriskservices.com",
  },
  {
    name: "Maria Rodriguez",
    role: "CHIEF OPERATIONS OFFICER",
    image: "/team/coo.jpg",
    bio: "Maria oversees all operational aspects of CRS, ensuring that every project receives the attention and expertise it deserves. Her leadership drives our commitment to excellence.",
    linkedin: "https://linkedin.com",
    email: "maria.rodriguez@controlledriskservices.com",
  },
  {
    name: "James Mitchell",
    role: "DIRECTOR OF SAFETY",
    image: "/team/safety-director.jpg",
    bio: "James brings 20+ years of field experience to his role, having worked on some of the most demanding construction sites in the country. He leads our safety consulting practice.",
    linkedin: "https://linkedin.com",
    email: "james.mitchell@controlledriskservices.com",
  },
]

const teamMembers = [
  {
    name: "David Thompson",
    role: "OPERATIONS MANAGER",
    image: "/team/operations-manager.jpg",
    department: "OPS",
  },
  {
    name: "Sarah Chen",
    role: "PROJECT MANAGER",
    image: "/team/project-manager.jpg",
    department: "PROJ",
  },
  {
    name: "Michael Roberts",
    role: "FIELD SUPERVISOR",
    image: "/team/field-supervisor.jpg",
    department: "FIELD",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a1628]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 stars-pattern" />
          <div className="absolute inset-0 flag-gradient" />
          
          {/* Decorative stars */}
          <div className="absolute top-40 right-20 hidden lg:flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#d4a955] text-[#d4a955] opacity-60" />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#1e3a5f] bg-[#0f2140]/50 mb-8">
                <Users className="w-4 h-4 text-[#c41e3a]" />
                <span className="text-xs font-medium text-[#8ba3c7] tracking-widest">OUR PEOPLE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-metallic">MEET THE</span>{" "}
                <span className="text-[#c41e3a]">TEAM</span>
              </h1>
              <p className="text-[#8ba3c7] text-lg leading-relaxed max-w-2xl">
                Our team of experienced American professionals is dedicated to protecting people and powering projects across the nation.
              </p>
              
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#1e3a5f]">
                <Flag className="w-5 h-5 text-[#c41e3a]" />
                <span className="text-xs text-[#d4a955] font-semibold tracking-wider">PROUDLY AMERICAN OWNED & OPERATED</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 border-t border-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Shield className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">LEADERSHIP TEAM</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative border-2 border-[#1e3a5f] overflow-hidden mb-6 group-hover:border-[#c41e3a] transition-colors">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                    </div>
                    
                    {/* USA Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0f2140] border-2 border-[#d4a955] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[#d4a955]">USA</span>
                    </div>
                    
                    {/* Rank stars */}
                    <div className="absolute top-4 left-4 flex gap-1">
                      {[...Array(3 - index)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#f0f4f8] mb-1">{member.name}</h3>
                  <p className="text-xs text-[#c41e3a] tracking-wider font-semibold mb-4">{member.role}</p>
                  <p className="text-sm text-[#8ba3c7] leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#1e3a5f] flex items-center justify-center text-[#8ba3c7] hover:border-[#3b82f6] hover:text-[#3b82f6] hover:bg-[#0f2140] transition-all"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 border border-[#1e3a5f] flex items-center justify-center text-[#8ba3c7] hover:border-[#c41e3a] hover:text-[#c41e3a] hover:bg-[#0f2140] transition-all"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-24 bg-[#0f2140] border-y border-[#1e3a5f]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Users className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">KEY PERSONNEL</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 border border-[#1e3a5f] bg-[#0a1628] hover:border-[#3b82f6] transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 relative border-2 border-[#1e3a5f] overflow-hidden group-hover:border-[#c41e3a] transition-colors">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#d4a955] tracking-wider px-2 py-1 border border-[#d4a955]/30">{member.department}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#f0f4f8] mb-1">{member.name}</h3>
                  <p className="text-xs text-[#c41e3a] tracking-wider font-semibold">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Chart Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">ORGANIZATIONAL CHART</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-4">
                COMPANY <span className="text-[#c41e3a]">STRUCTURE</span>
              </h2>
              <p className="text-[#8ba3c7] max-w-2xl">
                Our organizational structure ensures clear lines of communication and accountability across all departments. Built on American values of integrity, protection, and excellence.
              </p>
            </motion.div>

            <OrganizationalChart />
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-24 bg-[#0f2140] border-t border-[#1e3a5f] relative overflow-hidden">
          <div className="absolute inset-0 stars-pattern opacity-30" />
          
          {/* Patriotic stripe */}
          <div className="absolute top-0 left-0 w-2 h-full">
            <div className="h-1/3 bg-[#c41e3a]" />
            <div className="h-1/3 bg-[#f0f4f8]" />
            <div className="h-1/3 bg-[#3b82f6]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <Flag className="w-6 h-6 text-[#d4a955]" />
              <span className="text-xs font-semibold text-[#d4a955] tracking-widest">CAREERS</span>
              <div className="flex-1 h-px bg-[#1e3a5f]" />
            </motion.div>

            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-6">
                JOIN <span className="text-[#c41e3a]">OUR TEAM</span>
              </h2>
              <p className="text-[#8ba3c7] text-lg mb-10">
                We&apos;re always looking for talented safety professionals to join our growing American team. If you&apos;re passionate about safety and want to make a difference, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] text-white text-sm font-semibold tracking-wider hover:bg-[#a01830] transition-all"
                >
                  <Star className="w-4 h-4 fill-[#d4a955] text-[#d4a955]" />
                  VIEW OPEN POSITIONS
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1e3a5f] text-[#f0f4f8] text-sm font-semibold tracking-wider hover:border-[#3b82f6] hover:bg-[#0a1628] transition-all"
                >
                  CONTACT HR
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
