export interface Website {
  id: string;
  title: string;
  description: string;
  category: string;
  color: string;
  image: string;
  tags: string[];
  year: string;
}

export const websites: Website[] = [
  {
    id: "ecommerce-fashion",
    title: "Luxe Fashion",
    description: "Tienda online de moda de lujo con experiencia de compra premium",
    category: "E-commerce",
    color: "from-rose-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    tags: ["Shopify", "React", "Payment Integration"],
    year: "2024"
  },
  {
    id: "saas-dashboard",
    title: "DataFlow",
    description: "Panel de analytics en tiempo real para startups",
    category: "SaaS",
    color: "from-emerald-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Next.js", "D3.js", "Real-time"],
    year: "2024"
  },
  {
    id: "portfolio-creative",
    title: "Studio Noir",
    description: "Portfolio minimalista para estudio de diseño",
    category: "Portfolio",
    color: "from-slate-500 to-zinc-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    tags: ["Astro", "Framer Motion", "GSAP"],
    year: "2023"
  },
  {
    id: "restaurant-landing",
    title: "Olea",
    description: "Web de restaurante mediterráneo con reserva online",
    category: "Restaurant",
    color: "from-orange-500 to-yellow-500",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    tags: ["Webflow", "Reservation System", "SEO"],
    year: "2024"
  },
  {
    id: "health-fitness",
    title: "PulseFit",
    description: "Plataforma de fitness con seguimiento de rutinas",
    category: "Mobile App",
    color: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    tags: ["React Native", "Firebase", "Charts"],
    year: "2023"
  },
  {
    id: "tech-blog",
    title: "DevPulse",
    description: "Blog tecnológico con sistema de newsletter",
    category: "Blog",
    color: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    tags: ["Gatsby", "Contentful", "SendGrid"],
    year: "2024"
  },
  {
    id: "crypto-exchange",
    title: "BitVault",
    description: "Exchange de criptomonedas con wallet integrado",
    category: "Fintech",
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    tags: ["Web3", "Solidity", "Node.js"],
    year: "2024"
  },
  {
    id: "travel-booking",
    title: "Wanderlust",
    description: "Plataforma de viajes con experiencias inmersivas",
    category: "Travel",
    color: "from-teal-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Mapbox", "Stripe"],
    year: "2023"
  }
];
