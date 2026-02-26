import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from "@assets/logo.png";

export function Navigation() {
  const [location] = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-2"
          : "bg-white border-transparent py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src={logo}
              alt="RMKMATE26 Logo"
              className="h-8 w-8 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-base group-hover:text-primary">
                RMKMATE'26
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                IEEE Conference
              </span>
            </div>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-1">

          {/* Home */}
          <NavItem href="/" label="Home" location={location} />

          {/* About RMKEC */}
          <NavItem href="/about-rmkec" label="About RMKEC" location={location} />

          {/* RMKMATE Dropdown */}
          <Dropdown label="RMKMATE">
            <Link href="/rmkmate23">
              <DropdownItem>RMKMATE23</DropdownItem>
            </Link>
            <Link href="/rmkmate25">
              <DropdownItem>RMKMATE25</DropdownItem>
            </Link>
          </Dropdown>

          {/* Committees */}
          <NavItem href="/committees" label="Committees" location={location} />

          {/* Speakers */}
          <NavItem href="/speakers" label="Speakers" location={location} />

          {/* Paper Submission */}
          <NavItem href="/papers" label="Paper Submission" location={location} />

          {/* Schedule */}
          <NavItem href="/schedule" label="Schedule" location={location} />

          {/* Venue Dropdown */}
          <Dropdown label="Venue">
            <Link href="/venue">
              <DropdownItem>Conference Venue</DropdownItem>
            </Link>
            <Link href="/transportation">
              <DropdownItem>Transportation</DropdownItem>
            </Link>
          </Dropdown>

          {/* Contact */}
          <NavItem href="/contact" label="Contact Us" location={location} />

        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl">
          <div className="flex flex-col p-4 gap-2">

            <MobileItem href="/" label="Home" setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileItem href="/about-rmkec" label="About RMKEC" setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <div className="px-4 py-2 font-medium text-muted-foreground">
              RMKMATE
            </div>
            <MobileItem href="/rmkmate23" label="RMKMATE23" setIsMobileMenuOpen={setIsMobileMenuOpen} indent />
            <MobileItem href="/rmkmate25" label="RMKMATE25" setIsMobileMenuOpen={setIsMobileMenuOpen} indent />

            <MobileItem href="/committees" label="Committees" setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileItem href="/speakers" label="Speakers" setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileItem href="/papers" label="Paper Submission" setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileItem href="/schedule" label="Schedule" setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <div className="px-4 py-2 font-medium text-muted-foreground">
              Venue
            </div>
            <MobileItem href="/venue" label="Conference Venue" setIsMobileMenuOpen={setIsMobileMenuOpen} indent />
            <MobileItem href="/transportation" label="Transportation" setIsMobileMenuOpen={setIsMobileMenuOpen} indent />

            <MobileItem href="/contact" label="Contact Us" setIsMobileMenuOpen={setIsMobileMenuOpen} />

          </div>
        </div>
      )}
    </nav>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function NavItem({ href, label, location }: any) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
          location === href
            ? "text-primary bg-primary/5"
            : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
        )}
      >
        {label}
      </div>
    </Link>
  )
}

function Dropdown({ label, children }: any) {
  return (
    <div className="relative group">
      <div className="px-4 py-2 text-sm font-medium rounded-md cursor-pointer text-muted-foreground hover:text-primary hover:bg-secondary/50 flex items-center gap-1">
        {label}
        <ChevronDown size={16} />
      </div>

      <div className="absolute left-0 top-full mt-2 bg-white border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
        {children}
      </div>
    </div>
  )
}

function DropdownItem({ children }: any) {
  return (
    <div className="px-4 py-2 hover:bg-slate-100 cursor-pointer">
      {children}
    </div>
  )
}

function MobileItem({ href, label, setIsMobileMenuOpen, indent }: any) {
  return (
    <Link href={href}>
      <div
        className={`px-${indent ? "6" : "4"} py-3 rounded-lg hover:bg-secondary cursor-pointer`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </div>
    </Link>
  )
}