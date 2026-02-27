import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Database } from "lucide-react";

export default function BackendDevelopment() {
  const keyPoints = [
    "Robust Node.js & Python server development",
    "Scalable database architecture",
    "RESTful and GraphQL API design",
    "Authentication and authorization systems",
    "Real-time data processing",
    "Cloud deployment and DevOps",
  ];

  const features = [
    {
      title: "Backend Frameworks",
      description: "Powerful server technologies",
      items: ["Node.js & Express", "Python & Django", "TypeScript", "API development"],
    },
    {
      title: "Databases",
      description: "Reliable data storage",
      items: ["PostgreSQL", "MongoDB", "Redis", "Database optimization"],
    },
    {
      title: "APIs",
      description: "Seamless integrations",
      items: ["REST APIs", "GraphQL", "WebSockets", "Third-party integrations"],
    },
    {
      title: "Authentication",
      description: "Secure access control",
      items: ["JWT tokens", "OAuth integration", "User sessions", "Role-based access"],
    },
    {
      title: "Cloud Services",
      description: "Scalable infrastructure",
      items: ["AWS/GCP/Azure", "Docker & Kubernetes", "Serverless functions", "CDN integration"],
    },
    {
      title: "Security",
      description: "Protected systems",
      items: ["Data encryption", "SQL injection prevention", "Rate limiting", "Security audits"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Requirements & Architecture",
      description:
        "Define API specifications, database schema, and system architecture based on application needs.",
    },
    {
      step: 2,
      title: "Database Design",
      description:
        "Design efficient database schemas, set up relationships, and plan for scalability.",
    },
    {
      step: 3,
      title: "API Development",
      description:
        "Build RESTful or GraphQL APIs with proper validation, error handling, and documentation.",
    },
    {
      step: 4,
      title: "Authentication & Security",
      description:
        "Implement secure authentication, authorization, and data protection mechanisms.",
    },
    {
      step: 5,
      title: "Testing & Deployment",
      description:
        "Unit and integration testing, CI/CD setup, and deployment to production servers.",
    },
    {
      step: 6,
      title: "Monitoring & Maintenance",
      description:
        "Set up monitoring, logging, and implement regular maintenance and updates.",
    },
  ];

  const benefits = [
    "Reliable and secure data handling",
    "Scalable system that grows with your business",
    "Fast API response times",
    "Reduced server costs with optimization",
    "Better data integrity and consistency",
    "Simplified frontend development",
    "Easy integration with third-party services",
    "Robust error handling and recovery",
  ];

  return (
    <ServiceDetailPage
      icon={Database}
      title="Backend Development"
      subtitle="Powerful server-side solutions"
      description="Build the foundation of your application with robust backend systems. We create scalable, secure, and efficient server architectures that handle your business logic and data management."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
