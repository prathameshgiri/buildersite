import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Clean & Scalable Code",
      description:
        "Well-structured, maintainable code that grows with your business",
    },
    {
      title: "On-Time Delivery",
      description:
        "We respect deadlines and deliver projects on schedule, every time",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs. You know exactly what you're paying for",
    },
    {
      title: "SEO-Friendly Development",
      description:
        "Built with SEO best practices to help your site rank higher",
    },
    {
      title: "Mobile-First Approach",
      description: "Every project is optimized for mobile devices first",
    },
    {
      title: "Post-Launch Support",
      description:
        "We're here for you after launch with ongoing support and updates",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
            <p className="text-purple-700 text-sm font-semibold">
              Why Choose Us
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, reliability, and innovation to deliver
            exceptional results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="opacity-0 animate-slide-up p-8 bg-white rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + index * 0.08}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
