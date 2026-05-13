import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "INDEX", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "TEAM", href: "/team" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ],
  services: [
    { name: "Safety Consultant SME", href: "/services" },
    { name: "Construction Manager", href: "/services" },
    { name: "Cost Manager", href: "/services" },
    { name: "Field Safety Professional", href: "/services" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-serif font-bold text-foreground">
                <span className="text-accent">C</span>RS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Delivering tailored risk management and safety solutions. Protecting People. Powering Projects.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors tracking-wider"
            >
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono text-accent mb-6 tracking-wider">NAVIGATION</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-mono text-accent mb-6 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono text-accent mb-6 tracking-wider">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:346-436-3004" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  346-436-3004
                </a>
              </li>
              <li>
                <a 
                  href="mailto:carlos.castro@controlledriskservices.com" 
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="break-all">carlos.castro@controlledriskservices.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
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
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-muted-foreground tracking-wider">
              © {new Date().getFullYear()} CONTROLLED RISK SERVICES LLC
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors tracking-wider"
              >
                GET IN TOUCH
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
