'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development: Trends for 2026',
      excerpt: 'Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.',
      content: 'Artificial intelligence is transforming the landscape of web development...',
      image: '/api/placeholder/600/400',
      author: 'Huzaifa Naeem',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Development',
      tags: ['AI', 'Web Development', 'Machine Learning', 'Future Tech'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable E-commerce Solutions with Next.js',
      excerpt: 'Learn how to create high-performance e-commerce applications using Next.js, featuring server-side rendering and optimal user experience.',
      content: 'Next.js has become the go-to framework for building modern e-commerce solutions...',
      image: '/api/placeholder/600/400',
      author: 'Hijaabi Girl',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Web Development',
      tags: ['Next.js', 'E-commerce', 'React', 'Performance'],
      featured: false
    },
    {
      id: 3,
      title: 'UI/UX Design Principles That Drive Conversions',
      excerpt: 'Discover the essential design principles that can significantly improve your website\'s conversion rates and user satisfaction.',
      content: 'Great design is more than just aesthetics; it\'s about creating experiences...',
      image: '/api/placeholder/600/400',
      author: 'Hijaabi Girl',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'Conversion', 'User Experience'],
      featured: false
    },
    {
      id: 4,
      title: 'Shopify vs. Custom E-commerce: Making the Right Choice',
      excerpt: 'A comprehensive comparison to help you decide between Shopify and custom e-commerce solutions for your business needs.',
      content: 'Choosing the right e-commerce platform is crucial for your business success...',
      image: '/api/placeholder/600/400',
      author: 'Huzaifa Naeem',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'E-commerce',
      tags: ['Shopify', 'E-commerce', 'Business', 'Platform'],
      featured: false
    },
    {
      id: 5,
      title: 'WordPress Security Best Practices for 2024',
      excerpt: 'Essential security measures to protect your WordPress website from threats and ensure optimal performance.',
      content: 'WordPress security should be a top priority for every website owner...',
      image: '/api/placeholder/600/400',
      author: 'Muzzamil Bukhari',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'WordPress',
      tags: ['WordPress', 'Security', 'Best Practices', 'CMS'],
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Agentic AI: Beyond Simple Automation',
      excerpt: 'Understanding how agentic AI systems are evolving to make autonomous decisions and transform business processes.',
      content: 'Agentic AI represents the next frontier in artificial intelligence...',
      image: '/api/placeholder/600/400',
      author: 'Muzzamil Bukhari',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'AI Development',
      tags: ['Agentic AI', 'Automation', 'Machine Learning', 'Innovation'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI Development', name: 'AI Development', count: blogPosts.filter(p => p.category === 'AI Development').length },
    { id: 'Web Development', name: 'Web Development', count: blogPosts.filter(p => p.category === 'Web Development').length },
    { id: 'Design', name: 'Design', count: blogPosts.filter(p => p.category === 'Design').length },
    { id: 'E-commerce', name: 'E-commerce', count: blogPosts.filter(p => p.category === 'E-commerce').length },
    { id: 'WordPress', name: 'WordPress', count: blogPosts.filter(p => p.category === 'WordPress').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-white bg-clip-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Insights, tutorials, and thoughts on web development, AI, design, and the future of digital innovation.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">{blogPosts.length} Articles & Growing</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gray-100 border-b border-gray-200 dark:border-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-blue-950 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-lg"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-blue-950 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Featured <span className="bg-blue-950 bg-clip-text text-transparent">Articles</span>
              </h2>
              <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Most Popular & Latest</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white dark:bg-blue-950 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-950 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>

                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-400 to-gray-500 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-bold text-white/20">
                        {post.id}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">
                            {post.author}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-4"></div>
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or browse all categories.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {searchTerm ? 'Search Results' : selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                {searchTerm && (
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching &quot;{searchTerm}&quot;
                  </p>
                )}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-500 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white/20">
                          {post.id}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white text-xs">
                              {post.author}
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>

                        <motion.button
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center bg-blue-950 rounded-3xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights on web development, AI, and digital innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-100 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                className="bg-white text-blue-950 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;