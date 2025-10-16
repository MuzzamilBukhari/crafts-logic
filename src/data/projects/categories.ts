import projects from "./projects";
const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Front End', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'shopify', name: 'Shopify', count: projects.filter(p => p.category === 'shopify').length },
    { id: 'wordpress', name: 'WordPress', count: projects.filter(p => p.category === 'wordpress').length },
    { id: 'design', name: 'UI/UX Design', count: projects.filter(p => p.category === 'design').length },
    { id: 'graphicdesign', name: 'Graphic Design', count: projects.filter(p => p.category === 'graphicdesign').length },
    { id: 'ai', name: 'AI Solutions', count: projects.filter(p => p.category === 'ai').length }
  ];

  export default categories