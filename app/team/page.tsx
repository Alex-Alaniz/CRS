"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { OrganizationalChart } from "@/components/org-chart"

const leadership = [
  {
    name: "Carlos Castro",
    role: "Founder & Chief Executive Officer",
    image: "/team/ceo.jpg",
    bio: "With nearly three decades of experience in construction and oil field operations, Carlos founded CRS with a mission to prioritize safety professionals and deliver exceptional results.",
    linkedin: "https://linkedin.com",
    email: "carlos.castro@controlledriskservices.com",
  },
  {
    name: "Maria Rodriguez",
    role: "Chief Operations Officer",
    image: "/team/coo.jpg",
    bio: "Maria oversees all operational aspects of CRS, ensuring that every project receives the attention and expertise it deserves. Her leadership drives our commitment to excellence.",
    linkedin: "https://linkedin.com",
    email: "maria.rodriguez@controlledriskservices.com",
  },
  {
    name: "James Mitchell",
    role: "Director of Safety",
    image: "/team/safety-director.jpg",
    bio: "James brings 20+ years of field experience to his role, having worked on some of the most demanding construction sites in the country. He leads our safety consulting practice.",
    linkedin: "https://linkedin.com",
    email: "james.mitchell@controlledriskservices.com",
  },
]

const teamMembers = [
  {
    name: "David Thompson",
    role: "Operations Manager",
    image: "/team/operations-manager.jpg",
    department: "Operations",
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    image: "/team/project-manager.jpg",
    department: "Projects",
  },
  {
    name: "Michael Roberts",
    role: "Field Supervisor",
    image: "/team/field-supervisor.jpg",
    department: "Field Operations",
  },
]

export default function TeamPage() {
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
              <p className="text-accent font-medium mb-4 tracking-wide">OUR TEAM</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Meet the Experts<br />
                <span className="text-accent">Behind Your Safety</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Our team of experienced professionals is dedicated to protecting people and powering projects across the nation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">LEADERSHIP</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Executive Team
              </h2>
              <p className="text-muted-foreground">
                Our leadership team brings together decades of experience in construction safety, operations, and project management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow bg-card border-0">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-accent font-medium text-sm mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
                      <div className="flex gap-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR TEAM</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Key Team Members
              </h2>
              <p className="text-muted-foreground">
                Meet more of the dedicated professionals who make CRS&apos;s success possible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
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
                  <p className="text-accent text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.department}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Chart Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">COMPANY STRUCTURE</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Organizational Chart
              </h2>
              <p className="text-muted-foreground">
                Our organizational structure ensures clear lines of communication and accountability across all departments.
              </p>
            </motion.div>

            <OrganizationalChart />
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We&apos;re always looking for talented safety professionals to join our growing team. If you&apos;re passionate about safety and want to make a difference, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">Contact HR</Link>
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
