import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  delay = "0s",
}: ServiceCardProps) {
  return (
    <div
      className="opacity-0 animate-slide-up group"
      style={{ animationFillMode: "forwards", animationDelay: delay }}
    >
      <div className="h-full flex flex-col p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        {/* Icon Container */}
        <div className="mb-6 inline-flex">
          <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl group-hover:from-orange-200 group-hover:to-orange-100 transition-colors duration-300">
            <Icon className="w-8 h-8 text-orange-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Learn More Link */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Learn more</span>
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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
        </Link>
      </div>
    </div>
  );
}
