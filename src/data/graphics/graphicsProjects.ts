// Graphics Project Data

export interface GraphicsProject {
  id: number;
  title: string;
  tags: string[];
  images: string[];
  gradientFrom: string;
  gradientTo: string;
}

const graphicsProjects: GraphicsProject[] = [
  {
    id: 1,
    title: 'Logo Designs',
    tags: ['Flat Logo', 'Luxury Logo', 'Mascot Logo', 'Minimal Logo'],
    images: [
      '/images/graphic/Logos/logo-1.jpg',
      '/images/graphic/Logos/logo-2.jpg',
      '/images/graphic/Logos/logo-3.jpg',
      '/images/graphic/Logos/logo-4.jpg',
      '/images/graphic/Logos/logo-5.jpg',
      '/images/graphic/Logos/logo-6.jpg',
      '/images/graphic/Logos/logo-7.jpg',
      '/images/graphic/Logos/logo-8.jpg',
      // Add more logo images as needed
    ],
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-600'
  },
  {
    id: 2,
    title: 'Vector Tracing',
    tags: ['Product Tracing', 'Portrait Tracing', 'Sketch to Vector'],
    images: [
      '/images/graphic/vectors/vector-1.jpg',
      '/images/graphic/vectors/vector-2.jpg',
      '/images/graphic/vectors/vector-3.jpg',
      '/images/graphic/vectors/vector-4.jpg',
      '/images/graphic/vectors/vector-5.jpg',
      '/images/graphic/vectors/vector-6.jpg',
      // Add more vector tracing images as needed
    ],
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-600'
  }
];

export default graphicsProjects;
