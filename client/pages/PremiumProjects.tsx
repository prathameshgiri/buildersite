import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Info,
  Lock,
  ArrowLeft,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, Project } from "@/data/projects";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import { authAPI, getSupabase } from "@/lib/api";
import { Link, useNavigate } from "react-router-dom";

export default function PremiumProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const isSupabaseConfigured = !!getSupabase();

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsLoggedIn(false);
      return;
    }

    const checkAuth = async () => {
      const authStatus = await authAPI.isAuthenticated();
      setIsLoggedIn(authStatus);
      if (!authStatus) {
        navigate("/auth?mode=login");
      }
    };

    checkAuth();
  }, [isSupabaseConfigured, navigate]);

  const premiumProjects = projects.filter((p) => p.category === "Premium");

  if (isLoggedIn === null) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-8 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-orange-500 fill-orange-500" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Premium <span className="text-orange-600">Projects</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Exclusive access to enterprise-grade, real-world applications
            designed for serious growth and professional impact.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {premiumProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              {premiumProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Premium Badge Overlay */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-orange-100">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                      Premium
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-sm"
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
          ) : (
            <div className="text-center py-20 bg-orange-50 rounded-3xl border-2 border-dashed border-orange-200">
              <Lock className="w-16 h-16 text-orange-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Premium Projects Yet
              </h3>
              <p className="text-gray-600">
                Check back soon for our latest high-end developments.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Success Banner */}
      <section className="relative py-20 overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Want something similar for your business?
          </h2>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105"
          >
            Start a Custom Project
          </Link>
        </div>
      </section>

      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
