import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Zap } from "lucide-react";

export default function FullStackDevelopment() {
  const keyPoints = [
    "End-to-end application development",
    "Modern tech stack integration",
    "Database to frontend implementation",
    "API design and development",
    "Deployment and DevOps",
    "Complete project ownership",
  ];

  const features = [
    {
      title: "Frontend Stack",
      description: "Modern user interfaces",
      items: ["React/Vue", "TypeScript", "Tailwind CSS", "State management"],
    },
    {
      title: "Backend Stack",
      description: "Powerful servers",
      items: ["Node.js/Python", "Express/Django", "PostgreSQL", "Redis caching"],
    },
    {
      title: "Full Integration",
      description: "Seamless connection",
      items: ["API development", "Authentication", "Real-time features", "File handling"],
    },
    {
      title: "Database Design",
      description: "Optimized data storage",
      items: ["Schema design", "Indexing", "Query optimization", "Data integrity"],
    },
    {
      title: "DevOps & Deployment",
      description: "Automated infrastructure",
      items: ["Docker containerization", "CI/CD pipelines", "Cloud hosting", "Monitoring"],
    },
    {
      title: "Testing",
      description: "Comprehensive coverage",
      items: ["Unit tests", "Integration tests", "E2E tests", "Performance testing"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Project Planning",
      description:
        "Define requirements, create detailed specifications, and plan the complete development timeline.",
    },
    {
      step: 2,
      title: "Architecture Design",
      description:
        "Design the entire system architecture, database schema, and API structure.",
    },
    {
      step: 3,
      title: "Development",
      description:
        "Develop frontend, backend, and database components in parallel with regular synchronization.",
    },
    {
      step: 4,
      title: "Integration",
      description:
        "Integrate all components, ensure APIs work correctly, and test the complete system.",
    },
    {
      step: 5,
      title: "Testing",
      description:
        "Comprehensive testing including unit, integration, and end-to-end tests.",
    },
    {
      step: 6,
      title: "Deployment & Support",
      description:
        "Deploy to production, monitor performance, and provide ongoing support and updates.",
    },
  ];

  const benefits = [
    "Single point of contact for entire project",
    "Consistent technology choices across stack",
    "Faster development with integrated approach",
    "Better communication and fewer hand-offs",
    "Complete ownership and responsibility",
    "Easier maintenance and updates",
    "Cost-effective compared to multiple vendors",
    "Optimized performance across all layers",
  ];

  return (
    <ServiceDetailPage
      icon={Zap}
      title="Full-Stack Development"
      subtitle="Complete application solutions"
      description="Build comprehensive web applications from database to user interface. We handle every layer of your application, ensuring seamless integration, optimal performance, and long-term maintainability."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
