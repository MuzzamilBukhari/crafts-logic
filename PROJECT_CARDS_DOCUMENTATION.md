# Project Card System - Documentation

## Overview
The project section now supports **two types of project cards**:
1. **Development Projects** - For web development, apps, and tech projects
2. **Graphics Projects** - For design work, social media posts, logos, etc.

## File Structure

```
src/
├── types/
│   └── project.ts                 # Shared TypeScript interface
├── data/
│   └── projects/
│       ├── projects.ts            # Project data
│       └── categories.ts          # Category filters
└── app/
    ├── components/
    │   ├── ProjectCard.tsx        # Main card component (conditional rendering)
    │   └── ImageLightbox.tsx      # Full image viewer modal
    └── projects/
        └── page.tsx               # Projects page
```

## Adding New Projects

### Development Project Example

```typescript
{
  id: 8,
  type: 'development',              // ✅ Required: 'development'
  title: 'Your Project Name',
  category: 'fullstack',             // fullstack, shopify, wordpress, ai, design
  description: 'Detailed project description...',
  shortDescription: 'Brief one-liner',
  image: '/api/placeholder/600/400',
  date: '2025',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  githubUrl: 'https://github.com/username/repo',  // Optional
  liveUrl: 'https://example.com',                  // Optional
  client: 'Client Name',
  duration: '2 months',
  color: 'blue'                      // purple, blue, pink, green, teal, indigo, orange
}
```

### Graphics Project Example

```typescript
{
  id: 9,
  type: 'graphics',                  // ✅ Required: 'graphics'
  title: 'Social Media Campaign Design',
  category: 'graphicdesign',
  description: 'Collection of social media designs for brand XYZ...',
  shortDescription: 'Instagram post designs for fashion brand',
  image: '/images/graphics/preview.jpg',
  thumbnailUrl: '/images/graphics/preview.jpg',   // ✅ Main showcase image
  date: '2025',
  technologies: ['Adobe Photoshop', 'Illustrator', 'Figma'],
  features: [
    'Brand identity design',
    'Social media templates',
    'Print-ready files'
  ],
  client: 'Fashion Brand Inc.',
  duration: 'Ongoing',
  color: 'orange',
  platform: 'Instagram',             // ✅ Platform name (Instagram, Behance, Dribbble)
  platformUrl: 'https://instagram.com/username'  // ✅ Link to portfolio
}
```

## Key Differences

| Feature | Development Projects | Graphics Projects |
|---------|---------------------|-------------------|
| **Card Height** | Standard (h-48) | Taller (h-64) with thumbnail focus |
| **Main Visual** | Placeholder with project ID | Actual project thumbnail/image |
| **Tech Stack** | Shown as tags | Listed but less prominent |
| **GitHub Link** | ✅ Yes | ❌ No |
| **Live Demo** | ✅ Yes | ❌ No |
| **View Full Image** | ❌ No | ✅ Yes (Lightbox modal) |
| **Platform Link** | ❌ No | ✅ Yes (Instagram/Behance/etc.) |
| **Card Color** | Gray gradient buttons | Purple/Pink gradient buttons |

## Available Categories

Update `src/data/projects/categories.ts` to add new categories:

```typescript
{ id: 'fullstack', name: 'Full Stack' }
{ id: 'shopify', name: 'Shopify' }
{ id: 'wordpress', name: 'WordPress' }
{ id: 'design', name: 'UI/UX Design' }
{ id: 'graphicdesign', name: 'Graphic Design' }
{ id: 'ai', name: 'AI Solutions' }
```

## Available Colors

Defined in `src/app/projects/page.tsx`:

- `purple` - Purple badge
- `blue` - Blue badge  
- `pink` - Pink badge
- `green` - Green badge
- `teal` - Teal badge
- `indigo` - Indigo badge
- `orange` - Orange badge

## Component Features

### ProjectCard Component
- **Conditional rendering** based on `type` field
- **Framer Motion** animations (hover, entrance)
- **Responsive** grid layout
- **Dark mode** support

### ImageLightbox Component
- Full-screen image viewer
- Zoom in/out controls
- Download functionality
- Click outside to close
- Smooth animations

## Usage Example

In `src/data/projects/projects.ts`, simply add your project to the array:

```typescript
const projects: Project[] = [
  // ... existing projects
  {
    id: 10,
    type: 'graphics',  // This determines the card layout!
    // ... rest of fields
  }
];
```

The `ProjectCard` component will automatically render the appropriate layout based on the `type` field.

## Tips

1. **Image Paths**: Place graphics in `public/images/graphics/` for easy access
2. **Thumbnail Quality**: Use high-resolution images (minimum 1200x800px)
3. **Platform Links**: Use actual portfolio links (Instagram, Behance, Dribbble)
4. **Consistency**: Keep descriptions concise (1-2 lines for shortDescription)
5. **Categories**: Graphics projects typically use `category: 'graphicdesign'`

## Future Enhancements

Potential features to add:
- Gallery view for multiple images per graphics project
- Filter by project type (Development/Graphics)
- Custom platform icons (Behance, Dribbble, etc.)
- Image carousel in lightbox
- Before/After comparisons for graphics work
