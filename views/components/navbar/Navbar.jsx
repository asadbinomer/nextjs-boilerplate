"use client";

import { useEffect, useState } from "react";
import Button from "../shared/Button";
import { RouteConstant } from "@/views/constants/RouteConstant";
import { MenuIcon } from "@/icons/Icons";
import Link from "next/link";

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  const Links = [
    { name: "Inicio", path: "#hero", ariaLabel: "Ir a la sección de inicio" },
    { name: "Herramientas", path: "#tools", ariaLabel: "Explorar nuestras herramientas" },
    { name: "Destacados", path: "#features", ariaLabel: "Ver características destacadas" },
    { name: "Academia", path: "#academy", ariaLabel: "Visitar la academia" },
    { name: "Precios", path: "#pricing", ariaLabel: "Ver planes y precios" },
    { name: "FAQ", path: "#faqs", ariaLabel: "Preguntas frecuentes" },
    { name: "Testimonios", path: "#testimonial", ariaLabel: "Leer testimonios de clientes" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id ? `#${id}` : "#hero");
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      }
    );

    Links.forEach((link) => {
      const sectionId = link.path.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);
    setMobileNavbar(false);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 bg-white py-4 shadow-sm z-50" role="banner">
      <nav 
        className="px-6 flex items-center justify-between max-w-7xl mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="inline-block" aria-label="Home">
          <img
            src="/images/basic/logoprincipal1.svg"
            alt="Logo Principal"
            className="w-[200px] h-[50px] transition-transform duration-300 hover:scale-105 max-sm:w-[120px]"
            width="200"
            height="50"
          />
        </Link>

        {/* Navigation Links */}
        <div
          className={`flex items-center gap-8 max-[1370px]:gap-6 relative max-[1060px]:flex-col max-[1060px]:fixed max-[1060px]:inset-0 max-[1060px]:bg-white max-[1060px]:justify-center ${
            mobileNavbar ? "flex" : "max-[1060px]:hidden"
          }`}
          role="menubar"
        >
          {Links.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink(null)}
              role="menuitem"
            >
              <button
                onClick={(e) => handleClick(e, link.path)}
                className={`text-lg relative rounded-md transition-all duration-300 py-1.5 ${
                  activeSection === link.path
                    ? "text-blue-600"
                    : "text-gray-600"
                } hover:text-blue-600`}
                aria-label={link.ariaLabel}
                aria-current={activeSection === link.path ? "page" : undefined}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                    activeSection === link.path || hoveredLink === link.path
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <Button className="">
          <Link 
            href={RouteConstant.LOGIN}
            className="transition-all duration-300 hover:scale-105 hover:shadow-md btn-primary"
          >
            Acceder
          </Link>
          
          <button
            onClick={() => setMobileNavbar(!mobileNavbar)}
            className="hidden max-[1060px]:inline-block cursor-pointer"
            aria-label={mobileNavbar ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileNavbar}
            aria-controls="mobile-menu"
          >
            {mobileNavbar ? <CrossIcon /> : <MenuIcon />}
          </button>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;