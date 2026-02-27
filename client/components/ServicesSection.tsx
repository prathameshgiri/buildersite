import ServiceCard from "./ServiceCard";
import {
  Palette,
  Code,
  Database,
  Zap,
  ShoppingCart,
  Smartphone,
  PenTool,
  Wrench,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design & Development",
    description:
      "Beautiful, responsive websites that capture your brand's essence and engage your audience with modern design principles.",
    link: "/services/website-design",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Cutting-edge React and Vue applications with smooth animations, intuitive interfaces, and exceptional user experiences.",
    link: "/services/frontend",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust server-side solutions using Node.js, Python, and databases. Secure, scalable, and built for growth.",
    link: "/services/backend",
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description:
      "End-to-end application development combining frontend finesse with powerful backend architecture for complete solutions.",
    link: "/services/full-stack",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and conversion-optimized checkout experiences.",
    link: "/services/ecommerce",
  },
  {
    icon: Smartphone,
    title: "Web App Development",
    description:
      "Progressive web apps and responsive applications that work seamlessly across all devices and screen sizes.",
    link: "/services/web-app",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. Every pixel purposeful, every interaction intuitive.",
    link: "/services/ui-ux-design",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description:
      "Ongoing support, updates, and optimization to keep your site secure, fast, and performing at its best.",
    link: "/services/maintenance",
  },
  {
    icon: Rocket,
    title: "SEO & Performance Optimization",
    description:
      "Strategic optimization to boost search rankings, improve page speed, and increase conversions and user engagement.",
    link: "/services/seo-performance",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" style={{ animationDelay: "0s" }} />
      <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" style={{ animationDelay: "0.2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 text-sm font-semibold">Our Services</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What We <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your ideas into stunning, functional, and profitable digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={`${0.3 + index * 0.1}s`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "1.2s" }}>
          <p className="text-gray-600 text-lg mb-6">
            Don't see what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get a Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
