import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Award,
  FolderOpen,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useTheme } from "../../context/ThemeContext";

const NAV_ITEMS = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "About", href: "#about", Icon: User },
  { label: "Experience", href: "#experience", Icon: Briefcase },
  { label: "Skills", href: "#skills", Icon: Code2 },
  { label: "Certifications", href: "#certifications", Icon: Award },
  { label: "Projects", href: "#projects", Icon: FolderOpen },
  { label: "Contact Me", href: "#contact", Icon: Mail },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed bottom-0 md:bottom-auto md:top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-body)" }}
    >
      <div
        className="absolute inset-0 border-t md:border-t-0 md:border-b border-primary/10 shadow-lg md:shadow-md"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />
      <nav className="relative max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src="/assets/img/favicon.ico" alt="Logo" className="w-7 h-7" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? "text-primary" : "text-[var(--c-title)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-[var(--c-title)] hover:text-primary transition-colors duration-200 p-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="md:hidden text-[var(--c-title)] hover:text-primary transition-colors duration-200 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-up menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute bottom-full left-0 w-full rounded-t-2xl shadow-2xl py-6 px-6 border-t border-primary/10"
          style={{ backgroundColor: "var(--bg-body)" }}
        >
          <ul className="grid grid-cols-3 gap-5">
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex flex-col items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-primary ${
                      isActive ? "text-primary" : "text-[var(--c-title)]"
                    }`}
                  >
                    <Icon size={20} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
