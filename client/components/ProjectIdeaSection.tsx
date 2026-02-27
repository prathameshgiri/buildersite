import ProjectIdeaForm from "./ProjectIdeaForm";

export default function ProjectIdeaSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Section Heading */}
        <div className="mb-8 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Share Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Project Idea</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have a vision? Tell us about your project and let's bring it to life together. We'd love to hear from you!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:border-orange-200 transition-colors duration-300">
          <ProjectIdeaForm />
        </div>
      </div>
    </section>
  );
}
