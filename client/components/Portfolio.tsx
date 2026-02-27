import { ExternalLink, Github, Info, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { authAPI, getSupabase } from "@/lib/api";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const categories = ["All", "Websites", "Web Apps", "Admin Panels"];
  if (isLoggedIn) {
    categories.push("Premium");
  }

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") {
      // Don't show Premium in "All" if not logged in
      if (p.category === "Premium" && !isLoggedIn) return false;
      return true;
    }
    return p.category === filter;
  });

  return (
    <section
      id="explore"
      className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div
        className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-teal-100 rounded-full">
            <p className="text-teal-700 text-sm font-semibold">Our Work</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredProjects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-slide-up overflow-hidden rounded-2xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`inline-block px-3 py-1 rounded-full w-fit ${
                      project.category === "Premium"
                        ? "bg-orange-100"
                        : "bg-teal-100"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold flex items-center gap-1 ${
                        project.category === "Premium"
                          ? "text-orange-700"
                          : "text-teal-700"
                      }`}
                    >
                      {project.category === "Premium" && (
                        <Lock className="w-3 h-3" />
                      )}
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Visit Code
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-50 text-orange-600 font-bold rounded-xl hover:bg-orange-100 border border-orange-100 transition-all duration-300 hover:scale-[1.01] active:scale-95 text-sm"
                  >
                    <Info className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
