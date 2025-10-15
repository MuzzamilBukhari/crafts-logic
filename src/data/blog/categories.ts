import blogPosts from "./blogPosts";
const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI Development', name: 'AI Development', count: blogPosts.filter(p => p.category === 'AI Development').length },
    { id: 'Web Development', name: 'Web Development', count: blogPosts.filter(p => p.category === 'Web Development').length },
    { id: 'Design', name: 'Design', count: blogPosts.filter(p => p.category === 'Design').length },
    { id: 'E-commerce', name: 'E-commerce', count: blogPosts.filter(p => p.category === 'E-commerce').length },
    { id: 'WordPress', name: 'WordPress', count: blogPosts.filter(p => p.category === 'WordPress').length }
  ];
  export default categories