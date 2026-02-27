import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />
      <div
        className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center p-12 sm:p-16 lg:p-20 bg-slate-900 rounded-3xl shadow-2xl opacity-0 animate-slide-up relative overflow-hidden"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
            Let's Build Your Dream Project Today
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Ready to transform your ideas into reality? Get in touch with us and
            let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/auth?mode=signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View FAQs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-slate-400 text-sm mt-6 relative z-10">
            Have questions? Check out our FAQs or contact us directly
          </p>
        </div>
      </div>
    </section>
  );
}
