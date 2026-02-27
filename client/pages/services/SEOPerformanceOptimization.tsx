import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Rocket } from "lucide-react";

export default function SEOPerformanceOptimization() {
  const keyPoints = [
    "Technical SEO optimization",
    "On-page and off-page SEO",
    "Keyword research and targeting",
    "Content optimization",
    "Link building strategy",
    "Performance monitoring and reporting",
  ];

  const features = [
    {
      title: "Technical SEO",
      description: "Website optimization",
      items: ["Site speed", "Mobile optimization", "Structured data", "XML sitemaps"],
    },
    {
      title: "Keyword Strategy",
      description: "Targeted search terms",
      items: ["Keyword research", "Competition analysis", "Keyword mapping", "Long-tail targeting"],
    },
    {
      title: "On-Page Optimization",
      description: "Content enhancement",
      items: ["Meta tags", "Heading optimization", "Content quality", "Image optimization"],
    },
    {
      title: "Off-Page Optimization",
      description: "Authority building",
      items: ["Link building", "Backlink analysis", "Brand mentions", "Local SEO"],
    },
    {
      title: "Performance Optimization",
      description: "Speed improvements",
      items: ["Core Web Vitals", "Load time optimization", "Code splitting", "Asset optimization"],
    },
    {
      title: "Analytics & Reporting",
      description: "Data insights",
      items: ["Rank tracking", "Traffic analysis", "Conversion tracking", "Monthly reports"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "SEO Audit",
      description:
        "Analyze current website SEO performance, identify issues, and opportunities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description:
        "Create comprehensive SEO strategy with keyword targets and optimization plan.",
    },
    {
      step: 3,
      title: "Technical Optimization",
      description:
        "Fix technical issues, improve site structure, and enhance crawlability.",
    },
    {
      step: 4,
      title: "Content Optimization",
      description:
        "Optimize existing content and create new content targeting high-value keywords.",
    },
    {
      step: 5,
      title: "Link Building",
      description:
        "Develop backlink strategy and build authority through quality link building.",
    },
    {
      step: 6,
      title: "Monitoring & Reporting",
      description:
        "Track rankings, traffic, and performance with regular reporting and optimization.",
    },
  ];

  const benefits = [
    "Increased organic search visibility",
    "More qualified website traffic",
    "Higher conversion rates",
    "Improved user experience and engagement",
    "Faster page load times",
    "Better mobile experience",
    "Long-term sustainable growth",
    "Competitive advantage in search results",
  ];

  return (
    <ServiceDetailPage
      icon={Rocket}
      title="SEO & Performance Optimization"
      subtitle="Dominate search rankings and speed"
      description="Boost your online visibility and website performance. We implement proven SEO strategies and performance optimization techniques to drive more traffic and conversions from search engines."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
