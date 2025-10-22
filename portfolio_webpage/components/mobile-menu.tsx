"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="sm:hidden">
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="icon"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-background border-t shadow-md flex flex-col space-y-4 px-6 py-4">
          <Link
            href="#about"
            onClick={closeMenu}
            className="text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={closeMenu}
            className="text-sm font-medium"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            onClick={closeMenu}
            className="text-sm font-medium"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={closeMenu}
            className="text-sm font-medium"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
