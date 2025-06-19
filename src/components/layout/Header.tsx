import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Product", href: "#product" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact Us", href: "#contact-us" },
    { title: "About Us", href: "#about-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary">
            <a href="#home" className="title">
              <strong>AiSha</strong>
            </a>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="gradient" className="btn-primary">
              <a
                target="_blank"
                href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en"
              >
                Install Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full btn-primary">
                <a
                  target="_blank"
                  href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en"
                >
                  Install Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
