import { Sparkles, ArrowRight } from "lucide-react";
import PremiumMessage from "./PremiumMessage";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-start">
        {/* Social Proof Badge */}
        <div
          className="mb-8 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
        >
          <div className="badge-pill hover:shadow-md transition-shadow duration-300 sm:w-fit">
            <div className="flex -space-x-2">
              <div
  className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-300"
  title="Client 1"
>
  <img
    src="https://i.pinimg.com/736x/a0/7e/97/a07e97d59a80980946c144f2ae8446b1.jpg"
    alt="Client 1"
    className="w-full h-full object-cover"
  />
</div>

<div
  className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-300"
  title="Client 2"
>
  <img
    src="https://i.pinimg.com/1200x/dc/ef/a9/dcefa9cacc1e9ffa53276b178fdb0a3f.jpg"
    alt="Client 2"
    className="w-full h-full object-cover"
  />
</div>

<div
  className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-300"
  title="Client 3"
>
  <img
    src="https://i.pinimg.com/736x/15/e5/75/15e575c7279d73dbfd7ce6492c1c6994.jpg"
    alt="Client 3"
    className="w-full h-full object-cover"
  />
</div>

            </div>
            <span className="text-gray-700 text-sm">
              30+ businesses built with Prathamesh Giri
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div
          className="max-w-2xl mb-8 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span
              className="text-gray-900 inline-block opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              Build your dream website with
            </span>
            <br />

            <span
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              Prathamesh Giri
              <Sparkles
                className="w-8 h-8 text-orange-500 inline opacity-0 animate-bounce-subtle"
                style={{ animationDelay: "0.9s" }}
              />
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
          >
            Transform your ideas into stunning digital experiences. Professional
            design, seamless development, and unlimited possibilities.
          </p>

          {/* About Link */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 opacity-0 animate-slide-up group"
            style={{ animationFillMode: "forwards", animationDelay: "0.82s" }}
          >
            <span className="text-base sm:text-lg">About</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Premium Message Section */}
          <PremiumMessage />
        </div>
      </div>
    </div>
  );
}
