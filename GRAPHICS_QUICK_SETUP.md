# Quick Setup Guide - Graphics Projects Section

## 🚀 Quick Start (3 Steps)

### Step 1: Add Your Images

Place your images in the public folder:

```
public/images/graphic/
├── Logos/
│   ├── logo-1.jpg
│   ├── logo-2.jpg
│   ├── logo-3.jpg
│   └── ... (add more)
└── vectors/
    ├── vector-1.jpg
    ├── vector-2.jpg
    ├── vector-3.jpg
    └── ... (add more)
```

### Step 2: Update Image Lists

Edit: `src/data/graphics/graphicsProjects.ts`

```typescript
const graphicsProjects: GraphicsProject[] = [
  {
    id: 1,
    title: 'Logo Designs',
    tags: ['Flat Logo', 'Luxury Logo', 'Mascot Logo', 'Minimal Logo'],
    images: [
      '/images/graphic/Logos/logo-1.jpg',
      '/images/graphic/Logos/logo-2.jpg',
      '/images/graphic/Logos/logo-3.jpg',
      // ✅ Add all your logo images here
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
      // ✅ Add all your vector images here
    ],
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-600'
  }
];
```

### Step 3: Done! ✨

The section is already integrated into your projects page. Just refresh to see your changes!

---

## 📸 Image Requirements

- **Format:** JPG, PNG, or WebP
- **Size:** 1200-1920px width recommended
- **Optimization:** Compress before uploading (use TinyPNG.com)
- **Naming:** Use consistent names (e.g., logo-1.jpg, logo-2.jpg)

---

## 🎨 Want to Add More Categories?

Just add another object to the array:

```typescript
{
  id: 3,
  title: 'Social Media Posts',
  tags: ['Instagram', 'Facebook', 'LinkedIn'],
  images: [
    '/images/graphic/social/post-1.jpg',
    '/images/graphic/social/post-2.jpg',
  ],
  gradientFrom: 'from-green-600',
  gradientTo: 'to-teal-600'
}
```

---

## ✨ Features

✅ **2 Beautiful Cards** - Logo Designs & Vector Tracing  
✅ **Image Slider Modal** - Full-screen gallery view  
✅ **Swipe Support** - Touch-friendly on mobile  
✅ **Keyboard Navigation** - Arrow keys & Escape  
✅ **Download Option** - Save individual images  
✅ **Responsive Design** - Works on all devices  
✅ **Dark Mode Support** - Matches your theme  

---

## 🎯 Where to Find It

Visit your projects page: The Graphics Projects section appears **below** the Development Projects grid.

---

## 📚 Need More Help?

Check out the full documentation: `GRAPHICS_SECTION_DOCUMENTATION.md`

---

**Happy Designing! 🎨**
