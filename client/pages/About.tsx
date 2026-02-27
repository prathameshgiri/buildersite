import Navbar from "@/components/Navbar";
import { ArrowRight, Users, Target, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Gradient Background Blobs */}
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          {/* Page Title */}
          <div
            className="text-center mb-8 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
              <p className="text-orange-700 text-sm font-semibold">About Us</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Digital Excellence
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trust, innovation, and expertise combined to transform your vision
              into reality
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
      </div>

      {/* Story Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                What started as a passion for creating beautiful digital
                experiences has evolved into a mission-driven agency. Prathamesh
                Giri founded this company with a simple belief: every business
                deserves exceptional digital solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                For years, we've been helping entrepreneurs, startups, and
                established businesses transform their ideas into stunning
                websites and applications that not only look incredible but
                perform flawlessly.
              </p>
            </div>

            {/* Visual Element */}
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Years of Experience - Team working on project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-8">
                  <div>
                    <div className="text-5xl font-bold text-white mb-2">
                      10+
                    </div>
                    <p className="text-white font-medium text-lg">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="opacity-0 animate-slide-up p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance brand presence, and create meaningful
                connections with their audiences.
              </p>
            </div>

            {/* Vision */}
            <div
              className="opacity-0 animate-slide-up p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and innovative digital partner for
                businesses seeking to transform their ideas into exceptional
                digital experiences that stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Element */}
            <div
              className="opacity-0 animate-slide-up order-2 md:order-1"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Satisfied Clients - Happy team collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-8">
                  <div>
                    <p className="text-white font-medium text-lg mb-1">
                      Trusted by
                    </p>
                    <div className="text-5xl font-bold text-white mb-0">
                      50+
                    </div>
                    <p className="text-white font-medium">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className="opacity-0 animate-slide-up order-1 md:order-2"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Started
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Prathamesh Giri saw a gap in the market: many businesses had
                incredible ideas but couldn't find a reliable partner to bring
                them to life. Too often, digital solutions were either too
                expensive, too slow, or simply didn't deliver results.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With a passion for design and development, combined with a deep
                understanding of business needs, he created this company to
                bridge that gap. Our goal has always been simple—deliver
                exceptional quality without compromise.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <span>Transforming Ideas Into Reality</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Mindset
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              The values that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Core Value 1 */}
            <div
              className="opacity-0 animate-slide-up p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                We constantly push boundaries and embrace new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>

            {/* Core Value 2 */}
            <div
              className="opacity-0 animate-slide-up p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Client Focused
              </h3>
              <p className="text-gray-600">
                Your success is our success. We listen, understand, and deliver
                solutions that exceed expectations.
              </p>
            </div>

            {/* Core Value 3 */}
            <div
              className="opacity-0 animate-slide-up p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300"
              style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Excellence Always
              </h3>
              <p className="text-gray-600">
                We never settle for good enough. Every project is crafted with
                meticulous attention to detail.
              </p>
            </div>
          </div>

          {/* Additional Team Values */}
          <div
            className="mt-12 p-8 bg-white rounded-3xl border-2 border-orange-100 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.9s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Work Culture Pillars
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Collaborative Spirit
                </h4>
                <p className="text-gray-600">
                  We believe in the power of teamwork and open communication to
                  solve complex problems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Continuous Learning
                </h4>
                <p className="text-gray-600">
                  The digital landscape evolves constantly, so we stay ahead
                  with continuous skill development.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Integrity & Trust
                </h4>
                <p className="text-gray-600">
                  Transparency and honesty form the foundation of every client
                  relationship we build.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Passionate Execution
                </h4>
                <p className="text-gray-600">
                  We approach every project with enthusiasm and a commitment to
                  deliver outstanding results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Experience Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expertise &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Experience Stats */}
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">
                      Web Development
                    </span>
                    <span className="text-orange-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">
                      UI/UX Design
                    </span>
                    <span className="text-orange-600 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">
                      Brand Strategy
                    </span>
                    <span className="text-orange-600 font-bold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div
              className="opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">50+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Projects Delivered
                    </h4>
                    <p className="text-gray-600">
                      Successfully completed projects for diverse industries and
                      client sizes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">10+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Years of Excellence
                    </h4>
                    <p className="text-gray-600">
                      A decade of consistent delivery, innovation, and client
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">98%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Client Satisfaction
                    </h4>
                    <p className="text-gray-600">
                      Our clients trust us to deliver exceptional results, every
                      single time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div
            className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-3xl border-2 border-orange-100 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Frontend</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    React & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Backend</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Cloud Platforms
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Design</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    User Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Prototyping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how we can help transform
            your vision into reality.
          </p>
          <Link
            to="/auth?mode=signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
