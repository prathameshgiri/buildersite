import { Lock, Zap, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { authAPI, getSupabase } from "@/lib/api";

export default function PremiumMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isSupabaseConfigured = !!getSupabase();

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const checkAuth = async () => {
      const authStatus = await authAPI.isAuthenticated();
      setIsLoggedIn(authStatus);
    };

    checkAuth();

    const sb = getSupabase();
    if (sb) {
      const {
        data: { subscription },
      } = sb.auth.onAuthStateChange((_event, session) => {
        setIsLoggedIn(!!session?.user);
      });
      return () => subscription.unsubscribe();
    }
  }, [isSupabaseConfigured]);

  return (
    <div
      className="opacity-0 animate-slide-up"
      style={{ animationFillMode: "forwards", animationDelay: "0.85s" }}
    >
      <div className="relative mt-12 rounded-3xl p-8 sm:p-10 border-2 border-orange-200/50 shadow-2xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
        {/* Multi-layer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100/30 rounded-3xl" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-300/10 to-orange-400/0 group-hover:via-orange-300/20 transition-all duration-500 rounded-3xl" />

        {/* Decorative Blobs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50 rounded-t-3xl" />

        <div className="relative z-10 flex flex-col gap-6">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-6">
            {/* Icon Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Icon Background Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />

                {/* Icon Container */}
                <div
                  className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ${
                    isLoggedIn
                      ? "from-teal-500 to-teal-600"
                      : "from-orange-500 to-orange-600"
                  }`}
                >
                  {isLoggedIn ? (
                    <CheckCircle
                      className="w-8 h-8 text-white"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Lock className="w-8 h-8 text-white" strokeWidth={1.5} />
                  )}
                </div>
              </div>
            </div>

            {/* Premium Badge */}
            <div
              className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r rounded-full border transition-colors duration-300 ${
                isLoggedIn
                  ? "from-teal-100 to-teal-50 border-teal-200 group-hover:border-teal-300"
                  : "from-orange-100 to-orange-50 border-orange-200 group-hover:border-orange-300"
              }`}
            >
              <Star
                className={`w-4 h-4 ${isLoggedIn ? "text-teal-500 fill-teal-500" : "text-orange-500 fill-orange-500"}`}
              />
              <span
                className={`text-xs font-semibold ${isLoggedIn ? "text-teal-700" : "text-orange-700"}`}
              >
                {isLoggedIn ? "Premium Unlocked" : "Premium Access"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {isLoggedIn ? "Welcome to Premium" : "Unlock Premium Projects"}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {isLoggedIn
                ? "You now have full access to our exclusive, real-world projects. Explore the Premium category in our portfolio below."
                : "Sign up or log in to access exclusive, real-world projects built for serious developers and businesses."}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isLoggedIn ? "bg-teal-500" : "bg-orange-500"}`}
              />
              Real-world Projects
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isLoggedIn ? "bg-teal-500" : "bg-orange-500"}`}
              />
              Expert Guidance
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isLoggedIn ? "bg-teal-500" : "bg-orange-500"}`}
              />
              Community Access
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div
                className={`w-1.5 h-1.5 rounded-full ${isLoggedIn ? "bg-teal-500" : "bg-orange-500"}`}
              />
              Career Growth
            </div>
          </div>

          {/* CTA Button */}
          {!isLoggedIn && (
            <div className="pt-2">
              <Link
                to="/auth?mode=signup"
                className="w-full group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <Zap
                    className="w-5 h-5 group-hover/btn:animate-pulse"
                    strokeWidth={2}
                  />
                  <span className="relative">Unlock Premium Projects</span>
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="pt-2">
              <Link
                to="/premium-projects"
                className="w-full group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Star
                    className="w-5 h-5 group-hover/btn:animate-pulse"
                    strokeWidth={2}
                  />
                  <span className="relative">Explore Premium Projects</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
