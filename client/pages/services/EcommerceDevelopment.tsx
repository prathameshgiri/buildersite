import ServiceDetailPage from "@/components/ServiceDetailPage";
import { ShoppingCart } from "lucide-react";

export default function EcommerceDevelopment() {
  const keyPoints = [
    "Custom e-commerce platform development",
    "Secure payment processing integration",
    "Inventory management systems",
    "User account and order management",
    "Product catalog with advanced search",
    "Mobile-optimized shopping experience",
  ];

  const features = [
    {
      title: "Product Management",
      description: "Complete catalog control",
      items: ["Dynamic product pages", "Inventory tracking", "Variant management", "Search & filters"],
    },
    {
      title: "Shopping Cart & Checkout",
      description: "Smooth purchasing flow",
      items: ["Cart management", "One-click checkout", "Multiple payment methods", "Guest checkout"],
    },
    {
      title: "Payment Integration",
      description: "Secure transactions",
      items: ["Stripe/PayPal", "Multiple currencies", "PCI compliance", "Fraud detection"],
    },
    {
      title: "Order Management",
      description: "Efficient operations",
      items: ["Order tracking", "Shipping integration", "Invoicing", "Email notifications"],
    },
    {
      title: "Customer Features",
      description: "User engagement",
      items: ["User accounts", "Wishlist", "Reviews & ratings", "Loyalty programs"],
    },
    {
      title: "Analytics & Reports",
      description: "Business insights",
      items: ["Sales dashboard", "Customer analytics", "Inventory reports", "Revenue tracking"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "E-commerce Strategy",
      description:
        "Analyze your business model, define features needed, and plan the platform structure.",
    },
    {
      step: 2,
      title: "Platform Selection/Development",
      description:
        "Choose between custom development or platform customization based on requirements.",
    },
    {
      step: 3,
      title: "Product & Payment Setup",
      description:
        "Set up product catalogs, payment gateways, and shipping integrations.",
    },
    {
      step: 4,
      title: "Design & User Experience",
      description:
        "Create intuitive shopping experience with focus on conversion optimization.",
    },
    {
      step: 5,
      title: "Testing & Security",
      description:
        "Comprehensive testing for functionality and security compliance (PCI DSS).",
    },
    {
      step: 6,
      title: "Launch & Optimization",
      description:
        "Deploy your store and optimize based on user behavior and sales data.",
    },
  ];

  const benefits = [
    "Generate revenue 24/7 from online sales",
    "Reach customers globally with scalable platform",
    "Reduce operational costs with automation",
    "Better customer insights and analytics",
    "Increased customer lifetime value",
    "Competitive advantage in digital marketplace",
    "Easy inventory and order management",
    "Mobile customers can shop anytime, anywhere",
  ];

  return (
    <ServiceDetailPage
      icon={ShoppingCart}
      title="E-commerce Development"
      subtitle="Powerful online selling platforms"
      description="Launch successful online stores with custom e-commerce solutions. We build scalable, secure platforms designed to maximize conversions and streamline your operations."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
