import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#about" },
  { name: "News", href: "#news" },
  { name: "Contact us", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-500/50 bg-teal-700/100 text-teal-50 drop-shadow-2xl backdrop-blur-sm">
      <div className="container-grid">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
              <Shield className="h-5 w-5 text-teal-950" aria-hidden="true" />
            </div>
            <span className="font-heading text-xl font-semibold">
              <span className="text-teal-400">SPENDIFY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-body-sm font-medium text-teal-200/80 transition-colors hover:text-teal-300"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-body-sm font-medium text-teal-200/80 transition-colors hover:text-teal-300"
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-teal-200/80 hover:text-teal-100 hover:bg-teal-800/40"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-teal-500 text-teal-950 hover:bg-teal-400">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="p-2 text-teal-50 md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-teal-700/60 bg-teal-900 shadow-lg md:hidden">
            <nav
              id="mobile-nav"
              className="container-grid flex flex-col gap-4 py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="py-2 text-left text-body font-medium text-teal-200/80 transition-colors hover:text-teal-300"
                >
                  {link.name}
                </button>
              ))}

              <div className="mt-2 flex flex-col gap-2 border-t border-teal-800 pt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-teal-600/70 text-teal-800 hover:bg-teal-800/60"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-teal-500 text-teal-950 hover:bg-teal-400">
                    Sign up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
