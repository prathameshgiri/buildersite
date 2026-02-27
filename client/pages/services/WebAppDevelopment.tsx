import ServiceDetailPage from "@/components/ServiceDetailPage";
import { Smartphone } from "lucide-react";

export default function WebAppDevelopment() {
  const keyPoints = [
    "Progressive Web App development",
    "Offline functionality support",
    "Native-like mobile experience",
    "Real-time data synchronization",
    "Push notifications",
    "Installable on home screen",
  ];

  const features = [
    {
      title: "PWA Technology",
      description: "Modern web app features",
      items: ["Service workers", "Web manifests", "Offline support", "App-like experience"],
    },
    {
      title: "Responsive Design",
      description: "Works everywhere",
      items: ["Mobile-first approach", "Touch gestures", "Screen optimization", "Cross-device"],
    },
    {
      title: "Performance",
      description: "Lightning-fast apps",
      items: ["Minimal bundle size", "Code splitting", "Lazy loading", "Caching strategy"],
    },
    {
      title: "Real-time Features",
      description: "Live data updates",
      items: ["WebSocket integration", "Live notifications", "Instant sync", "Collaborative features"],
    },
    {
      title: "Offline Capability",
      description: "Works without internet",
      items: ["Service worker caching", "Local storage", "Sync when online", "Data persistence"],
    },
    {
      title: "Installation",
      description: "Easy access",
      items: ["Add to home screen", "Desktop shortcuts", "Start menu entry", "Native feel"],
    },
  ];

  const process = [
    {
      step: 1,
      title: "App Concept & Design",
      description:
        "Define app features, user flows, and design the intuitive interface.",
    },
    {
      step: 2,
      title: "Architecture Planning",
      description:
        "Plan the tech stack, offline strategy, and real-time feature architecture.",
    },
    {
      step: 3,
      title: "Frontend Development",
      description:
        "Build responsive UI with modern frameworks optimized for web apps.",
    },
    {
      step: 4,
      title: "Backend Integration",
      description:
        "Develop APIs and backend services supporting real-time features.",
    },
    {
      step: 5,
      title: "PWA Implementation",
      description:
        "Add service workers, manifests, and offline capabilities.",
    },
    {
      step: 6,
      title: "Testing & Launch",
      description:
        "Comprehensive testing across devices and launch on app stores.",
    },
  ];

  const benefits = [
    "Works on any device with a browser",
    "Lower development costs than native apps",
    "Easier updates without app store approval",
    "Better discoverability through web",
    "Reduced app size and storage requirements",
    "Works offline with cached content",
    "Push notifications for user engagement",
    "Seamless cross-platform experience",
  ];

  return (
    <ServiceDetailPage
      icon={Smartphone}
      title="Web App Development"
      subtitle="Next-generation web applications"
      description="Build powerful, app-like web applications that work seamlessly across devices. We create Progressive Web Apps with offline capabilities, real-time features, and native app feel."
      keyPoints={keyPoints}
      features={features}
      process={process}
      benefits={benefits}
    />
  );
}
