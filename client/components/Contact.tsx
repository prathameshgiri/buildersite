import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { authAPI } from "@/lib/api";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await authAPI.submitContact(formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent! We'll get back to you soon.");
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setIsSubmitting(false);
      toast.error(error.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 text-sm font-semibold">
              Get In Touch
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help transform your
            ideas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div
            className="opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@prathameshgiri.in</p>
              <p className="text-gray-600">prathameshgiri8607@gmail.com</p>
            </div>
          </div>

          <div
            className="opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            <div className="p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 8010901226</p>
              <p className="text-gray-600">WhatsApp: +91 8010901226</p>
            </div>
          </div>

          <div
            className="opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <div className="p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Pune, India</p>
              <p className="text-gray-600">Remote / On-site</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="opacity-0 animate-slide-up space-y-6"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="+91 (123) 456-7890"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Project subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Info */}
          <div
            className="opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            <div className="p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl border-2 border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Response
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">
                    Response Time:
                  </span>{" "}
                  We typically respond within 24 hours
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Best Time:
                  </span>{" "}
                  Monday - Friday, 10 AM - 6 PM IST
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Urgent Queries:
                  </span>{" "}
                  Use WhatsApp for immediate assistance
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    What to Include:
                  </span>{" "}
                  Brief project description, budget, and timeline
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-200">
                <p className="text-sm text-gray-600">
                  We look forward to hearing from you and exploring how we can
                  help bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
