import { Project } from '@/types/project';

const projects: Project[] = [
    {
      id: 1,
      type: 'development',
      title: 'E-commerce AI Platform',
      category: 'fullstack',
      description: 'AI-powered e-commerce platform with intelligent product recommendations and automated customer service.',
      shortDescription: 'Next.js e-commerce platform with AI integration',
      image: '/api/placeholder/600/400',
      date: '2024',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Stripe', 'Prisma', 'PostgreSQL'],
      features: [
        'AI-powered product recommendations',
        'Automated customer service chatbot',
        'Real-time inventory management',
        'Advanced analytics dashboard',
        'Mobile-responsive design',
        'Secure payment processing'
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.craftslogic.com',
      client: 'TechRetail Inc.',
      duration: '3 months',
      color: 'purple'
    },
{
  id: 2,
  type: 'development',
  title: 'Blog Website',
  category: 'frontend',
  description: 'A modern and responsive blog website built with Next.js and TypeScript, featuring dynamic routing, SEO optimization, and a clean, minimal UI design.',
  shortDescription: 'Next.js + TypeScript responsive blog site',
  image: '/images/projects/blog-website.png', 
  date: '2025',
  technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  features: [
    'Dynamic blog pages using Next.js routes',
    'SEO optimized structure',
    'Responsive layout for all devices',
    'Fast static generation for posts',
    'Clean and minimal design'
  ],
  githubUrl: 'https://github.com/huzaifanaeem1',
  liveUrl: 'https://type-blog.vercel.app/', 
  client: 'Personal Project',
  duration: '2 weeks',
  color: 'blue'
},

{
  id: 3,
  type: 'development',
  title: 'Shoeway – Full-Stack E-Commerce Website',
  category: 'ecommerce',
  description: 'A modern full-stack e-commerce platform built with Next.js and Tailwind CSS, featuring dynamic product pages, secure checkout, and responsive UI for seamless shopping experience.',
  shortDescription: 'Full-stack e-commerce store built with Next.js and Tailwind CSS',
  image: '/api/placeholder/600/400',
  date: '2025',
  technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  features: [
    'Dynamic product management',
    'Secure checkout system',
    'Cart and wishlist functionality',
    'User authentication and dashboard',
    'Responsive design for all devices',
    'Admin panel for order management'
  ],
  githubUrl: 'https://github.com',
  liveUrl: 'https://ecommerce-marketplace-hackathon.vercel.app/',
  client: 'Shoeway',
  duration: '2 months',
  color: 'green'
},

    {
  id: 4,
  type: 'development',
  title: 'Extreme Fitness – Gym Website',
  category: 'fitness',
  description: 'A responsive and visually striking gym website built using HTML and CSS, showcasing fitness programs, trainers, and membership plans with a modern layout and animations.',
  shortDescription: 'Responsive gym website built with pure HTML and CSS',
  image: '/api/placeholder/600/400',
  date: '2024',
  technologies: ['HTML', 'CSS', 'Responsive Design', 'Animations'],
  features: [
    'Fully responsive design',
    'Modern UI layout',
    'Trainer and program showcase',
    'Smooth scrolling navigation',
    'Attractive hover effects',
    'Fast loading performance'
  ],
  githubUrl: 'https://github.com',
  liveUrl: 'https://extremefitness-usingcss.vercel.app/',
  client: 'Extreme Fitness',
  duration: '1 month',
  color: 'purple'
},

{
  id: 5,
  type: 'development',
  title: 'Online Book Store',
  category: 'ecommerce',
  description: 'A modern full-stack online bookstore where users can browse, search, and purchase books. Built with responsive design and optimized for seamless user experience.',
  shortDescription: 'Responsive and user-friendly online bookstore',
  image: '/api/placeholder/600/400',
  date: '2025',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  features: [
    'Book search and filtering',
    'Add to cart and checkout',
    'Responsive UI for all devices',
    'Book category pages',
    'Fast loading performance',
    'User-friendly navigation'
  ],
  githubUrl: 'https://github.com',
  liveUrl: 'https://bookstore-mb-nu.vercel.app/',
  client: 'BookVerse',
  duration: '2 months',
  color: 'orange'
},
{
  id: 6,
  type: 'development',
  title: 'Dynamic Scents – Perfume Store',
  category: 'ecommerce',
  description: 'A stylish and responsive e-commerce perfume store built with modern web technologies. It allows users to explore various fragrances, view product details, and make online purchases effortlessly.',
  shortDescription: 'Modern perfume e-commerce website with responsive UI',
  image: '/api/placeholder/600/400',
  date: '2025',
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
  features: [
    'Product listing and filtering',
    'Add to cart and checkout flow',
    'Fragrance category pages',
    'Fully responsive design',
    'Modern and elegant UI',
    'Fast and optimized performance'
  ],
  githubUrl: 'https://github.com',
  liveUrl: 'https://dynamic-scents.vercel.app/',
  client: 'Dynamic Scents',
  duration: '2 months',
  color: 'purple'
},
{
  id: 7,
  type: 'development',
  title: 'World Travel Agency',
  category: 'travel',
  description: 'A visually appealing and responsive travel agency website where users can explore destinations, view travel packages, and make booking inquiries seamlessly.',
  shortDescription: 'Responsive and modern travel website',
  image: '/api/placeholder/600/400',
  date: '2025',
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
  features: [
    'Destination showcase with images',
    'Travel package listings',
    'Booking inquiry form',
    'Fully responsive design',
    'Smooth scrolling animations',
    'User-friendly interface'
  ],
  githubUrl: 'https://github.com',
  liveUrl: 'https://worldtravelagency.vercel.app/',
  client: 'World Travel Agency',
  duration: '1 month',
  color: 'green'
},

    
  ];

export default projects