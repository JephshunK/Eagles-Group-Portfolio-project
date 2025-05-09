import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "HTML Landing Page Clone",
    slug: "html-landing-page",
    description: "A recreation of a popular website landing page using HTML and CSS fundamentals.",
    longDescription: [
      "This project was my first deep dive into HTML and CSS fundamentals. I challenged myself to recreate a popular website landing page without using any frameworks or libraries - just pure HTML and CSS.",
      "The goal was to understand the building blocks of web development and gain a solid foundation in responsive design principles. I focused on creating a pixel-perfect clone that would look great on all device sizes.",
      "Throughout this project, I learned about semantic HTML, CSS flexbox and grid layouts, media queries for responsive design, and CSS animations for interactive elements. I also practiced using developer tools to inspect and debug my code.",
      "One of the biggest challenges was implementing the responsive navigation menu that transforms into a hamburger menu on mobile devices. I had to use CSS media queries and a bit of JavaScript to toggle the menu visibility.",
      "This project significantly improved my understanding of web fundamentals and gave me confidence to tackle more complex projects in the future.",
    ],
    images: [
      {
        src: "/images/projects/landing-page-project.png",
        alt: "Landing page hero section",
        caption: "The hero section with a responsive navigation menu",
      },
      {
        src: "/images/projects/landing-page-features.png",
        alt: "Features section of the landing page",
        caption: "Features section with CSS grid layout",
      },
      {
        src: "/images/projects/landing-page-mobile.png",
        alt: "Mobile view of the landing page",
        caption: "Responsive mobile design with hamburger menu",
      },
      {
        src: "/images/projects/landing-page-footer.png",
        alt: "Footer section of the landing page",
        caption: "Footer with contact form and social media links",
      },
    ],
    tags: ["HTML", "CSS", "Responsive Design"],
    date: "January 2023",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Figma UI Kit Practice",
    slug: "figma-ui-kit",
    description: "Exploration of UI components and design systems through Figma practice exercises.",
    longDescription: [
      "This project was focused on developing my UI design skills through the creation of a comprehensive UI kit in Figma. I wanted to understand how design systems work and how to create reusable components that maintain consistency across different screens.",
      "I started by researching existing design systems like Material Design and Apple's Human Interface Guidelines to understand best practices. Then, I created my own set of components including buttons, form elements, cards, navigation bars, and more.",
      "A key aspect of this project was learning about auto-layout, variants, and component properties in Figma, which allow for flexible and maintainable components. I also explored color theory and typography to create a cohesive visual language.",
      "The most challenging part was designing components that would work well together while being adaptable to different contexts. I had to think about states (hover, active, disabled), sizes, and theming options for each component.",
      "This project significantly improved my understanding of UI design principles and Figma's powerful features. The skills I gained have been invaluable for subsequent design projects and collaborations with developers.",
    ],
    images: [
      {
        src: "/images/projects/figma-project.png",
        alt: "Figma UI Kit overview",
        caption: "Overview of the UI components in the design system",
      },
      {
        src: "/images/projects/figma-components.png",
        alt: "Component variants in Figma",
        caption: "Button component with multiple variants and states",
      },
      {
        src: "/images/projects/figma-colors.png",
        alt: "Color palette for the UI kit",
        caption: "Systematic color palette with primary, secondary, and neutral colors",
      },
      {
        src: "/images/projects/figma-mockup.png",
        alt: "Application mockup using the UI kit",
        caption: "Sample application screen built with the UI components",
      },
    ],
    tags: ["Figma", "UI Design", "Components"],
    date: "March 2023",
    category: "UI Design",
  },
  {
    id: 3,
    title: "First Notion Database",
    slug: "notion-database",
    description: "Building a functional project management system using Notion's database features.",
    longDescription: [
      "This project involved creating a comprehensive project management system using Notion's powerful database features. I wanted to create a system that would help me track my learning progress, manage projects, and organize resources in one place.",
      "I started by mapping out my requirements and workflow, then researched different Notion templates and setups to understand best practices. I decided to create a custom solution that would perfectly fit my needs rather than using an existing template.",
      "The system includes multiple interconnected databases: Projects, Tasks, Resources, and Weekly Planning. I used Notion's relations and rollups to create connections between these databases, allowing me to see, for example, all tasks related to a specific project or all resources used for a particular task.",
      "One of the most challenging aspects was setting up the right properties and views for each database to make information easily accessible. I created multiple views (Kanban boards, calendars, galleries, tables) to visualize the same data in different ways depending on my needs.",
      "I also implemented automations using Notion formulas to calculate project progress, highlight overdue tasks, and categorize items automatically. This reduced manual work and kept the system up-to-date with minimal effort.",
      "This project taught me a lot about database design, information architecture, and productivity systems. The resulting Notion setup has significantly improved my organization and productivity, and I continue to refine it based on my evolving needs.",
    ],
    images: [
      {
        src: "/images/projects/notion-project.png",
        alt: "Notion project dashboard",
        caption: "Main dashboard with links to all databases and views",
      },
      {
        src: "/images/projects/notion-kanban.png",
        alt: "Kanban board view of tasks",
        caption: "Tasks organized in a Kanban board by status",
      },
      {
        src: "/images/projects/notion-calendar.png",
        alt: "Calendar view of projects",
        caption: "Projects and deadlines visualized in a calendar view",
      },
      {
        src: "/images/projects/notion-relations.png",
        alt: "Database relations in Notion",
        caption: "Complex relations between projects, tasks, and resources",
      },
    ],
    tags: ["Notion", "Database", "Productivity"],
    date: "May 2023",
    category: "Productivity",
  },
]
