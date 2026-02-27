import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services do you offer?",
          a: "We offer comprehensive web development and design services including website design & development, frontend development, backend development, full-stack development, e-commerce development, web app development, UI/UX design, website maintenance & support, and SEO & performance optimization.",
        },
        {
          q: "How long has your company been in business?",
          a: "We have over 10 years of experience in delivering exceptional digital solutions to businesses of all sizes. Our track record includes 50+ successful projects across various industries.",
        },
        {
          q: "What is your team size?",
          a: "Our team consists of expert developers, designers, and project managers who collaborate to deliver outstanding results. We work in agile teams to ensure efficient project delivery.",
        },
      ],
    },
    {
      category: "Projects & Timeline",
      questions: [
        {
          q: "How long does a website take to build?",
          a: "Timeline depends on complexity: Starter websites take 2-3 weeks, business websites take 4-6 weeks, and premium web apps take 8-12 weeks. Custom projects are discussed on a case-by-case basis.",
        },
        {
          q: "Can you speed up the project timeline?",
          a: "Yes, we can expedite projects by dedicating additional resources. However, we maintain quality standards and may charge a premium for accelerated timelines.",
        },
        {
          q: "What is your project delivery process?",
          a: "We follow a structured 6-step process: Requirement Analysis → UI/UX Design → Development → Testing → Deployment → Support & Maintenance. You'll have regular updates throughout.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "Do you provide hosting?",
          a: "While we don't directly provide hosting, we help you set up and deploy projects on reliable platforms like Vercel, Netlify, AWS, or your preferred hosting provider. We handle all technical setup.",
        },
        {
          q: "Is the website mobile-friendly?",
          a: "Absolutely! We use a mobile-first approach, ensuring all our projects are fully responsive and optimized for mobile devices, tablets, and desktops.",
        },
        {
          q: "What technologies do you use?",
          a: "We use modern tech stacks including React/Next.js for frontend, Node.js/Python for backend, MongoDB/PostgreSQL for databases, and tools like Docker, AWS, and Vercel for deployment.",
        },
        {
          q: "Is the website SEO-friendly?",
          a: "Yes! All our projects are built with SEO best practices in mind. We implement proper meta tags, structured data, performance optimization, and follow Google's guidelines.",
        },
      ],
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          q: "Do you offer support after delivery?",
          a: "Yes! All our packages include post-launch support. Starter plans include 1 month, business plans include 3 months, and premium plans include 6 months of free support.",
        },
        {
          q: "What happens after the free support period ends?",
          a: "After free support expires, we offer affordable maintenance packages for ongoing updates, bug fixes, feature enhancements, and technical support.",
        },
        {
          q: "How do I report bugs or issues?",
          a: "You can report issues via email, WhatsApp, or our support portal. We prioritize critical bugs and aim to fix them within 24 hours.",
        },
        {
          q: "Can you add new features later?",
          a: "Absolutely! We can add new features and make modifications to your website or app. We provide a detailed quote for any additional work.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Do you offer flexible payment terms?",
          a: "Yes! Typically we work on a 50% upfront and 50% on delivery basis. For larger projects, we can discuss customized payment schedules.",
        },
        {
          q: "Are there any hidden charges?",
          a: "No! We believe in complete transparency. Our quotes include everything, and there are no surprise charges. We'll discuss any additional costs upfront.",
        },
        {
          q: "What if the project goes over budget?",
          a: "We work with detailed project scopes and timelines. If scope changes occur, we'll notify you and provide a revised quote before proceeding.",
        },
        {
          q: "Can I get a custom quote?",
          a: "Of course! Every project is unique. Contact us with your requirements, and we'll provide a detailed, customized quote based on your specific needs.",
        },
      ],
    },
    {
      category: "Company & Process",
      questions: [
        {
          q: "How do I get started?",
          a: "Simply reach out through our contact form or WhatsApp. We'll schedule a consultation call to understand your requirements and discuss the project in detail.",
        },
        {
          q: "Can I see examples of your previous work?",
          a: "Yes! Check our portfolio section to see our recent projects, client testimonials, and case studies. You can also request references from similar projects.",
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes, we respect client confidentiality and are happy to sign NDAs when required for sensitive projects.",
        },
        {
          q: "What is your communication style?",
          a: "We believe in transparent, regular communication. You'll have a dedicated project manager, regular status updates, and open channels for questions or concerns.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let faqIndex = 0;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white flex-1">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />
        <div
          className="absolute top-40 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div
            className="text-center mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and
              pricing
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
      </div>

      {/* FAQs Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((categoryData) => (
            <div key={categoryData.category} className="mb-16">
              {/* Category Title */}
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: "0.2s",
                }}
              >
                {categoryData.category}
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {categoryData.questions.map((faq, idx) => {
                  const currentIndex = faqIndex++;
                  return (
                    <div
                      key={currentIndex}
                      className="opacity-0 animate-slide-up border-2 border-orange-100 rounded-lg overflow-hidden hover:border-orange-300 transition-colors duration-300"
                      style={{
                        animationFillMode: "forwards",
                        animationDelay: `${0.3 + idx * 0.05}s`,
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-orange-50 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.q}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openIndex === currentIndex && (
                        <div className="px-6 pb-6 bg-orange-50 border-t border-orange-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Don't hesitate to reach out. We're here to help!
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
