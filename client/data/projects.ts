export interface Project {
  id: number;
  name: string;
  category: "Websites" | "Web Apps" | "Admin Panels" | "Premium";
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string;
}

export const projects: Project[] = [


  

  {
    id: 7,
    name: "E-Commerce Admin Dashboard",
    category: "Premium",
    description:
      "Responsive e-commerce admin dashboard built using pure HTML, CSS, and JavaScript for business analytics.",
    fullDescription:
      "A modern and lightweight e-commerce admin dashboard developed using vanilla HTML, CSS, and JavaScript. The dashboard provides a clear overview of key business metrics such as new orders, daily income, total revenue, and user growth. Interactive charts, statistic cards, and a clean admin interface make monitoring performance efficient without relying on heavy frameworks.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Chart.js"
    ],
    image:
      "https://res.prathameshgiri.in/projects/dashboard.png",
    liveLink: "x.prathameshgiri.in/Dashboard/",
    githubLink: "",
    features: [
      "E-commerce performance overview",
      "New orders & user statistics",
      "Daily and total income tracking",
      "Yearly sales and revenue charts",
      "Interactive statistic cards",
      "Fully responsive admin layout",
      "Sidebar navigation menu",
      "Admin profile & notification UI"
    ],
    challenge:
      "Building a scalable and interactive dashboard using only vanilla technologies without frameworks.",
    solution:
      "Implemented modular JavaScript logic, optimized DOM updates, and used Chart.js for smooth and responsive data visualization.",
    results:
      "Delivered a fast-loading, responsive admin dashboard with clean UI and smooth analytics interactions."
  },



  
  {
    id: 8,
    name: "Feastly – Food Ordering Platform",
    category: "Premium",
    description:
      "Modern food ordering web application with a clean UI, fast navigation, and seamless ordering experience.",
    fullDescription:
      "Feastly is a modern, responsive food ordering web platform designed to deliver a smooth and delightful user experience. Built with a mobile-first approach, the application allows users to browse curated dishes, manage orders, view profiles, and access admin features. The interface focuses on speed, accessibility, and visual appeal, making food discovery and checkout effortless.",
    tech: [
      "React.js",
      "TypeScript",
      "CSS3",
      "Responsive Design"
    ],
    image:
      "https://res.prathameshgiri.in/projects/feastly.png",
    liveLink: "https://feastly-gps.netlify.app/",
    githubLink: "#",
    features: [
      "Attractive hero section with CTA",
      "Browse menu & featured dishes",
      "Category tags (Popular, Vegetarian)",
      "Real-time cart UI",
      "User profile & order management",
      "Admin panel navigation",
      "Responsive & mobile-first layout",
      "Clean and accessible UI design"
    ],
    challenge:
      "Designing a visually rich food ordering interface while maintaining performance and responsiveness across devices.",
    solution:
      "Used React with TypeScript for scalable UI components, optimized layouts, and reusable components to ensure consistency and speed.",
    results:
      "Delivered a premium food ordering UI with smooth navigation, improved user engagement, and fast load performance."
  },

  {
    id: 9,
    name: "Shiv Bakery – Real-Time Ordering & Admin Panel",
    category: "Premium",
    description:
      "A real-time bakery ordering system with an admin dashboard to manage orders, users, and messages efficiently.",
    fullDescription:
      "Shiv Bakery is a full-stack web application designed for managing bakery orders in real time. Built with a clean and responsive UI, the platform allows users to place orders online while the admin panel provides live updates of incoming orders, customer messages, and user activity. Using Socket.IO, the system ensures instant order notifications and seamless communication between users and the admin without page refreshes.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Node.js",
      "Express.js",
      "Socket.IO"
    ],
    image:
      "https://res.prathameshgiri.in/projects/sbakery.png",
    liveLink: "https://bakery-dm80.onrender.com/",
    githubLink: "",
    features: [
      "Real-time order placement and updates",
      "Live admin dashboard with Socket.IO",
      "User order history tracking",
      "Admin view for all orders and messages",
      "Instant order notifications",
      "Responsive UI for users and admin",
      "User-friendly bakery menu interface",
      "Secure admin panel layout"
    ],
    challenge:
      "Implementing real-time communication for orders and messages while maintaining performance and simplicity.",
    solution:
      "Integrated Socket.IO with Node.js and Express.js to handle real-time events, optimized backend routes, and ensured smooth frontend updates using vanilla JavaScript.",
    results:
      "Successfully delivered a fast, real-time bakery ordering system with a functional admin panel, improving order management efficiency and user experience."
  },

  {
    id: 10,
    name: "LUXE – Fashion E-Commerce Platform",
    category: "Premium",
    description:
      "A modern fashion e-commerce website for dresses, jewellery, bags, and shoes with a premium shopping experience.",
    fullDescription:
      "LUXE is a stylish and responsive fashion e-commerce web application designed to showcase and sell dresses, jewellery, bags, and shoes. The platform focuses on elegant UI/UX, smooth animations, and a clean product browsing experience. With well-structured product sections and responsive layouts, LUXE delivers a premium brand feel suitable for modern fashion businesses.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3"
    ],
    image:
      "https://res.prathameshgiri.in/projects/luxe.png",
    liveLink: "https://luxe-prathameshgiri.netlify.app/",
    githubLink: "",
    features: [
      "Multi-category fashion products (Dresses, Jewellery, Bags, Shoes)",
      "Modern and premium UI design",
      "Reusable React components",
      "Type-safe codebase with TypeScript",
      "Responsive layout for all devices",
      "Smooth animations and transitions",
      "Optimized image loading",
      "User-friendly navigation"
    ],
    challenge:
      "Building a scalable and premium fashion UI while maintaining type safety and performance.",
    solution:
      "Used React’s component-driven approach with TypeScript for better structure and reliability, combined with optimized styling and responsive design techniques.",
    results:
      "Delivered a scalable, maintainable, and visually premium fashion e-commerce platform with smooth performance and a strong brand presence."
  },










  {
    id: 1,
    name: "HealthMate – Doctor Appointment Booking System",
    category: "Web Apps",
    description:
      "Online doctor appointment booking website for patients and healthcare providers",
    fullDescription:
      "HealthMate is a responsive healthcare web application designed to simplify the process of booking doctor appointments online. The platform allows patients to browse doctors, view available time slots, and book appointments seamlessly. Built with a clean and user-friendly interface, HealthMate helps clinics and doctors manage appointments efficiently while providing patients with a smooth and reliable booking experience. The system focuses on accessibility, clarity, and fast interactions using lightweight technologies.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "Node.js",
      "Express.js"
    ],
    image:
      "https://res.prathameshgiri.in/projects/healthmate.png",
    liveLink: "https://x.prathameshgiri.in/HealthMate/",
    githubLink: "",
    features: [
      "Online doctor appointment booking",
      "Doctor listing with specialization details",
      "Available time-slot selection",
      "Patient appointment request system",
      "Admin/clinic-side appointment management",
      "Responsive and clean healthcare UI",
      "Form validation for patient details",
      "User-friendly navigation and layout"
    ],

    challenge:
      "Creating a simple yet reliable appointment booking system using vanilla frontend technologies while ensuring smooth backend handling of appointment data.",

    solution:
      "Developed a structured frontend using HTML, CSS, and JavaScript, and implemented backend logic with Node.js and Express.js to manage appointments efficiently with clean API routes and validations.",

    results:
      "Delivered a functional and responsive doctor appointment website that streamlines patient bookings, improves clinic workflow, and enhances the overall healthcare user experience.",
  }, 

  {
    id: 2,
    name: "Dress Shop – Online Clothing Store",
    category: "Web Apps",
    description:
      "A modern and responsive online dress shop website for showcasing and selling fashion products",
    fullDescription:
      "Dress Shop is a clean and visually appealing online clothing store website built using pure HTML, CSS, and JavaScript. The platform is designed to display a variety of fashion dresses with an attractive layout, smooth interactions, and easy navigation. It focuses on delivering a simple yet effective shopping experience, allowing users to browse collections, view product details, and explore styles effortlessly.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)"
    ],
    image:
      "https://res.prathameshgiri.in/projects/dressshop.png",
    liveLink: "https://x.prathameshgiri.in/dress-shop/",
    githubLink: "",
    features: [
      "Fashion dress product showcase",
      "Clean and modern UI design",
      "Responsive layout for all devices",
      "Smooth hover effects and transitions",
      "Product cards with images and details",
      "Simple and intuitive navigation",
      "Optimized frontend performance",
      "Brand-focused visual presentation"
    ],

    challenge:
      "Designing an attractive and responsive fashion storefront using only basic frontend technologies without frameworks.",

    solution:
      "Implemented a structured HTML layout, reusable CSS styles, and interactive JavaScript for smooth UI behavior while maintaining simplicity and performance.",

    results:
      "Successfully delivered a lightweight and responsive dress shop website that enhances product visibility and provides a pleasant browsing experience for users.",
  },

  
  
  
  
  
];
