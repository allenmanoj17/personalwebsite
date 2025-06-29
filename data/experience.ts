export interface ExperienceEntry {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string[];
  type: "experience" | "leadership" | "volunteering";
  skills?: string[];
  current?: boolean; // added current flag
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "ASSOCIATE PRODUCT MANAGER AND DATA INTERN",
    role: "Product & Data",
    period: "Feb 2023 - May 2023",
    organization: "Bhumi",
    description: [
      "Managed cross-functional collaboration between engineering and design teams to ensure the timely completion of tasks and deliverables for the integration of new features into the application.",
      "Effectively managed relationships with external organizations as the primary point of contact, facilitating the integration of their services. [Industry: Finance, Quick-Commerce]",
      "Utilized Selenium to scrape data from various legal sources efficiently. Performed data cleaning and analysis using Python/MS Excel, extracting valuable insights to support business decision-making."
    ],
    skills: ["Product Management", "Data Analysis", "Selenium", "Python", "Excel"],
    type: "experience",
    current: false
  },
  {
    title: "DATA ANALYST INTERN",
    role: "Data Analysis",
    period: "May 2022 - Nov 2022",
    organization: "Bhumi",
    description: [
      "Data extraction, interpretation and transformation with the goal of highlighting useful information, deriving conclusions and supporting decision-making through data analysis.",
      "Implemented data visualization methodologies to fulfil the client’s expectations and to be able to adjust specifics during the design process."
    ],
    skills: ["Data Extraction", "Data Visualization", "Decision Making"],
    type: "experience",
    current: false
  },
  {
    title: "DATA VISUALIZATION INTERN",
    role: "Data Visualization",
    period: "September 2022",
    organization: "Illinois Institute of Technology, Globalshala",
    description: [
      "Analyzed data from an advertisement campaign and produced various dashboards that provided extensive information about all campaigns of the organisation.",
      "Dashboard insights were able to evaluate each campaign and give successful marketing ideologies."
    ],
    skills: ["Data Analysis", "Dashboards", "Marketing"],
    type: "experience",
    current: false
  },
  {
    title: "DATA SCIENTIST INTERN",
    role: "Data Science",
    period: "November 2021 - December 2021",
    organization: "Exposys Data Labs",
    description: [
      "Worked based on a customer segmentation project with data analysis using K Means Clustering.",
      "Developed a suitable solution for marketing."
    ],
    skills: ["K-Means Clustering", "Customer Segmentation", "Data Science"],
    type: "experience",
    current: false
  },
  {
    title: "WEBSITE DEVELOPMENT INTERN",
    role: "Web Development",
    period: "June 2021 - July 2021",
    organization: "Exotrix Learning",
    description: [
      "Designed and developed a new official website for the academic institution.",
      "Completed all tasks on schedule and to the satisfaction of the founder.",
      "Website visits increased by around 72% due to SEO keyword strategy."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "SEO"],
    type: "experience",
    current: false
  },
  {
    title: "CODING INSTRUCTOR",
    role: "Instructor",
    period: "January 2021 - March 2021",
    organization: "Hatch School of Code",
    description: [
      "Instructed pupils ranging in age from 8 to 14 in HTML, CSS, and JavaScript.",
      "Students were able to create static and dynamic websites by the end of the cohort."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Teaching"],
    type: "experience",
    current: false
  },
  {
    title: "Co-Founder",
    role: "Founder",
    period: "August 2021 - August 2022",
    organization: "SUNDAY",
    description: [
      "Built a 14-person youth community for tech, design, and growth.",
      "Developed short- and long-term goals for organizational growth.",
      "Represented the firm at events, gatherings, and trainings.",
      "Created team task guidelines and assigned responsibilities."
    ],
    skills: ["Leadership", "Team Management", "Community Building"],
    type: "leadership",
    current: false
  },
  {
    title: "Social Media Manager",
    role: "SMM",
    period: "May 2021 - Jan 2023",
    organization: "Elixir Coding",
    description: [
      "Managed content creation for 500+ followers on Instagram.",
      "Introduced a character named DOM in reels.",
      "Researched, designed, and evaluated post performance."
    ],
    skills: ["Design", "Social Media", "Strategy"],
    type: "leadership",
    current: false
  },
  {
    title: "Social Media Influencer",
    role: "Creator",
    period: "December 2018 - Jan 2023",
    organization: "allenmanoj",
    description: [
      "Shared content on Mental Health and Psychology with 10K+ followers.",
      "Focused on positivity, mindfulness, manifestation, and books."
    ],
    skills: ["Content Creation", "Mental Health", "Influence"],
    type: "leadership",
    current: true
  },
  {
    title: "Vice President",
    role: "Lead Coordinator",
    period: "October 2022 - June 2023",
    organization: "Association of Computer Engineers",
    description: [
      "Led 50-member team across Design, Web Dev, Marketing, Content, Accounts.",
      "Organized flagship Interrupt Symposium and 5+ events.",
      "Volunteered at hackathons and solved real-time issues."
    ],
    skills: ["Leadership", "Event Planning", "Team Management"],
    type: "leadership",
    current: false
  },
  {
    title: "Executive Member",
    role: "Organizer",
    period: "July 2020 - June 2021",
    organization: "Association of Computer Engineers",
    description: [
      "Organized 8+ tech events with flagship event reaching 500+ participants.",
      "Contributed to website development and design teams."
    ],
    skills: ["Event Management", "Design", "Web Development"],
    type: "leadership",
    current: false
  },
  {
    title: "Tech Head",
    role: "Team Lead",
    period: "March 2021 - March 2022",
    organization: "FORum for Economic Studies by Engineers",
    description: [
      "Led content, design, and dev for Mock Placement with 700+ attendees.",
      "Built website using HTML, CSS, JavaScript.",
      "Founded Coders' Forum to promote coding."
    ],
    skills: ["Technical Leadership", "Web Dev", "Community"],
    type: "leadership",
    current: false
  },
  {
    title: "Tech Team Member - Developer",
    role: "Developer",
    period: "August 2020 - March 2021",
    organization: "FORum for Economic Studies by Engineers",
    description: [
      "Developed club website and Mock Analysis Software using Python.",
      "Designed event posters."
    ],
    skills: ["Python", "Design", "Web Development"],
    type: "leadership",
    current: false
  },
  {
    title: "Member",
    role: "Support",
    period: "July 2020 - March 2021",
    organization: "FORum for Economic Studies by Engineers",
    description: [
      "Cold-called HRs, prepared aptitude tests, managed floor for mock interviews.",
      "Assisted in group discussions and logistics."
    ],
    skills: ["Communication", "Operations", "Teamwork"],
    type: "leadership",
    current: false
  },
  {
    title: "Microsoft Learn Student Ambassador",
    role: "Ambassador",
    period: "January 2021 - May 2023",
    organization: "Microsoft",
    description: [
      "Represented Microsoft Learn, promoted student education initiatives."
    ],
    skills: ["Advocacy", "Learning", "Tech Outreach"],
    type: "leadership",
    current: false
  },
  {
    title: "Member",
    role: "Volunteer",
    period: "September 2020 - June 2023",
    organization: "Engineers Without Borders",
    description: [
      "Website and data team contributor, blog writer."
    ],
    skills: ["Writing", "Tech for Good", "Teamwork"],
    type: "leadership",
    current: false
  },
  {
    title: "Member",
    role: "Volunteer",
    period: "July 2021 - June 2023",
    organization: "Youth Red Cross",
    description: [
      "Attended workshops, promoted social causes among students."
    ],
    skills: ["Social Impact", "Awareness", "Support"],
    type: "volunteering",
    current: false
  },
  {
    title: "Graphic Designer",
    role: "Designer",
    period: "July 2020 - November 2020",
    organization: "Scholarship Track",
    description: [
      "Designed creatives and carousels with 80%+ engagement.",
      "Managed social media feed across platforms."
    ],
    skills: ["Graphic Design", "Engagement", "Branding"],
    type: "volunteering",
    current: false
  },
  {
    title: "Member",
    role: "Volunteer",
    period: "September 2019 - December 2019",
    organization: "LEO Club SVCE",
    description: [
      "Led beach cleanup, raised awareness on public cleanliness."
    ],
    skills: ["Environment", "Teamwork", "Initiative"],
    type: "volunteering",
    current: false
  }
];