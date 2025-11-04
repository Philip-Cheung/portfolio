# Getting Started with Your Portfolio

## ✅ What's Been Built

Your portfolio is now live at: `http://localhost:5173` (if dev server is running)

### Completed Features:
1. ✅ **Landing Page** - Sticky resume sidebar with scrollable work experience cards
2. ✅ **Project Pages** - Dynamic routing to showcase 2 placeholder projects
3. ✅ **Responsive Design** - Works on mobile, tablet, and desktop
4. ✅ **Enterprise Styling** - Clean, professional aesthetic with Tailwind CSS
5. ✅ **Placeholder Content** - Ready for you to replace with real content
6. ✅ **Git Repository** - Committed and pushed to GitHub

## 🎨 Next Steps

### 1. Replace Placeholder Images
Replace the SVG placeholders in `public/images/` with your actual project images:
- `public/images/profile/profile.jpg` - Your profile photo
- `public/images/projects/project1/` - Project 1 screenshots
- `public/images/projects/project2/` - Project 2 screenshots

### 2. Update Your Content
Edit `src/data/portfolioData.js` to add your real information:
- Update personal bio and contact info
- Replace placeholder project descriptions
- Add more projects (just copy the pattern)

### 3. Customize Colors (Optional)
If you want different brand colors, edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#YOUR_COLOR',
    secondary: '#YOUR_COLOR',
    accent: '#YOUR_COLOR',
  }
}
```

### 4. Test Your Changes
```bash
npm run dev  # Start dev server at http://localhost:5173
```

### 5. Deploy
When ready, deploy to Vercel or Netlify (instructions in README.md)

## 📋 Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Current URLs

- **Landing Page**: `/`
- **Project 1**: `/project/project1`
- **Project 2**: `/project/project2`
- **404 Page**: Any invalid URL

## 🎨 Design Notes

The portfolio has an **enterprise feel with a spark of energy**:
- Clean, professional layouts (like Asana/ClickUp)
- Subtle hover animations and transitions
- Gradient accents for visual interest
- Inter font for modern readability

## 📝 How to Add a New Project

1. Add work experience to `workExperiences` array in `portfolioData.js`:
```javascript
{
  id: "project3",
  company: "Your Company",
  role: "Your Role",
  dates: "2023 - 2024",
  description: "Brief description...",
  link: "/project/project3"
}
```

2. Add project details to `projects` object:
```javascript
project3: {
  title: "Project Title",
  company: "Company Name",
  theme: "light", // or "dark"
  primaryColor: "blue",
  accentColor: "indigo",
  sections: [
    { type: "hero", title: "...", subtitle: "..." },
    { type: "text", heading: "...", content: "..." },
    // ... more sections
  ]
}
```

3. Add project images to `public/images/projects/project3/`

That's it! The new project will automatically appear on the landing page and be accessible at `/project/project3`.

## 🐛 Troubleshooting

**Dev server won't start?**
- Make sure you're in the portfolio directory
- Run `npm install` again
- Check if port 5173 is already in use

**Images not showing?**
- Check file paths match exactly (case-sensitive)
- Make sure images are in `public/images/` folder
- SVG placeholders are fine for testing

**Tailwind styles not applying?**
- Check that Tailwind classes are valid
- Restart dev server after config changes

## 💡 Tips

- Keep your `portfolioData.js` file as the single source of truth
- Test on mobile using Chrome DevTools device mode
- Use meaningful alt text for images (accessibility!)
- Commit changes regularly with descriptive messages

---

**Need help?** Check the full implementation guide in PORTFOLIO_BRIEF.md or the README.md

