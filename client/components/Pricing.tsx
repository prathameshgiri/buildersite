import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "₹15,000",
      deliveryTime: "2-3 weeks",
      description: "Perfect for small businesses and freelancers",
      features: [
        "5-10 Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "Basic SEO",
        "Email Support",
        "1 Month Free Support",
      ],
      highlighted: false,
    },
    {
      name: "Business Website",
      price: "₹35,000",
      deliveryTime: "4-6 weeks",
      description: "Ideal for growing businesses",
      features: [
        "10-20 Pages",
        "Advanced Design",
        "CMS Integration",
        "Advanced SEO",
        "Email & Chat Support",
        "3 Months Free Support",
        "Analytics Setup",
        "Payment Integration Ready",
      ],
      highlighted: true,
    },
    {
      name: "Premium Web App",
      price: "₹75,000+",
      deliveryTime: "8-12 weeks",
      description: "For complex applications and platforms",
      features: [
        "Custom Development",
        "Database Design",
        "User Authentication",
        "Real-time Features",
        "API Development",
        "6 Months Free Support",
        "Performance Optimization",
        "Deployment & Monitoring",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 rounded-full">
            <p className="text-emerald-700 text-sm font-semibold">
              Transparent Pricing
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your needs. No hidden charges, ever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`opacity-0 animate-slide-up relative rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "border-emerald-500 shadow-2xl md:scale-105"
                  : "border-emerald-100 hover:border-emerald-300"
              }`}
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                    : "bg-gradient-to-br from-white to-emerald-50"
                }`}
              />

              {/* Content */}
              <div
                className={`relative p-8 ${plan.highlighted ? "text-white" : "text-gray-900"}`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-white bg-opacity-30 rounded-full">
                    <span className="text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : ""}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? "text-orange-100" : "text-gray-600"}`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p
                    className={`text-sm ${plan.highlighted ? "text-orange-100" : "text-gray-600"}`}
                  >
                    Delivery: {plan.deliveryTime}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  to="/auth?mode=signup"
                  className={`block w-full py-3 rounded-full font-semibold text-center mb-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-white text-emerald-600 hover:shadow-lg"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg"
                  }`}
                >
                  Get Started
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-orange-600"}`}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div
          className="text-center mt-12 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
        >
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <Link
              to="#contact"
              className="text-orange-600 font-semibold hover:text-orange-700"
            >
              Let's discuss your requirements
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
