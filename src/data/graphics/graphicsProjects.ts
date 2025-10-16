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
    tags: ['Flat Logo', 'Luxury Logo', 'Mascot Logo', 'Minimal Logo', 'Banner'],
    images: [
      '/images/graphic/Logos/l1.jpeg',
      '/images/graphic/Logos/l2.jpeg',
      '/images/graphic/Logos/l3.jpeg',
      '/images/graphic/Logos/l4.jpeg',
      '/images/graphic/Logos/l5.jpeg',
      '/images/graphic/Logos/l6.jpeg',
      '/images/graphic/Logos/l7.jpeg',
      '/images/graphic/Logos/l8.jpeg',
      '/images/graphic/Logos/l9.jpeg',
      '/images/graphic/Logos/l10.jpeg',
      '/images/graphic/Logos/l11.jpeg',
      '/images/graphic/Banners/b1.jpg',
      '/images/graphic/Banners/b2.jpg',
      '/images/graphic/Banners/b3.jpg',
      '/images/graphic/Banners/b4.jpeg',
      '/images/graphic/Banners/b5.jpeg',
   
      // Add more logo images as needed
    ],
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-600'
  },
  {
    id: 2,
    title: 'Vector Tracing',
    tags: ['Rater to Vector Tracing', 'Portrait Tracing', 'Sketch to Vector'],
    images: [
      '/images/graphic/vectors/v1.jpg',
      '/images/graphic/vectors/v2.jpg',
      '/images/graphic/vectors/v5.jpeg',
      '/images/graphic/vectors/v6.jpeg',
      '/images/graphic/vectors/v7.jpeg',
      '/images/graphic/vectors/v8.jpeg',
      '/images/graphic/vectors/v9.jpeg',
      '/images/graphic/vectors/V-12.jpg',
      '/images/graphic/vectors/v13.jpeg',
      '/images/graphic/vectors/v14.jpeg',
      '/images/graphic/vectors/v15.jpeg',
      '/images/graphic/vectors/v16.jpeg',
      '/images/graphic/vectors/v21.jpeg',
      '/images/graphic/vectors/v22.jpg',
      '/images/graphic/vectors/v-23.jpg',
      '/images/graphic/vectors/v-24.jpg',
      '/images/graphic/vectors/v-25.jpg',
      '/images/graphic/vectors/v-26.jpg',
      '/images/graphic/vectors/v-27.jpg',
  
      // Add more vector tracing images as needed
    ],
    gradientFrom: 'from-blue-950',
    gradientTo: 'to-gray-600'
  }
];

export default graphicsProjects;
