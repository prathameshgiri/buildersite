import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b flex items-center justify-between p-6">
          <h2 className="text-3xl font-bold text-gray-900">{project.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Hero Image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl mb-8"
          />

          {/* Category and Tech */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className={`px-4 py-2 rounded-full font-semibold ${
                  project.category === "Premium"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-teal-100 text-teal-700"
                }`}
              >
                {project.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-600 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge, Solution, Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Challenge */}
            <div className="p-6 bg-orange-50 rounded-2xl border-2 border-orange-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Challenge
              </h4>
              <p className="text-gray-600">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Solution</h4>
              <p className="text-gray-600">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
              <p className="text-gray-600">{project.results}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              View Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
