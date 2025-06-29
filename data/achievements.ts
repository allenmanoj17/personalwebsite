import {
  FaTrophy,
  FaAward,
  FaRocket,
  FaStar,
} from "react-icons/fa";

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: React.ElementType;
}

export const achievements: Achievement[] = [
  {
    title: "SUEDE Designathon",
    description: "3rd Place & Best UI",
    date: "Sep 2024",
    icon: FaTrophy,
  },
  {
    title: "Paper Propine",
    description: "1st place in a national paper presentation competition",
    date: "Apr 2023",
    icon: FaAward,
  },
  {
    title: "Bug To Business",
    description: "Best Marketing Strategy Award at 24-hour Make-a-thon",
    date: "Nov 2022",
    icon: FaRocket,
  },
  {
    title: "Bhumi - Data Analysis Circle",
    description: "Intern of the Month (August)",
    date: "Aug 2022",
    icon: FaStar,
  },
  {
    title: "EMinds Hackathon",
    description: "1st place organized by EPIC, SVCE, and StepSetGo",
    date: "May 2022",
    icon: FaTrophy,
  },
  {
    title: "Ease the Error 2.0",
    description: "Best UI/UX Award in a 24-hour hackathon",
    date: "May 2021",
    icon: FaAward,
  },
];