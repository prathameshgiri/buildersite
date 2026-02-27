import {
  ClipboardList,
  Palette,
  Code2,
  TestTube,
  Rocket,
  Wrench,
} from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Requirement Analysis",
      description:
        "We understand your vision, goals, and business requirements in detail to create a perfect roadmap",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create beautiful wireframes and mockups to visualize the final product before development",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Code2,
      title: "Development",
      description:
        "Build your project using modern technologies and industry best practices for scalability",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description:
        "Comprehensive testing to ensure quality, performance, and security across all platforms",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description:
        "Launch your project on optimized hosting with proper configuration and monitoring setup",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      description:
        "Ongoing support, updates, and optimization to keep your project running smoothly",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div
        className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 text-sm font-semibold">How We Work</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Work Process
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A streamlined, transparent process that ensures clarity, quality,
            and timely delivery of your project
          </p>
        </div>

        {/* Grid Layout - All Screen Sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${0.3 + index * 0.08}s`,
                }}
              >
                <div className="h-full bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to get started? Let's discuss your project and create
            something amazing together!
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
