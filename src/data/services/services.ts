import { 
  Code2, 
  ShoppingCart, 
  Globe, 
  Palette, 
  Bot, 
  Brain,
} from 'lucide-react';

const services = [
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full Stack Development',
      subtitle: 'End-to-end web solutions',
      description: 'We build robust, scalable web applications using modern technologies like React, Node.js, Next.js, and more. From concept to deployment, we handle every aspect of your web development needs.',
      features: [
        'React & Next.js Development',
        'Node.js & Express Backend',
        'Database Design & Integration',
        'API Development & Integration',
        'Cloud Deployment & DevOps',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'],
      color: 'purple',
      pricing: 'Starting from $2,500'
    },
    {
      id: 'shopify',
      icon: ShoppingCart,
      title: 'Shopify Development',
      subtitle: 'E-commerce excellence',
      description: 'Custom Shopify stores that convert visitors into customers. We create stunning, high-performance e-commerce solutions tailored to your brand and business goals.',
      features: [
        'Custom Shopify Theme Development',
        'App Integration & Development',
        'Payment Gateway Setup',
        'Inventory Management',
        'SEO Optimization',
        'Mobile-First Design'
      ],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify Plus', 'GraphQL'],
      color: 'green',
      pricing: 'Starting from $1,800'
    },
    {
      id: 'wordpress',
      icon: Globe,
      title: 'WordPress Development',
      subtitle: 'Flexible CMS solutions',
      description: 'Dynamic WordPress websites and custom plugins that grow with your business. We create user-friendly, SEO-optimized sites that are easy to manage.',
      features: [
        'Custom WordPress Themes',
        'Plugin Development',
        'WooCommerce Integration',
        'Performance Optimization',
        'Security Hardening',
        'Content Management Training'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'ACF', 'Elementor'],
      color: 'blue',
      pricing: 'Starting from $1,200'
    },
    {
      id: 'uiux',
      icon: Palette,
      title: 'UI/UX Designing',
      subtitle: 'Beautiful user experiences',
      description: 'Intuitive designs that users love to interact with. We create visually stunning interfaces that provide exceptional user experiences across all devices.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design',
        'Usability Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Zeplin'],
      color: 'pink',
      pricing: 'Starting from $800'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI Automation',
      subtitle: 'Intelligent workflow automation',
      description: 'Streamline your business processes with AI-powered automation. We implement intelligent solutions that save time, reduce errors, and boost productivity.',
      features: [
        'Process Analysis & Optimization',
        'Custom AI Model Development',
        'Workflow Automation',
        'Data Processing & Analysis',
        'Integration with Existing Systems',
        'Performance Monitoring'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Zapier', 'Microsoft Power Automate', 'AWS Lambda'],
      color: 'teal',
      pricing: 'Starting from $3,000'
    },
    {
      id: 'agentic-ai',
      icon: Brain,
      title: 'Agentic AI Solutions',
      subtitle: 'Advanced AI agents',
      description: 'Cutting-edge AI agents that think, learn, and act autonomously. We develop sophisticated AI systems that can handle complex tasks and decision-making.',
      features: [
        'Intelligent Agent Development',
        'Natural Language Processing',
        'Decision-Making Systems',
        'Learning & Adaptation',
        'Multi-Agent Coordination',
        'Custom AI Workflows'
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'Anthropic', 'Hugging Face', 'Vector Databases'],
      color: 'indigo',
      pricing: 'Starting from $5,000'
    }
  ];
  export default services