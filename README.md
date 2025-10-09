# CraftsLogic Website

A modern, aesthetic, responsive agency website built with Next.js 14 and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, aesthetic UI with dark/light mode toggle
- **Responsive**: Fully responsive design for all screen sizes
- **Animations**: Smooth Framer Motion animations and transitions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Contact Form**: EmailJS integration for contact form functionality
- **Performance**: Built with Next.js 14 App Router for optimal performance

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: EmailJS
- **Icons**: Lucide React
- **Theme**: Next Themes for dark/light mode

## 📁 Project Structure

```
src/
  app/
    about/          # About page
    blog/           # Blog page
    components/     # Reusable components
    contact/        # Contact page
    projects/       # Portfolio/Projects page
    sections/       # Page sections (Hero, Services, etc.)
    services/       # Services page
    globals.css     # Global styles
    layout.tsx      # Root layout
    page.tsx        # Home page
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd craftslogic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (for contact form)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/app/contact/page.tsx`:
     ```typescript
     // Replace these with your EmailJS credentials
     'YOUR_SERVICE_ID'
     'YOUR_TEMPLATE_ID'
     'YOUR_PUBLIC_KEY'
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{budget}}`
   - `{{timeline}}`
4. Update the credentials in the contact page

## 🎨 Customization

### Colors
The website uses a purple-to-blue gradient theme. To customize colors, update the Tailwind config in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color variations
  },
  secondary: {
    // Your secondary color variations
  }
}
```

### Content
- Update company information in the components
- Replace placeholder team member information
- Add your own project portfolio items
- Customize the services offered

### Theme
Dark/light mode is automatically handled. Customize theme colors in `globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## 📱 Pages

1. **Home** (`/`) - Hero section, services highlight, testimonials, team preview
2. **Services** (`/services`) - Detailed service offerings with pricing
3. **About** (`/about`) - Company mission, values, and team profiles
4. **Projects** (`/projects`) - Portfolio showcase with case studies
5. **Blog** (`/blog`) - Blog posts with search and filtering
6. **Contact** (`/contact`) - Contact form and company information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Performance Features

- Next.js 14 App Router for optimal performance
- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization
- Font optimization with Google Fonts

## 🌐 Deployment

The website is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, contact [hello@craftslogic.com](mailto:hello@craftslogic.com)

---

Built with ❤️ by CraftsLogic Team
