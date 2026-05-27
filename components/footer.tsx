import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight, Star, Shield } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
    <footer className="bg-[#081020] border-t border-[#1e3a5f]">
      {/* Patriotic stripe accent */}
      <div className="h-1 bg-gradient-to-r from-[#c41e3a] via-[#f0f4f8] to-[#3b82f6]" />
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#1e3a5f] fill-[#0f2140]" />
              <div>
                <span className="text-2xl font-bold text-metallic tracking-wider">CRS</span>
                <p className="text-[8px] text-[#d4a955] tracking-[0.2em]">CONTROLLED RISK SERVICES</p>
              </div>
            </Link>
            <p className="text-sm text-[#8ba3c7] mb-4 leading-relaxed">
              Delivering tailored risk management and safety solutions. Protecting People. Powering Projects.
            </p>
            <p className="text-xs text-[#d4a955] font-semibold tracking-wider mb-6">
              INTEGRITY. PROTECTION. EXCELLENCE.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#8ba3c7] hover:text-[#3b82f6] transition-colors tracking-wider"
            >
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-[#d4a955] mb-6 tracking-widest flex items-center gap-2">
              <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#8ba3c7] hover:text-[#f0f4f8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-[#d4a955] mb-6 tracking-widest flex items-center gap-2">
              <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
              SERVICES
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#8ba3c7] hover:text-[#f0f4f8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-[#d4a955] mb-6 tracking-widest flex items-center gap-2">
              <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:346-436-3004" 
                  className="flex items-center gap-3 text-sm text-[#8ba3c7] hover:text-[#f0f4f8] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c41e3a]" />
                  346-436-3004
                </a>
              </li>
              <li>
                <a 
                  href="mailto:carlos.castro@controlledriskservices.com" 
                  className="flex items-start gap-3 text-sm text-[#8ba3c7] hover:text-[#f0f4f8] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#c41e3a] shrink-0 mt-0.5" />
                  <span className="break-all">carlos.castro@controlledriskservices.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8ba3c7]">
                <MapPin className="w-4 h-4 text-[#c41e3a] shrink-0 mt-0.5" />
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
      <div className="border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
                ))}
              </div>
              <p className="text-xs text-[#8ba3c7] tracking-wider">
                © {new Date().getFullYear()} CONTROLLED RISK SERVICES LLC • AMERICAN OWNED & OPERATED
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-[#c41e3a] text-white text-xs font-semibold tracking-wider hover:bg-[#a01830] transition-colors"
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
