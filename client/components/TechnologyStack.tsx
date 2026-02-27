export default function TechnologyStack() {
  const categories = [
    {
      name: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "PHP",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      name: "Database",
      technologies: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Redis",
        "Supabase",
      ],
    },
    {
      name: "Tools & Deployment",
      technologies: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Netlify",
        "GitHub",
        "CI/CD",
      ],
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div
        className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
            <p className="text-blue-700 text-sm font-semibold">
              Modern Technology
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Technology{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We use cutting-edge technologies and industry best practices to
            build fast, scalable, and secure applications.
          </p>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div
              key={category.name}
              className="opacity-0 animate-slide-up p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + idx * 0.1}s`,
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIdx) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 opacity-0 animate-slide-up"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: `${0.4 + idx * 0.1 + techIdx * 0.05}s`,
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
