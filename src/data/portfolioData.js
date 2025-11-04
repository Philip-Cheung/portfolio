export const portfolioData = {
  personal: {
    name: "Philip Cheung",
    title: "Product Designer",
    bio: "5 years of experience across Digital Assets, Construction, Hardware IoT, and Government.",
    imageUrl: "/images/profile/profile.jpg",
    email: "philip@example.com",
    links: {
      linkedin: "https://linkedin.com/in/philipcheung",
      github: "https://github.com/Philip-Cheung",
      portfolio: "https://philipcheung.com"
    }
  },
  
  skills: [
    "Product Design",
    "User Research",
    "Figma",
    "Prototyping",
    "Design Systems",
    "Interaction Design",
    "User Testing",
    "Wireframing"
  ],
  
  education: [
    {
      degree: "Bachelor of Science, Management Information Systems",
      school: "Rochester Institute of Technology",
      year: "2010"
    },
    {
      degree: "Supervised Machine Learning: Regression and Classification",
      school: "Stanford Online / DeepLearning.AI",
      year: "2024"
    }
  ],
  
  certifications: [
    "Advanced Certified Scrum Master (A-CSM)",
    "Advanced Certified Scrum Product Owner (A-CSPO)",
    "Certified Scrum Master (CSM)",
    "Certified Scrum Product Owner (CSPO)",
    "Certified Professional — Agile Testing & Test Automation (ICAgile)",
    "ITIL Foundation"
  ],
  
  workExperiences: [
    {
      id: "project1",
      company: "TechCorp Enterprise",
      role: "Senior Product Designer",
      dates: "2022 - 2024",
      location: "San Francisco, CA",
      description: "Led the redesign of the core dashboard platform, improving user engagement by 45% and reducing support tickets by 30%.",
      tags: ["Product Strategy", "Design Systems", "B2B SaaS", "Enterprise"],
      companyUrl: "https://cursor.ai",
      link: "/project/project1"
    },
    {
      id: "project2",
      company: "InnovateLabs",
      role: "Product Designer",
      dates: "2020 - 2022",
      location: "New York, NY",
      description: "Designed and shipped a mobile-first collaboration tool used by over 100,000 teams worldwide.",
      tags: ["Mobile Design", "User Research", "Prototyping", "Collaboration"],
      companyUrl: "https://cursor.ai",
      link: "/project/project2"
    }
  ],
  
  projects: {
    project1: {
      title: "Enterprise Dashboard Redesign",
      company: "TechCorp Enterprise",
      theme: "light",
      primaryColor: "blue",
      accentColor: "indigo",
      sections: [
        {
          type: "hero",
          title: "Enterprise Dashboard Redesign",
          subtitle: "Senior Product Designer • 2022-2024"
        },
        {
          type: "image",
          src: "/images/projects/project1/hero.jpg",
          alt: "Dashboard redesign hero showing new interface",
          caption: "The reimagined dashboard interface"
        },
        {
          type: "text",
          heading: "The Challenge",
          content: "TechCorp's legacy dashboard was causing frustration among enterprise users. Navigation was confusing, key metrics were buried, and the interface felt outdated. Our support team was receiving hundreds of tickets weekly about basic functionality.\n\nThe challenge was to modernize the experience without disrupting the workflow of thousands of power users who had muscle memory built around the existing system.",
          align: "left"
        },
        {
          type: "text",
          heading: "The Solution",
          content: "I led a comprehensive redesign focusing on three core principles:\n\n1. Progressive disclosure - Surface the most important information first\n2. Flexible layouts - Allow users to customize their workspace\n3. Consistent patterns - Build a cohesive design system\n\nThrough iterative testing with users, we refined the navigation structure and introduced smart defaults that reduced the learning curve for new users while maintaining power-user functionality.",
          align: "left"
        },
        {
          type: "gallery",
          columns: 2,
          images: [
            { 
              src: "/images/projects/project1/work1.jpg", 
              alt: "Before and after comparison of dashboard",
              caption: "Before and after: Cleaner hierarchy"
            },
            { 
              src: "/images/projects/project1/work2.jpg", 
              alt: "New navigation system",
              caption: "Reimagined navigation structure"
            }
          ]
        },
        {
          type: "text",
          heading: "Impact",
          content: "The redesign resulted in:\n• 45% increase in user engagement\n• 30% reduction in support tickets\n• 4.8/5 user satisfaction score (up from 3.2)\n• Adopted by 85% of users within first month",
          align: "left"
        }
      ]
    },
    
    project2: {
      title: "Mobile Collaboration Platform",
      company: "InnovateLabs",
      theme: "dark",
      primaryColor: "purple",
      accentColor: "pink",
      sections: [
        {
          type: "hero",
          title: "Mobile Collaboration Platform",
          subtitle: "Product Designer • 2020-2022"
        },
        {
          type: "image",
          src: "/images/projects/project2/hero.jpg",
          alt: "Mobile collaboration app hero image",
          caption: "Bringing teams together on mobile"
        },
        {
          type: "text",
          heading: "The Opportunity",
          content: "InnovateLabs identified a gap in the market: most collaboration tools were desktop-first, with mobile apps as afterthoughts. Remote teams needed a tool that worked seamlessly on mobile devices.\n\nI was brought on to design a mobile-first collaboration platform from the ground up, focusing on asynchronous communication and quick task management.",
          align: "left"
        },
        {
          type: "text",
          heading: "Design Process",
          content: "I started with extensive user research, interviewing 50+ remote workers about their pain points with existing tools. Key insights:\n\n• Users wanted to stay in the loop without constant notifications\n• Quick voice notes were preferred over typing on mobile\n• Visual task boards were easier to scan than lists\n\nThese insights shaped our core features: smart notification batching, one-tap voice messages, and gesture-based task management.",
          align: "left"
        },
        {
          type: "gallery",
          columns: 2,
          images: [
            { 
              src: "/images/projects/project2/work1.jpg", 
              alt: "Mobile interface screens",
              caption: "Core interface flows"
            },
            { 
              src: "/images/projects/project2/work2.jpg", 
              alt: "Gesture interactions",
              caption: "Intuitive gesture controls"
            }
          ]
        },
        {
          type: "text",
          heading: "Results",
          content: "The platform launched to strong adoption:\n• 100,000+ teams onboarded in first year\n• 4.7/5 average App Store rating\n• Featured by Apple as 'App of the Day'\n• 70% daily active user rate",
          align: "left"
        },
        {
          type: "cta",
          text: "View in App Store",
          link: "https://apps.apple.com",
          isPrimary: true
        }
      ]
    }
  }
};

