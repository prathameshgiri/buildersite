import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Wrench } from "lucide-react";

export default function WebsiteMaintenanceSupport() {
  const keyPoints = [
    "Proactive monitoring and maintenance",
    "Security updates and patches",
    "Performance optimization",
    "Regular backups and recovery",
    "Technical support 24/7",
    "Content updates and management",
  ];

  const features = [
    {
      title: "Regular Monitoring",
      description: "Always keeping watch",
      items: ["Uptime monitoring", "Performance tracking", "Error logging", "Security monitoring"],
    },
    {
      title: "Updates & Patches",
      description: "Keeping systems current",
      items: ["Security updates", "Framework updates", "Plugin updates", "Dependency updates"],
    },
    {
      title: "Backups & Recovery",
      description: "Data protection",
      items: ["Automated backups", "Regular testing", "Quick recovery", "Disaster prevention"],
    },
    {
      title: "Performance",
      description: "Speed optimization",
      items: ["Speed optimization", "Image compression", "Cache management", "CDN optimization"],
    },
    {
      title: "Support & Troubleshooting",
      description: "Always available",
      items: ["24/7 support", "Issue resolution", "Technical guidance", "Priority response"],
    },
    {
      title: "Content Management",
      description: "Easy updates",
      items: ["Page updates", "Content publishing", "Media management", "SEO optimization"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Audit",
      description:
        "Assess current website condition, identify issues, and plan maintenance strategy.",
    },
    {
      step: 2,
      title: "Setup Monitoring",
      description:
        "Implement monitoring tools to track performance, uptime, and security.",
    },
    {
      step: 3,
      title: "Regular Maintenance",
      description:
        "Perform scheduled updates, patches, and optimization tasks.",
    },
    {
      step: 4,
      title: "Issue Resolution",
      description:
        "Quickly identify and fix any issues that arise.",
    },
    {
      step: 5,
      title: "Performance Optimization",
      description:
        "Continuously optimize speed, security, and user experience.",
    },
    {
      step: 6,
      title: "Reporting & Communication",
      description:
        "Provide regular reports and communicate any important updates.",
    },
  ];

  const benefits = [
    "Maximum website uptime and availability",
    "Protected against security threats",
    "Faster website performance",
    "Reduced risk of data loss",
    "Peace of mind with 24/7 support",
    "Consistent user experience",
    "Reduced emergency repair costs",
    "Focus on your core business",
  ];

  return (
    <ServiceDetailPage
      icon={Wrench}
      title="Website Maintenance & Support"
      subtitle="Keep your website running smoothly"
      description="Keep your website secure, fast, and reliable with our comprehensive maintenance and support services. We handle all technical aspects so you can focus on your business."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
