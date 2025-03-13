
import { useState, useEffect } from 'react';
import {cn} from "../utils/utils.ts";
import {Button} from "./ui/button.tsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-grok h-8 w-8 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">G</span>
          </span>
          <span className="font-heading text-xl">GrokPanel</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#get-started" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Get Started
          </a>
        </div>

        <div>
          <a href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en">
            <Button variant="default" size="sm" className="shadow-button transition-all hover:shadow-glow">
              Install Extension
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
