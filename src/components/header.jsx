import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2 } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Siddhesh-Dandekar', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/siddhesh-dandekar', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:siddhesh0129@gmail.com', label: 'Email' },
  ];

  return (
    <header className=" bg-white border-b border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-mono font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Siddhesh Dandekar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
        
            
            <div className="px-3 py-3 border-t border-gray-200">
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;