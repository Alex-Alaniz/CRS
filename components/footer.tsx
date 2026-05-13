import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Safety Consultant SME", href: "/services" },
    { name: "Construction Manager", href: "/services" },
    { name: "Cost Manager", href: "/services" },
    { name: "Field Safety Professional", href: "/services" },
  ],
  resources: [
    { name: "Case Studies", href: "/about" },
    { name: "Safety Resources", href: "/services" },
    { name: "Industry Insights", href: "/about" },
    { name: "FAQ", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Enhance Your Safety Program?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Partner with CRS for expert safety governance and risk management solutions tailored to your project needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">CRS</span>
              </div>
              <div>
                <span className="block text-lg font-semibold leading-tight">Controlled Risk</span>
                <span className="block text-sm text-primary-foreground/70">Services</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Delivering tailored risk management and safety solutions to protect what matters most. Protecting People. Powering Projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:346-436-3004" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>346-436-3004</span>
                </a>
              </li>
              <li>
                <a href="mailto:carlos.castro@controlledriskservices.com" className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="break-all">carlos.castro@controlledriskservices.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p>17350 TX-249</p>
                  <p>Houston, TX 77064</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Controlled Risk Services LLC. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
