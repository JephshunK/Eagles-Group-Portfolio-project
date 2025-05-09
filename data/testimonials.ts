export interface Testimonial {
  id: number
  content: string
  author: string
  role: string
  company: string
  imageSrc?: string
  teamMemberId?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Isaac is an exceptional frontend developer who consistently delivers clean, intuitive interfaces. His attention to detail and user-focused approach has significantly improved our product's user experience.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechInnovate",
    imageSrc: "/images/testimonials/sarah.png",
    teamMemberId: 1,
  },
  {
    id: 2,
    content:
      "Working with Baraka on our backend systems was a game-changer. His problem-solving skills and deep understanding of database architecture helped us optimize our API performance by over 40%.",
    author: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
    imageSrc: "/images/testimonials/michael.png",
    teamMemberId: 2,
  },
  {
    id: 3,
    content:
      "Meshack's UX designs are both beautiful and functional. He has a rare ability to translate complex user needs into simple, elegant solutions. Our user satisfaction scores increased by 25% after implementing his redesign.",
    author: "Priya Patel",
    role: "Head of Product",
    company: "UserFirst",
    imageSrc: "/images/testimonials/priya.png",
    teamMemberId: 3,
  },
  {
    id: 4,
    content:
      "Beatrice's data analysis skills are exceptional. She helped us identify key trends in our customer data that we had completely missed. Her insights directly contributed to a 30% increase in customer retention.",
    author: "David Okonkwo",
    role: "Marketing Director",
    company: "InsightMetrics",
    imageSrc: "/images/testimonials/david.png",
    teamMemberId: 4,
  },
  {
    id: 5,
    content:
      "The Eagles team delivered our project on time and exceeded our expectations. Their collaborative approach and diverse skill set allowed them to tackle complex problems from multiple angles.",
    author: "Lisa Wong",
    role: "CEO",
    company: "StartupLaunch",
    imageSrc: "/images/testimonials/lisa.png",
  },
  {
    id: 6,
    content:
      "I've worked with many development teams, but the Eagles stand out for their communication and reliability. They don't just build what you ask for—they partner with you to build what you actually need.",
    author: "James Mwangi",
    role: "Founder",
    company: "TechEdu",
    imageSrc: "/images/testimonials/james.png",
  },
]

export const getTestimonialsByTeamMember = (teamMemberId: number): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.teamMemberId === teamMemberId)
}
