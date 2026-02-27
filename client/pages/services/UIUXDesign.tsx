import ServiceDetailPage from "@/components/ServiceDetailPage";
import { PenTool } from "lucide-react";

export default function UIUXDesign() {
  const keyPoints = [
    "User-centered design approach",
    "Research-backed design decisions",
    "Wireframing and prototyping",
    "Interactive design mockups",
    "Accessibility compliance (WCAG)",
    "Design systems and component libraries",
  ];

  const features = [
    {
      title: "Research & Strategy",
      description: "Foundation for great design",
      items: ["User research", "Competitor analysis", "User personas", "User journey mapping"],
    },
    {
      title: "Wireframing",
      description: "Structure and layout",
      items: ["Low-fidelity wireframes", "Information architecture", "User flows", "Layout planning"],
    },
    {
      title: "Visual Design",
      description: "Beautiful interfaces",
      items: ["High-fidelity mockups", "Color schemes", "Typography", "Visual consistency"],
    },
    {
      title: "Prototyping",
      description: "Interactive experiences",
      items: ["Clickable prototypes", "Animations", "Interactions", "Usability testing"],
    },
    {
      title: "Design Systems",
      description: "Scalable design",
      items: ["Component library", "Design guidelines", "Brand standards", "Reusable patterns"],
    },
    {
      title: "Accessibility",
      description: "Inclusive design",
      items: ["WCAG compliance", "Color contrast", "Keyboard navigation", "Screen reader support"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Research",
      description:
        "Conduct user research, analyze competitors, and define project requirements.",
    },
    {
      step: 2,
      title: "Strategy & Planning",
      description:
        "Create user personas, define user journeys, and plan information architecture.",
    },
    {
      step: 3,
      title: "Wireframing",
      description:
        "Develop low-fidelity wireframes focusing on structure and functionality.",
    },
    {
      step: 4,
      title: "Visual Design",
      description:
        "Create high-fidelity mockups with final visual design and styling.",
    },
    {
      step: 5,
      title: "Prototyping & Testing",
      description:
        "Build interactive prototypes and conduct usability testing with real users.",
    },
    {
      step: 6,
      title: "Design Handoff",
      description:
        "Prepare design specifications and guidelines for development team.",
    },
  ];

  const benefits = [
    "Increased user satisfaction and engagement",
    "Higher conversion rates and sales",
    "Reduced development rework",
    "Faster time to market",
    "Better brand perception",
    "Improved accessibility for all users",
    "Consistent user experience",
    "Competitive advantage in the market",
  ];

  return (
    <ServiceDetailPage
      icon={PenTool}
      title="UI/UX Design"
      subtitle="User-centered design excellence"
      description="Create beautiful, intuitive interfaces that users love. We combine research-backed strategy with stunning visual design to build experiences that delight users and drive business results."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
