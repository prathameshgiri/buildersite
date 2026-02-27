import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Palette } from "lucide-react";

export default function WebsiteDesignDevelopment() {
  const keyPoints = [
    "Custom designs tailored to your brand identity",
    "Fully responsive and mobile-optimized websites",
    "Fast loading speeds and optimized performance",
    "SEO-friendly structure and best practices",
    "Integration with analytics and tracking tools",
    "Secure and regularly updated codebase",
  ];

  const features = [
    {
      title: "Design & UX",
      description: "Beautiful, user-centric designs that convert",
      items: [
        "Wireframing and prototyping",
        "Custom UI design",
        "User experience optimization",
        "Brand consistency",
      ],
    },
    {
      title: "Frontend Development",
      description: "Interactive and smooth user interfaces",
      items: [
        "React/Next.js development",
        "Responsive design",
        "Animation and interactions",
        "Browser compatibility",
      ],
    },
    {
      title: "Backend Integration",
      description: "Powerful server-side functionality",
      items: [
        "Database integration",
        "API development",
        "Form handling",
        "Content management",
      ],
    },
    {
      title: "Performance",
      description: "Lightning-fast and efficient",
      items: [
        "Image optimization",
        "Code splitting",
        "Caching strategies",
        "CDN integration",
      ],
    },
    {
      title: "Security",
      description: "Protected and secure websites",
      items: [
        "SSL/HTTPS encryption",
        "Data protection",
        "Regular security audits",
        "Backup solutions",
      ],
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates",
      items: [
        "Regular updates",
        "Bug fixes",
        "Performance monitoring",
        "24/7 support available",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and unique value proposition. We'll discuss your vision, competitors, and desired features.",
    },
    {
      step: 2,
      title: "Design & Wireframing",
      description:
        "Our designers create detailed wireframes and mockups, ensuring the user experience is intuitive and aligns with your brand identity.",
    },
    {
      step: 3,
      title: "Development",
      description:
        "We build your website using cutting-edge technologies, ensuring clean, maintainable code and excellent performance across all devices.",
    },
    {
      step: 4,
      title: "Testing & QA",
      description:
        "Comprehensive testing across browsers, devices, and network conditions. We verify functionality, performance, and security.",
    },
    {
      step: 5,
      title: "Deployment",
      description:
        "Your website goes live on optimized hosting. We handle DNS configuration, SSL setup, and ensure everything runs smoothly.",
    },
    {
      step: 6,
      title: "Support & Optimization",
      description:
        "We provide ongoing support, monitoring, and optimization based on analytics and user feedback.",
    },
  ];

  const benefits = [
    "Establish strong online presence and credibility",
    "Generate more leads and conversions",
    "Improve customer engagement and loyalty",
    "Stand out from competitors with unique design",
    "Better search engine rankings with SEO optimization",
    "Reduce bounce rates with optimized UX",
    "Easy-to-manage content with CMS integration",
    "Scale your business without website limitations",
  ];

  return (
    <ServiceDetailPage
      icon={Palette}
      title="Website Design & Development"
      subtitle="Beautiful, functional websites that drive results"
      description="Create stunning websites that not only look incredible but also convert visitors into customers. From concept to deployment, we handle every aspect of your web presence with precision and creativity."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
