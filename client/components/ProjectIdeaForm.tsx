import { FormEvent, useState } from "react";
import { Mail, User, Lightbulb, Send } from "lucide-react";
import { authAPI } from "@/lib/api";
import { toast } from "sonner";

export default function ProjectIdeaForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await authAPI.submitProjectIdea(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", idea: "" });
      toast.success("Thank you! Your idea has been sent.");

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error: any) {
      console.error("Error submitting idea:", error);
      setIsSubmitting(false);
      toast.error(
        error.message || "Failed to send your idea. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Name Field */}
      <div
        className="opacity-0 animate-slide-up"
        style={{ animationFillMode: "forwards", animationDelay: "1s" }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-orange-500" />
            Name
          </div>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 hover:border-gray-300"
        />
      </div>

      {/* Email Field */}
      <div
        className="opacity-0 animate-slide-up"
        style={{ animationFillMode: "forwards", animationDelay: "1.1s" }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            Email
          </div>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 hover:border-gray-300"
        />
      </div>

      {/* Idea Field */}
      <div
        className="opacity-0 animate-slide-up"
        style={{ animationFillMode: "forwards", animationDelay: "1.2s" }}
      >
        <label
          htmlFor="idea"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-orange-500" />
            Your Idea
          </div>
        </label>
        <textarea
          id="idea"
          name="idea"
          value={formData.idea}
          onChange={handleChange}
          placeholder="Describe your project idea..."
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 hover:border-gray-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <div
        className="opacity-0 animate-slide-up"
        style={{ animationFillMode: "forwards", animationDelay: "1.3s" }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          <span>{isSubmitting ? "Sending..." : "Send My Idea"}</span>
        </button>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700 font-medium animate-slide-up">
          ✓ Thank you! We'll review your idea soon.
        </div>
      )}
    </form>
  );
}
