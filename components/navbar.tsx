"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Palette, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageToggle } from "./language-toggle";
import { useTranslation } from "@/hooks/use-translation";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(htmlSection.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.home, icon: <Home className="w-4 h-4" /> },
    { id: "about", label: t.about, icon: <User className="w-4 h-4" /> },
    { id: "projects", label: t.projects, icon: <Code className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Desktop Navbar (unchanged from your beautiful design) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <nav
          className={`px-8 py-4 rounded-full ${
            isScrolled
              ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md"
              : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          } transition-all duration-300`}
        >
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Mobile Navbar (new but matching your style) */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-4 rounded-full ${
            isScrolled
              ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md"
              : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          } transition-all duration-300`}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`absolute right-0 mt-2 py-2 rounded-2xl ${
                isScrolled
                  ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md"
                  : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              } min-w-[200px]`}
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex items-center gap-3 py-3 px-6 text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
                <li className="px-6 py-3">
                  <LanguageToggle />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
