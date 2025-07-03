// pages/index.tsx
import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import Experience from "../components/Experience";
import { Publications } from "../components/Publications";
import Projects from "@/components/Projects";
import { Achievements } from "../components/Achievements";
import { BlogPreview } from "../components/BlogPreview";
import { Contact } from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Allen Manoj | Data Scientist</title>
        <meta
          name="description"
          content="Portfolio of Allen Manoj - Data Scientist and ML Enthusiast"
        />
        <meta property="og:title" content="Allen Manoj | Data Scientist" />
        <meta
          property="og:description"
          content="Portfolio of Allen Manoj - Data Scientist and ML Enthusiast"
        />
        <meta property="og:image" content="/images/og-preview.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={inter.className}>
        <Navbar />
        <Hero />
        <About />
        <Projects />        
        <Experience />
        <Achievements />
        <Publications />
        <BlogPreview />
        <Contact />
        <Footer />
      </main>
    </>
  );
}