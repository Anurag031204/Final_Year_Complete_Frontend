import { Link } from "react-router-dom";
import { Shield, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-teal-50 py-12">
      <div className="container-grid">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                <Shield className="h-5 w-5 text-teal-950" aria-hidden="true" />
              </div>
              <span className="text-xl font-heading font-semibold">
                <span className="text-teal-400">SPENDIFY</span>
              </span>
            </Link>
            <p className="text-body-sm text-teal-200/70">
              Your watchdog for every transaction. The most secure payment option.
            </p>
          </div>

          {/* Home */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Home</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#about"
                  className="text-body-sm text-teal-200/70 transition-colors hover:text-teal-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#how-it-works"
                  className="text-body-sm text-teal-200/70 transition-colors hover:text-teal-300"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#contact"
                  className="text-body-sm text-teal-200/70 transition-colors hover:text-teal-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#faq"
                  className="text-body-sm text-teal-200/70 transition-colors hover:text-teal-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#careers"
                  className="text-body-sm text-teal-200/70 transition-colors hover:text-teal-300"
                >
                  Careers
                </Link>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-6 flex gap-3" aria-label="Social media">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Spendify on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded border border-teal-600/40 text-teal-200/80 transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Spendify on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded border border-teal-600/40 text-teal-200/80 transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Spendify on Twitter"
                className="flex h-8 w-8 items-center justify-center rounded border border-teal-600/40 text-teal-200/80 transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-teal-800/60 pt-8 md:flex-row">
          <p className="text-body-sm text-teal-300/70">
            © {new Date().getFullYear()} Spendify. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-body-sm text-teal-300/70 transition-colors hover:text-teal-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-body-sm text-teal-300/70 transition-colors hover:text-teal-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

  export default Footer;