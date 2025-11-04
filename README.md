# Philip Cheung - Design Portfolio

A modern, responsive portfolio website showcasing design work through project experiences. Built with React, Tailwind CSS, and React Router.

## 🚀 Features

- **Sticky Sidebar Navigation** - Left sidebar with smooth scroll navigation and active section indicators
- **Design Projects Section** - Medium-style project cards with clean, scannable layout
- **Dark Mode Support** - Toggle with persistent localStorage preference
- **Responsive Design** - Mobile-first approach that works on all devices
- **Experience & Education** - Professional background with clickable company links
- **Clean Typography** - Inter font with proper hierarchy and readability
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
1. Add a new entry in `workExperiences` array with:
   - `title` - Project title for card display
   - `date` - Date or date range
   - `type` - Project type (e.g., "LinkedIn Article", "Product Design")
   - `company`, `role`, `dates`, `location` - Experience details
   - `description` - Brief description (shown on card and experience section)
   - `tags` - Array of skills/technologies
   - `companyUrl` - Link to company website
   - `link` - Route to project detail page

2. Create corresponding project data in `projects` object for detail pages
3. Use section types: `hero`, `image`, `text`, `gallery`, `cta`

### Update Education & Certifications
Edit the `education` and `certifications` arrays with your credentials.

## 🎨 Design System

The portfolio uses Tailwind CSS with custom brand colors:
- **Primary**: Indigo (#6366f1) - Enterprise feel with energy
- **Secondary**: Purple (#8b5cf6) - Spark of creativity  
- **Accent**: Amber (#f59e0b) - Call-to-action pop
- **Dark Mode**: Slate-900 background with navy palette

Typography: Inter font family for clean, modern look.

### Dark Mode
- Toggle button fixed in top-right corner
- Preference saved to localStorage
- All components optimized for both themes
- Card backgrounds: `bg-slate-800/50` for proper contrast

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
│   ├── Layout/
│   │   ├── ProjectCard.jsx          # Medium-style project cards
│   │   ├── ProfileHeader.jsx        # Name, title, bio
│   │   ├── Navigation.jsx           # Sticky nav with scroll detection
│   │   ├── SocialLinks.jsx          # Social media links
│   │   ├── WorkExperienceCards.jsx  # Experience display
│   │   ├── EducationSection.jsx     # Education & certifications
│   │   └── StickyResume.jsx         # Sidebar container
│   ├── Projects/        # Project detail page components
│   └── shared/
│       └── DarkModeToggle.jsx       # Theme toggle
├── data/
│   └── portfolioData.js # All content configuration
├── pages/
│   ├── Landing.jsx      # Main page
│   ├── Project.jsx      # Project detail page
│   └── NotFound.jsx     # 404 page
└── App.jsx             # Main app with routing
```

## 🎯 Key Features

- ✅ Dark mode with localStorage persistence
- ✅ Smooth scroll navigation with active indicators
- ✅ Medium-style project cards (scannable, low cognitive load)
- ✅ Responsive two-column layout with sticky sidebar
- ✅ Clickable external company links
- ✅ Accessible (proper ARIA labels, keyboard navigation)
- ✅ Fast loading with Vite
- ✅ Smooth animations and hover effects
- ✅ Custom scrollbar styling
- ✅ 404 page for invalid routes

## 📋 Sections

1. **Design Projects** - 4 projects with images, titles, and descriptions
2. **Experience** - Professional work history with companies, roles, and achievements
3. **Education** - Degrees and certifications

## 🎨 Layout Details

- **Sidebar**: 420px width with sticky positioning
- **Vertical Divider**: Subtle border between sections
- **Content Width**: Max 7xl (1280px) centered container
- **Spacing**: Generous padding for readability (pr-20 on sidebar, pl-8 on content)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Philip Cheung
