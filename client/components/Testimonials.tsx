import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      feedback:
        "Exceptional work! They delivered our project ahead of schedule with outstanding quality. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      feedback:
        "Professional team with great communication. They understood our requirements perfectly and delivered beyond expectations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion & Co.",
      feedback:
        "Our e-commerce platform exceeded all expectations. The user experience is smooth and our sales increased significantly!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "James Wilson",
      company: "Enterprise Corp.",
      feedback:
        "Reliable, professional, and solution-oriented. They tackled complex requirements and delivered a robust solution.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
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
          <div className="inline-block mb-6 px-4 py-2 bg-rose-100 rounded-full">
            <p className="text-rose-700 text-sm font-semibold">
              Client Success Stories
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real clients who have transformed their business
            with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="opacity-0 animate-slide-up p-8 bg-gradient-to-br from-white to-rose-50 rounded-2xl border-2 border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all duration-300"
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-rose-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
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
