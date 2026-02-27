import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Code } from "lucide-react";

export default function FrontendDevelopment() {
  const keyPoints = [
    "Modern React and Vue.js development",
    "Pixel-perfect implementation of designs",
    "Smooth animations and transitions",
    "State management with Redux/Zustand",
    "Component-based architecture",
    "Cross-browser compatibility",
  ];

  const features = [
    {
      title: "Framework & Libraries",
      description: "Latest JavaScript frameworks",
      items: ["React & Next.js", "Vue.js & Nuxt", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "UI/UX Implementation",
      description: "Precise design execution",
      items: ["Responsive design", "Animation libraries", "Accessibility (WCAG)", "Icon systems"],
    },
    {
      title: "State Management",
      description: "Efficient data handling",
      items: ["Redux/Context API", "Zustand", "React Query", "Form management"],
    },
    {
      title: "Performance",
      description: "Lightning-fast interfaces",
      items: ["Code splitting", "Lazy loading", "Image optimization", "Bundle optimization"],
    },
    {
      title: "Testing",
      description: "Reliable and tested code",
      items: ["Unit testing", "Integration testing", "E2E testing", "Accessibility testing"],
    },
    {
      title: "Developer Tools",
      description: "Modern development setup",
      items: ["Build tools (Vite)", "CI/CD pipelines", "Version control", "Code quality tools"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description:
        "Understand the design specifications, performance requirements, and functionality needed.",
    },
    {
      step: 2,
      title: "Architecture Setup",
      description:
        "Design the component structure, state management strategy, and folder organization.",
    },
    {
      step: 3,
      title: "Component Development",
      description:
        "Build reusable, maintainable components following best practices and design patterns.",
    },
    {
      step: 4,
      title: "Integration",
      description:
        "Connect components with APIs, implement state management, and ensure smooth data flow.",
    },
    {
      step: 5,
      title: "Testing & Optimization",
      description:
        "Comprehensive testing, performance optimization, and accessibility compliance.",
    },
    {
      step: 6,
      title: "Deployment & Monitoring",
      description:
        "Deploy to production and monitor performance metrics for continuous improvement.",
    },
  ];

  const benefits = [
    "Fast and responsive user interfaces",
    "Improved user engagement and satisfaction",
    "Reduced loading times and faster interactions",
    "Better mobile experience",
    "Improved SEO with client-side optimization",
    "Easier maintenance and scalability",
    "Enhanced developer productivity",
    "Better code quality and fewer bugs",
  ];

  return (
    <ServiceDetailPage
      icon={Code}
      title="Frontend Development"
      subtitle="Interactive and engaging user experiences"
      description="Build powerful, interactive frontend applications using modern technologies. We create seamless user experiences with fast performance, beautiful design implementation, and robust functionality."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
