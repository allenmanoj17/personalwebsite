"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="px-6 py-10 bg-white border-t border-gray-100 text-center">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">
        Allen Manoj
      </h2>

      <div className="flex justify-center gap-5 mt-4">
        <FooterIcon
          href="https://github.com/allenmanoj17"
          Icon={FaGithub}
        />
        <FooterIcon
          href="https://www.linkedin.com/in/allenmanoj/"
          Icon={FaLinkedin}
        />
        <FooterIcon
          href="https://x.com/allenmanoj17"
          Icon={SiX}
        />
        <FooterIcon
          href="https://allenmanoj.medium.com/"
          Icon={FaMedium}
        />
        <FooterIcon
          href="https://www.youtube.com/@allenmanoj"
          Icon={FaYoutube}
        />
        <FooterIcon
          href="mailto:allenmanoj17@gmail.com"
          Icon={FaEnvelope}
        />
      </div>

      <p className="text-xs text-gray-500 mt-5">
        Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong>.
      </p>

      <p className="text-xs text-gray-400 mt-1">
        © {new Date().getFullYear()} Allen Manoj — Crafted with clarity, caffeine ☕, and clean code.
      </p>
    </footer>
  );
};

const FooterIcon = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ElementType;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-indigo-600 transition-transform hover:-translate-y-1 duration-300"
  >
    <Icon className="text-lg md:text-xl" />
  </a>
);

export default Footer;
