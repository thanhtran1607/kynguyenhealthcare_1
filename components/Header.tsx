"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Scroll effect: add "scrolled" class after 500px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);

      // Detect active section for hash links (only on homepage)
      if (pathname === "/") {
        const sections = ["home", "about", "services"];
        const headerOffset = 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerOffset) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".nav-menu") &&
        !target.closest(".mobile-menu-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Smooth scroll for hash links
  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (pathname !== "/") {
        // If not on homepage, navigate to homepage with hash
        window.location.href = `/${hash}`;
      }
    },
    [pathname]
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Determine if a nav link is active
  const isActive = (href: string): boolean => {
    if (href === "/" || href === "/#home") {
      return pathname === "/" && activeSection === "home";
    }
    if (href === "/#about") {
      return pathname === "/" && activeSection === "about";
    }
    if (href === "/#services") {
      return pathname === "/" && activeSection === "services";
    }
    if (href === "/cham-soc-vien") {
      return pathname === "/cham-soc-vien";
    }
    if (href === "/lien-he") {
      return pathname === "/lien-he";
    }
    return false;
  };

  const navLinks = [
    { href: "/", hash: "#home", label: "Trang chủ", isHash: true },
    {
      href: "/#about",
      hash: "#about",
      label: "KỶ NGUYÊN HEALTH CARE",
      isHash: true,
    },
    { href: "/#services", hash: "#services", label: "Dịch vụ", isHash: true },
    {
      href: "/cham-soc-vien",
      hash: "",
      label: "Chăm sóc viên",
      isHash: false,
    },
    {
      href: "https://suatan.kynguyenhealthcare.com/order/7WgT28vwJ5o2d7z0FPgcjlAhHbnyqQS3mNNgDtu6SKA",
      hash: "",
      label: "Suất ăn dinh dưỡng",
      isHash: false,
      external: true,
    },
    { href: "/lien-he", hash: "", label: "Liên hệ", isHash: false },
  ];

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link href="/">
                <img
                  src="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/LogoKN@4x.png"
                  alt="KỶ NGUYÊN HEALTH CARE"
                  className="logo-img"
                />
              </Link>
            </div>
            <ul
              className={`nav-menu${mobileMenuOpen ? " active" : ""}`}
              id="navMenu"
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  ) : link.isHash && pathname === "/" ? (
                    <a
                      href={link.hash}
                      className={isActive(link.href) ? "active" : ""}
                      onClick={(e) => handleHashClick(e, link.hash)}
                    >
                      {link.label}
                    </a>
                  ) : link.isHash ? (
                    <Link
                      href={`/${link.hash}`}
                      className={isActive(link.href) ? "active" : ""}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className={isActive(link.href) ? "active" : ""}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div
              className={`mobile-menu-toggle${mobileMenuOpen ? " active" : ""}`}
              id="mobileMenuToggle"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
