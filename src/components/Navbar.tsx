import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Sebelum/Sesudah', href: '#sebelum-sesudah' },
    { name: 'Alur Kerja', href: '#alur-kerja' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const contactWA = "https://api.whatsapp.com/send?phone=6282123456789&text=Halo%20BB%20JASA%20LAS%20Admin.%20Saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20jasa%20pengelasan%5C...";

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-industrial-black/95 backdrop-blur-md py-4 border-b border-gray-800/80 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="brand-logo"
          >
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/35 group-hover:border-primary/80 transition-colors duration-300">
              <Hammer className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-white">
                BB JASA <span className="text-primary">LAS</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gray-400 font-bold uppercase">
                Premium Welding Fabricator
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm font-medium text-gray-400 hover:text-primary hover:border-b hover:border-primary/60 pb-1 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-gray-800 rounded hover:border-primary transition duration-300"
            >
              Konsultasi Free
            </a>
            <a
              href={contactWA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 text-white font-sans text-sm font-semibold px-5 py-2.5 rounded shadow-lg shadow-primary/20 hover:shadow-primary/40 text-center transition-all duration-300 active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              <span>WhatsApp Admin</span>
            </a>
          </div>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-industrial-gray focus:outline-none transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-0 top-[73px] z-40 bg-industrial-black border-t border-gray-800 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-3 bg-industrial-black/98 h-screen overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 text-base font-semibold text-gray-300 hover:text-primary hover:bg-industrial-gray/50 rounded-lg border-l-2 border-transparent hover:border-primary transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-gray-800 px-4 space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block w-full text-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 border border-gray-700 rounded-lg hover:border-primary transition duration-300"
            >
              Hubungi Kami / Konsultasi
            </a>
            <a
              href={contactWA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center space-x-2 w-full bg-primary text-white font-sans text-sm font-semibold px-4 py-3.5 rounded-lg shadow-lg active:scale-95 transition-all duration-200"
            >
              <PhoneCall className="h-5 w-5" />
              <span>WhatsApp Admin</span>
            </a>
          </div>
          <div className="flex justify-center items-center py-6 text-gray-500 text-xs space-x-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>BB JASA LAS | Garansi Kontrak 1 Tahun</span>
          </div>
        </div>
      </div>
    </header>
  );
}
