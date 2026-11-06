import { motion } from 'framer-motion';

const footerLinks = {
  programs: [
    { name: 'Degree Programs', href: '#' },
    { name: 'Certificates', href: '#' },
    { name: 'Online Courses', href: '#' },
    { name: 'Corporate Training', href: '#' },
  ],
  resources: [
    { name: 'Library', href: '#' },
    { name: 'Career Services', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Academic Calendar', href: '#' },
  ],
  about: [
    { name: 'Our Story', href: '#' },
    { name: 'Faculty', href: '#' },
    { name: 'Accreditation', href: '#' },
    { name: 'Partnerships', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Technical Support', href: '#' },
  ],
};

const socialLinks = [
  { icon: 'ri-linkedin-fill', href: '#', label: 'LinkedIn' },
  { icon: 'ri-twitter-x-fill', href: '#', label: 'Twitter' },
  { icon: 'ri-facebook-fill', href: '#', label: 'Facebook' },
  { icon: 'ri-instagram-fill', href: '#', label: 'Instagram' },
  { icon: 'ri-youtube-fill', href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              EduVerse Academy
            </h3>
            <p className="text-gray-400 max-w-md">
              Empowering learners worldwide with expert education and transformative programs
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest courses and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#3C3C3C] text-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <button className="px-6 py-3 bg-coral text-white font-semibold rounded-full hover:bg-coral-dark transition-colors whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h5 className="text-white font-semibold mb-4">Programs</h5>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">About</h5>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Support</h5>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Connect</h5>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-[#3C3C3C] rounded-full hover:bg-coral transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400">
              © 2025 EduVerse Academy. All rights reserved.
            </div>
            <div className="text-gray-400">
              Accredited by International Education Standards Board
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Terms
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Accessibility
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://readdy.ai/?origin=logo" 
                className="hover:text-white transition-colors cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
