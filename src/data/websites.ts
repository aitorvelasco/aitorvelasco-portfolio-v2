export interface Website {
  id: string;
  title: string;
  description: string;
  category: string;
  color: string;
  image: string;
  tags: string[];
  year: string;
  href?: string;
}

export const websites: Website[] = [
  {
    id: "portfolio-photo",
    title: "Sara Montoya Fotografía",
    description: "Portfolio de fotografía. Proyecto final de curso.",
    category: "portfolio",
    color: "from-rose-500 to-amber-500",
    image: "/websites/sm-foto.jpg",
    tags: ["HTML5", "CSS3", "JS"],
    year: "2015"
  },
  {
    id: "ecommerce-bq",
    title: "Tienda BQ",
    description: "Tienda online de BQ",
    category: "E-commerce",
    color: "from-emerald-500 to-cyan-500",
    image: "/websites/bq-store.png",
    tags: ["Magento", "jQuery"],
    year: "2016"
  },
  {
    id: "wordpress-diwo",
    title: "DIWO",
    description: "Blog de DIWO para BQ",
    category: "Blog",
    color: "from-slate-500 to-zinc-500",
    image: "/websites/diwo.png",
    tags: ["Wordpress", "poedit"],
    year: "2017"
  },
  {
    id: "bq-website",
    title: "BQ",
    description: "Web oficial de la empresa de telefonñia española BQ",
    category: "website",
    color: "from-orange-500 to-yellow-500",
    image: "/websites/bqcom.png",
    tags: ["Twig", "SEO"],
    year: "2018"
  },
  {
    id: "llamaya-eshop",
    title: "Llamaya eShop",
    description: "Tienda online de la marca llamaya",
    category: "eshop",
    color: "from-red-500 to-pink-500",
    image: "/websites/llamaya.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2019",
    href: "https://www.llamaya.com"
  },
  {
    id: "masmovil-eshop",
    title: "MASMOVIL eShop",
    description: "Tienda online de la marca MASMOVIL",
    category: "eshop",
    color: "from-blue-500 to-indigo-500",
    image: "/websites/masmovil.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2020",
    href: "https://www.masmovil.es"
  },
  {
    id: "yoigo-eshop",
    title: "Yoigo eShop",
    description: "Tienda online de la marca YOIGO",
    category: "eshop",
    color: "from-violet-500 to-purple-500",
    image: "/websites/yoigo.png",
    tags: ["React", "NextJS", "Material UI"],
    year: "2021",
    href: "https://www.yoigo.com"
  }
];
