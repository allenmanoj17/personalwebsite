export interface ExperienceEntry {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string[];
  type: "experience" | "leadership" | "volunteering";
  skills?: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    title: "Career Support Leader Intern [Data Team]",
    role: "Data Intern",
    period: "April 2025 – Present",
    organization: "Careers Centre, The University of Sydney",
    description: [
      "Support internal reporting by cleaning and analysing student engagement metrics using Excel, Python and Power BI to inform service improvements.",
      "Deliver front-line support and guide students to tailored career resources and online tools. Coordinate logistics for information sessions and workshops, setup."
    ],
    skills: ["Excel", "Python", "Power BI", "Data Analysis", "Communication"],
    type: "experience"
  },
  {
    title: "Data Consultant Intern",
    role: "Data Consultant Intern",
    period: "June 2024 – July 2024",
    organization: "EDU Talent",
    description: [
      "Analyzed student data on commencement, completion, and attrition across universities, providing insights to improve retention strategies for high-dropout institutions.",
      "Led teacher attrition analysis, identifying retention factors and recommending strategies to enhance workforce stability.",
      "Evaluated market expansion, proposing strategies to address regional disparities and grow presence in underserved areas using advanced tech and partnerships."
    ],
    skills: ["Data Analysis", "Retention Strategies", "Market Research", "Reporting"],
    type: "experience"
  },
  {
    title: "Associate Product Manager and Data Intern",
    role: "Product & Data",
    period: "Feb 2023 - May 2023",
    organization: "Qwk, the Convenience App",
    description: [
      "Managed cross-functional collaboration between engineering and design teams to ensure the timely completion of tasks and deliverables for the integration of new features into the application.",
      "Effectively managed relationships with external organizations as the primary point of contact, facilitating the integration of their services. [Industry: Finance, Quick-Commerce]",
      "Utilized Selenium to scrape data from various legal sources efficiently. Performed data cleaning and analysis using Python/MS Excel, extracting valuable insights to support business decision-making.",
      "Location: Chennai, Tamil Nadu, India · On-site",
      "Duration: Feb 2023 - May 2023 · 4 months"
    ],
    skills: ["Product Management", "Data Analysis", "Selenium", "Python", "Excel"],
    type: "experience"
  },
  {
    title: "Data Analyst Intern",
    role: "Data Analysis",
    period: "May 2022 - Nov 2022",
    organization: "Bhumi",
    description: [
      "Data extraction, interpretation and transformation with the goal of highlighting useful information, deriving conclusions and supporting decision-making through data analysis.",
      "Implemented data visualization methodologies to fulfil the client’s expectations and to be able to adjust specifics during the design process."
    ],
    skills: ["Data Extraction", "Data Visualization", "Decision Making"],
    type: "experience"
  },
  {
    title: "Data Scientist Intern",
    role: "Data Science",
    period: "November 2021 - December 2021",
    organization: "Exposys Data Labs",
    description: [
      "Worked based on a customer segmentation project with data analysis using K Means Clustering.",
      "Developed a suitable solution for marketing."
    ],
    skills: ["K-Means Clustering", "Customer Segmentation", "Data Science"],
    type: "experience"
  },
  {
    title: "Website Development Intern",
    role: "Web Development",
    period: "June 2021 - July 2021",
    organization: "Exotrix Learning",
    description: [
      "Designed and developed a new official website for the academic institution.",
      "Completed all tasks on schedule and to the satisfaction of the founder.",
      "Website visits increased by around 72% due to SEO keyword strategy."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "SEO"],
    type: "experience"
  },
  {
    title: "Coding Instructor",
    role: "Instructor",
    period: "January 2021 - March 2021",
    organization: "Hatch School of Code",
    description: [
      "Instructed pupils ranging in age from 8 to 14 in HTML, CSS, and JavaScript.",
      "Students were able to create static and dynamic websites by the end of the cohort."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Teaching"],
    type: "experience"
  },

  
  {
    title: "Mentor",
    role: "Mentor",
    period: "June 2025 - July 2025",
    organization: "Practera / Study NSW",
    description: [
      "Mentored 5 international students as part of a Practera program under Study NSW, guiding them through projects and professional development activities."
    ],
    skills: ["Mentoring", "Project Guidance", "Cross-Cultural Communication"],
    type: "leadership"
  },
  {
    title: "Co-Lead - Data Collection",
    role: "Team Co-Lead",
    period: "January 2023",
    organization: "Omdena Nellore Chapter",
    description: [
      "Worked on the project 'Understanding the Disconnect between Skills and Jobs in India.'",
      "Gathered and analyzed data to identify gaps between job requirements and available skills.",
      "Collaborated with a team to organize findings into reports, making the information easier to understand and use."
    ],
    skills: ["Leadership", "Data Analysis", "Reporting", "Collaboration"],
    type: "leadership"
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
    type: "leadership"
  },
  {
    title: "Member - Data",
    role: "Volunteer",
    period: "September 2020 - June 2023",
    organization: "Engineers Without Borders",
    description: [
      "Website and data team contributor, blog writer."
    ],
    skills: ["Writing", "Tech for Good", "Teamwork"],
    type: "leadership"
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
    type: "leadership"
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
    type: "leadership"
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
    type: "leadership"
  },
  {
    title: "Tech Head",
    role: "Team Lead",
    period: "March 2021 - March 2022",
    organization: "FORum for Economic Studies by Engineers",
    description: [
      "Founded Coders' Forum to promote coding.",
      "Led content, design, and dev for Mock Placement with 700+ attendees.",
      "Built website using HTML, CSS, JavaScript."
    ],
    skills: ["Technical Leadership", "Web Dev", "Community"],
    type: "leadership"
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
    type: "leadership"
  },
  {
    title: "Member - Developer",
    role: "Developer",
    period: "August 2020 - March 2021",
    organization: "FORum for Economic Studies by Engineers",
    description: [
      "Developed club website and Mock Analysis Software using Python.",
      "Designed event posters.",
      "Cold-called HRs, prepared aptitude tests, managed floor for mock interviews.",
      "Assisted in group discussions and logistics."
    ],
    skills: ["Python", "Design", "Web Development", "Operations"],
    type: "leadership"
  },
  


  {
    title: "Volunteer",
    role: "Volunteer",
    period: "April 2024 - Present",
    organization: "University of Sydney Union (USU)",
    description: [
      "Volunteer support at events and activities organized by the University of Sydney Union."
    ],
    skills: ["Event Support", "Communication", "Teamwork"],
    type: "volunteering"
  },

  {
    title: "Peer Mentor",
    role: "Mentor",
    period: "Semester II - 2024",
    organization: "Faculty of Engineering, University of Sydney",
    description: [
      "Guided new engineering students through university life, providing academic and social support."
    ],
    skills: ["Mentoring", "Student Support", "Communication"],
    type: "volunteering"
  },
  {
    title: "Retail Assistant Volunteer",
    role: "Volunteer",
    period: "April 2024 – August 2024",
    organization: "Salvation Army",
    description: [
      "Assisted in retail operations including customer service and organizing merchandise."
    ],
    skills: ["Customer Service", "Retail Operations", "Teamwork"],
    type: "volunteering"
  },
  {
    title: "Help Desk Volunteer",
    role: "Volunteer",
    period: "March 2024 – July 2024",
    organization: "Study NSW & Communiteer",
    description: [
      "Provided support to international students via help desk and information services."
    ],
    skills: ["Support Services", "Communication", "Problem Solving"],
    type: "volunteering"
  },
  {
    title: "Volunteer Member",
    role: "Volunteer",
    period: "August 2020 – June 2023",
    organization: "Youth Red Cross",
    description: [
      "Attended workshops and promoted social causes among students."
    ],
    skills: ["Social Impact", "Awareness", "Support"],
    type: "volunteering"
  },
  {
    title: "Graphic Designer",
    role: "Designer",
    period: "July 2020 – Nov 2020",
    organization: "Scholarship Track",
    description: [
      "Designed creatives and carousels with high engagement, managed social media feed."
    ],
    skills: ["Graphic Design", "Engagement", "Branding"],
    type: "volunteering"
  },
  {
    title: "Volunteer",
    role: "Volunteer",
    period: "Sep 2019 – Jan 2020",
    organization: "LEO Club SVCE",
    description: [
      "Led beach cleanup and raised awareness on public cleanliness."
    ],
    skills: ["Environment", "Teamwork", "Initiative"],
    type: "volunteering"
  }
];   