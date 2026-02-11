
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Coffee, Mail, Phone, MapPin, X } from "lucide-react";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "CSR & Foundation", path: "/csr" },
    { name: "ACX & Blockchain", path: "/blockchain" },
    { name: "Green Coffee Marketplace", path: "/marketplace" },
  ];

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar with #3B2322 background */}
      <nav className="bg-[#3B2322] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={handleLinkClick}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Acacia Tree Farms</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium hover:text-amber-100 transition-colors ${
                    location.pathname === link.path
                      ? "text-amber-100 border-b-2 border-amber-100"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* EXTERNAL LINK to AcaciaBeverage.com */}
              <a
                href="https://acaciabeverage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-amber-100 transition-colors border-l border-white/30 pl-6"
              >
                Products & Equipment →
              </a>
            </div>

            {/* Mobile Menu Button - Hamburger/Close toggle */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Shows when isMobileMenuOpen is true */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#3B2322] border-t border-white/10 py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-white/20 text-amber-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* External Link in Mobile Menu */}
                <a
                  href="https://acaciabeverage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors flex items-center justify-between"
                >
                  <span>Products & Equipment</span>
                  <span className="text-amber-100">→</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Acacia Tree Farms</h3>
              <p className="text-gray-400">
                Sustainable coffee farming with purpose-driven impact in
                Ethiopia's Harar region.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://acaciabeverage.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Visit Acacia Beverage
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Harar, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+251 911 234 567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>contact@acaciatreefarms.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-xl font-bold mb-4">Stay in the Know</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-amber-500"
                />
                <button className="px-6 py-2 bg-[#3B2322] text-white rounded hover:bg-[#2d1a1a] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Acacia Tree Farms. All rights reserved.
            | Sister site to AcaciaBeverage.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
