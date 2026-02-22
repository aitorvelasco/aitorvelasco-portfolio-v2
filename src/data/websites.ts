export interface Website {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  extra_long_description?: string;
  category: string;
  color: string;
  image: string;
  tags: string[];
  year: string;
  status: WebsiteStatus;
  features: string[];
  href?: string;
}

export enum WebsiteStatus {
  completed = "Completado",
  ongoing = "Ongoing"
}

export const websites: Website[] = [
  {
    id: "portfolio-photo",
    title: "Sara Montoya Fotografía",
    short_description: "Portfolio de fotografía. Proyecto final de curso.",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "portfolio",
    color: "from-rose-500 to-amber-500",
    image: "/images/websites/sm-foto.jpg",
    tags: ["HTML5", "CSS3", "JS"],
    year: "2015",
    status: WebsiteStatus.completed,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ]
  },
  {
    id: "ecommerce-bq",
    title: "Tienda bq",
    short_description: "Tienda online de bq",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "E-commerce",
    color: "from-emerald-500 to-cyan-500",
    image: "/images/websites/bq-store.png",
    tags: ["Magento", "jQuery"],
    year: "2016",
    status: WebsiteStatus.completed,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ]
  },
  {
    id: "wordpress-diwo",
    title: "DIWO",
    short_description: "Blog de DIWO para bq",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "Blog",
    color: "from-slate-500 to-zinc-500",
    image: "/images/websites/diwo.png",
    tags: ["Wordpress", "poedit"],
    year: "2017",
    status: WebsiteStatus.completed,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ]
  },
  {
    id: "bq-website",
    title: "bq",
    short_description: "Web oficial de la empresa de telefonia española bq",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "website",
    color: "from-orange-500 to-yellow-500",
    image: "/images/websites/bqcom.png",
    tags: ["Twig", "SEO"],
    year: "2018",
    status: WebsiteStatus.completed,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ]
  },
  {
    id: "llamaya-eshop",
    title: "llamaya eShop",
    short_description: "Tienda online de la marca llamaya",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "eshop",
    color: "from-red-500 to-pink-500",
    image: "/images/websites/llamaya.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2019",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ],
    href: "https://www.llamaya.com",
  },
  {
    id: "masmovil-eshop",
    title: "MASMOVIL eShop",
    short_description: "Tienda online de la marca MASMOVIL",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "eshop",
    color: "from-blue-500 to-indigo-500",
    image: "/images/websites/masmovil.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2020",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ],
    href: "https://www.masmovil.es",
  },
  {
    id: "yoigo-eshop",
    title: "Yoigo eShop",
    short_description: "Tienda online de la marca YOIGO",
    long_description: `Este proyecto representa un desafío único en el desarrollo web moderno. 
    Se diseñó con el objetivo de proporcionar una experiencia de usuario excepcional, combinando estética visual con funcionalidad robusta.`,
    extra_long_description: `El desarrollo incluyó la implementación de las últimas tecnologías frontend, 
    optimización de rendimiento y diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`,
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/images/websites/yoigo.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2021",
    status: WebsiteStatus.ongoing,
    features: [
      "Diseño responsive optimizado para todos los dispositivos",
      "Alto rendimiento y tiempos de carga optimizados",
      "Accesibilidad WCAG AAA compliant",
      "SEO optimizado para motores de búsqueda"
    ],
    href: "https://www.yoigo.com",
  }
];
