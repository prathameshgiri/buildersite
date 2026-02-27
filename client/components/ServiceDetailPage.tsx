import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceDetailPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  features: {
    title: string;
    description: string;
    items: string[];
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  cta?: {
    text: string;
    action: string;
  };
}

export default function ServiceDetailPage({
  icon: Icon,
  title,
  subtitle,
  description,
  keyPoints,
  features,
  process,
  benefits,
  cta = { text: "Get Started", action: "/auth?mode=signup" },
}: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Gradient Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />
        <div
          className="absolute top-40 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          {/* Breadcrumb */}
          <div
            className="mb-8 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            <Link
              to="/#services"
              className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300"
            >
              ← Back to Services
            </Link>
          </div>

          {/* Header */}
          <div
            className="flex items-start gap-6 mb-8 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl">
              <Icon className="w-12 h-12 text-orange-600" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-xl text-gray-600">{subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            {description}
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
      </div>

      {/* Key Points Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            Key{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${0.4 + index * 0.08}s`,
                }}
              >
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            What We{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Include
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${0.4 + index * 0.1}s`,
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${0.4 + index * 0.1}s`,
                }}
              >
                <div className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-orange-300 to-orange-100 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            Key{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up flex items-start gap-4 p-6"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${0.4 + index * 0.08}s`,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert{" "}
            {title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={cta.action}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {cta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-orange-300 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
