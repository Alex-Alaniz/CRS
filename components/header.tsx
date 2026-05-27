"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Shield, Star } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "TEAM", href: "/team" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a1628]/98 backdrop-blur-md border-b border-[#1e3a5f]" 
          : "bg-transparent"
      }`}
    >
      {/* Top accent stripe */}
      <div className="h-1 bg-gradient-to-r from-[#c41e3a] via-[#f0f4f8] to-[#3b82f6]" />
      
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="w-10 h-10 text-[#1e3a5f] fill-[#0f2140]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-[#d4a955]">US</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold tracking-wider text-metallic">
                CRS
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#d4a955] font-medium hidden sm:block">
                CONTROLLED RISK SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-medium tracking-widest transition-colors ${
                    isActive 
                      ? "text-[#f0f4f8]" 
                      : "text-[#8ba3c7] hover:text-[#f0f4f8]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c41e3a]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 bg-[#c41e3a] text-white text-xs font-semibold tracking-wider hover:bg-[#a01830] transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
                GET STARTED
                <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#f0f4f8]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1628] border-b border-[#1e3a5f] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 py-3 text-sm font-medium tracking-widest transition-colors ${
                        isActive 
                          ? "text-[#f0f4f8]" 
                          : "text-[#8ba3c7] hover:text-[#f0f4f8]"
                      }`}
                    >
                      <Star className={`w-3 h-3 ${isActive ? 'fill-[#d4a955] text-[#d4a955]' : 'text-[#1e3a5f]'}`} />
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] text-white text-xs font-semibold tracking-wider"
                >
                  <Star className="w-3 h-3 fill-[#d4a955] text-[#d4a955]" />
                  GET STARTED
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
