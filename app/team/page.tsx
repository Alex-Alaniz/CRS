"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Mail } from "lucide-react"
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
      <main className="bg-background noise">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-mono text-accent mb-6 tracking-widest">THE ORGANIZATION</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.1]">
                MEET THE <span className="text-accent">TEAM</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Our team of experienced professionals is dedicated to protecting people and powering projects across the nation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">01 / LEADERSHIP</span>
              <div className="flex-1 h-px bg-border" />
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
                  <div className="relative border border-border overflow-hidden mb-6">
                    <div className="aspect-[3/4] relative grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-4 right-4 text-xs font-mono text-accent bg-background/80 px-2 py-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs font-mono text-accent tracking-wider mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
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
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">02 / KEY PERSONNEL</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 border border-border hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 relative border border-border overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{member.department}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs font-mono text-accent tracking-wider">{member.role}</p>
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
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">03 / ORG CHART</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                COMPANY <span className="text-accent">STRUCTURE</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Our organizational structure ensures clear lines of communication and accountability across all departments.
              </p>
            </motion.div>

            <OrganizationalChart />
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-24 bg-card border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-16"
            >
              <span className="text-xs font-mono text-accent tracking-wider">04 / CAREERS</span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                JOIN <span className="text-accent">OUR TEAM</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We&apos;re always looking for talented safety professionals to join our growing team. If you&apos;re passionate about safety and want to make a difference, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-xs font-mono tracking-wider hover:bg-accent/90 transition-colors"
                >
                  VIEW OPEN POSITIONS
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs font-mono tracking-wider hover:border-accent hover:text-accent transition-colors"
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
