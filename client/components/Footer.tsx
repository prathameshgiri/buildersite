import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="flex items-center gap-1 text-2xl font-bold mb-6"
              >
                <span className="text-orange-500">Prathamesh</span>
                <span>Giri</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Building exceptional digital experiences that drive real
                business results.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prathameshgiri"
                  className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/prathameshgiri.in"
                  className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#services"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services/website-design"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/frontend"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Frontend Dev
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/backend"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Backend Dev
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ui-ux-design"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-12"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              © 2024 - {currentYear} | Prathamesh Giri. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Engineered with passion. Delivered with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
