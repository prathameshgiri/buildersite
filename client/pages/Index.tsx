import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectIdeaSection from "@/components/ProjectIdeaSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologyStack from "@/components/TechnologyStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
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
        <div
          className="absolute bottom-0 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Left Column: Hero Content */}
          <div className="flex flex-col justify-start">
            <Hero />
          </div>

          {/* Right Column: Project Idea Section */}
          <div className="flex flex-col justify-start">
            <ProjectIdeaSection />
          </div>
        </div>

        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Work Process Section */}
      <WorkProcess />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
