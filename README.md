# Philip Cheung - Design Portfolio

A modern, responsive portfolio website showcasing design work through project experiences. Built with React, Tailwind CSS, and React Router.

## 🚀 Features

- **Sticky Resume Sidebar** - Always-visible professional information on desktop
- **Dynamic Project Showcase** - Individual pages for each project with rich content sections
- **Responsive Design** - Mobile-first approach that works on all devices
- **Enterprise Aesthetic** - Clean, professional design inspired by Asana and ClickUp
- **Single Source of Truth** - All content managed in one data file for easy updates

## 🛠️ Tech Stack

- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Updating Content

All content is centralized in `src/data/portfolioData.js`:

### Update Personal Info
Edit the `personal` object with your name, title, bio, and contact links.

### Add/Edit Projects
1. Add a new work experience in `workExperiences` array
2. Create corresponding project data in `projects` object
3. Use section types: `hero`, `image`, `text`, `gallery`, `cta`

### Change Project Theme
Modify `primaryColor` and `accentColor` in project data. Available colors: blue, purple, indigo, pink, dark, amber, orange.

## 🎨 Design System

The portfolio uses Tailwind CSS with custom brand colors:
- **Primary**: Indigo (#6366f1) - Enterprise feel with energy
- **Secondary**: Purple (#8b5cf6) - Spark of creativity  
- **Accent**: Amber (#f59e0b) - Call-to-action pop

Typography: Inter font family for clean, modern look.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (two-column with adjusted widths)
- **Desktop**: > 1024px (full two-column with sticky sidebar)

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Connect repo on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout/          # Landing page components
│   ├── Projects/        # Project page components
│   └── shared/          # Reusable components
├── data/
│   └── portfolioData.js # All content configuration
├── pages/               # Route pages
├── utils/               # Helper functions
└── App.jsx             # Main app with routing
```

## 🎯 Key Features

- ✅ Accessible (WCAG AA compliant)
- ✅ SEO friendly
- ✅ Fast loading with code splitting
- ✅ Smooth animations and transitions
- ✅ Custom scrollbar styling
- ✅ Error handling for missing images
- ✅ 404 page for invalid routes

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Philip Cheung
