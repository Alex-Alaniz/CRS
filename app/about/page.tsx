"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Safety First",
    description: "We never compromise on safety. Every decision we make prioritizes the well-being of the people on your project.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in open communication and honest assessments. You'll always know where you stand with CRS.",
  },
  {
    icon: Heart,
    title: "People-Centered",
    description: "We take care of our safety professionals, and they take care of your project. It's that simple.",
  },
]

const timeline = [
  {
    year: "1995",
    title: "Foundation in the Field",
    description: "Our founder begins his career in construction and oil field operations, gaining firsthand experience in high-risk environments.",
  },
  {
    year: "2005",
    title: "Education & Expertise",
    description: "Pursued a degree in Environmental Health & Safety, combining field experience with formal education.",
  },
  {
    year: "2015",
    title: "CRS Founded",
    description: "Controlled Risk Services is established with a mission to prioritize safety professionals and deliver exceptional results.",
  },
  {
    year: "Today",
    title: "Industry Leader",
    description: "CRS now serves nationwide clients across data centers, commercial construction, and semiconductor facilities.",
  },
]

const certifications = [
  "OSHA 30-Hour Certified",
  "BCSP Certified",
  "First Aid/CPR/AED Certified",
  "Confined Space Entry Certified",
  "Fall Protection Competent",
  "Hazmat Operations Level",
]

export default function AboutPage() {
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
              <p className="text-accent font-medium mb-4 tracking-wide">ABOUT US</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Built on Experience.<br />
                <span className="text-accent">Driven by Safety.</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                For nearly three decades, we&apos;ve been dedicated to protecting people and powering projects across the nation&apos;s most demanding industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/about-team.jpg"
                    alt="CRS Safety team"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-medium mb-4 tracking-wide">OUR STORY</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  From the Field to the Boardroom
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CRS Safety was built on nearly three decades of experience in construction and in the oil field. Our founder worked in some of the toughest environments—confined spaces, towers, and high-risk industrial sites—where he witnessed firsthand the devastating impact of unsafe practices.
                  </p>
                  <p>
                    That experience inspired a degree in Environmental Health & Safety and a career dedicated to protecting people in the field. When CRS Safety was founded, it was built on one guiding principle: take care of safety professionals, and they will take care of the project.
                  </p>
                  <p>
                    Today, CRS Safety provides top-level management support and safety staffing for AGC air gap cloud data centers, commercial construction, semiconductors, and high-risk industries nationwide. By valuing and compensating our people fairly, we deliver stability, accountability, and results that keep projects safe and successful.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR VALUES</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                What Drives Us Every Day
              </h2>
              <p className="text-muted-foreground">
                Our core values guide every decision we make and every project we undertake.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card border-0">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <value.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-accent font-medium mb-4 tracking-wide">OUR JOURNEY</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Milestones That Define Us
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <div className="bg-card p-6 rounded-xl shadow-sm">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 z-10">
                      <div className="w-3 h-3 rounded-full bg-accent-foreground" />
                    </div>
                    
                    <div className="flex-1 md:hidden">
                      <div className="bg-card p-6 rounded-xl shadow-sm">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-medium mb-4 tracking-wide">CERTIFICATIONS</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Industry-Leading Credentials
                </h2>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Our team holds the highest certifications in the industry, ensuring you receive expert guidance that meets and exceeds regulatory requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm">{cert}</span>
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
                Ready to Work With Us?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Meet our team and discover how CRS can support your next project with expert safety solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/team">
                    Meet Our Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/contact">Contact Us</Link>
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
