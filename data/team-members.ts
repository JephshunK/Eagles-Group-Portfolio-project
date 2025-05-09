export interface TeamMember {
  id: number
  name: string
  fullName: string
  role: string
  bio: string
  longBio?: string
  imageSrc: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Isaac",
    fullName: "Isaac Kiragu",
    role: "Frontend Developer",
    bio: "Enthusiastic frontend learner with a passion for clean UI design.",
    longBio:
      "Isaac is passionate about creating clean, intuitive user interfaces. When not coding or designing, you'll find him exploring new coffee shops and reading science fiction.",
    imageSrc: "/images/team/isaac-profile.png",
    social: {
      linkedin: "https://linkedin.com/in/isaackiragu",
      github: "https://github.com/isaackiragu",
      twitter: "https://twitter.com/isaackiragu",
    },
  },
  {
    id: 2,
    name: "Baraka",
    fullName: "Baraka Ouma",
    role: "Backend Developer",
    bio: "The problem solver and backend enthusiast learning databases and APIs.",
    longBio:
      "Baraka loves solving complex problems and building robust backend systems. In his free time, he enjoys hiking and playing strategy board games.",
    imageSrc: "/images/team/baraka-profile.png",
    social: {
      linkedin: "https://linkedin.com/in/barakaouma",
      github: "https://github.com/barakaouma",
      twitter: "https://twitter.com/barakaouma",
    },
  },
  {
    id: 3,
    name: "Meshack",
    fullName: "Meshack Kipchirchir",
    role: "UX Designer",
    bio: "Creative thinker and aspiring UX designer obsessed with user-centered design.",
    longBio:
      "Meshack is dedicated to creating user-centered designs that solve real problems. He loves conducting user research and turning insights into meaningful experiences.",
    imageSrc: "/images/team/meshack-profile.png",
    social: {
      linkedin: "https://linkedin.com/in/meshackkipchirchir",
      github: "https://github.com/meshackkipchirchir",
      twitter: "https://twitter.com/meshackkipchirchir",
    },
  },
  {
    id: 4,
    name: "Beatrice",
    fullName: "Beatrice Okuro",
    role: "Data Analyst",
    bio: "Analytical thinker with expertise in transforming complex data into actionable insights.",
    longBio:
      "Beatrice specializes in data analysis and visualization, helping teams make data-driven decisions. She has a background in statistics and is passionate about finding patterns in complex datasets. When not working with data, she enjoys photography and exploring nature.",
    imageSrc: "/images/team/beatrice-profile.png",
    social: {
      linkedin: "https://linkedin.com/in/beatriceokuro",
      github: "https://github.com/beatriceokuro",
      twitter: "https://twitter.com/beatriceokuro",
    },
  },
]

export const getTeamMember = (id: number): TeamMember | undefined => {
  return teamMembers.find((member) => member.id === id)
}

export const getTeamMemberByName = (name: string): TeamMember | undefined => {
  return teamMembers.find(
    (member) =>
      member.name.toLowerCase() === name.toLowerCase() || member.fullName.toLowerCase() === name.toLowerCase(),
  )
}
