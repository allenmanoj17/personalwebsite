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
        <title>Allen Manoj</title>
        <meta
          name="description"
          content="Explore the portfolio of Allen Manoj, Data Scientist and Machine Learning Enthusiast. Discover projects, experience, publications, and achievements."
        />
        <meta
          name="keywords"
          content="Allen Manoj, Data Scientist, Machine Learning, AI Engineer, Portfolio, Deep Learning, Projects"
        />
        <meta name="author" content="Allen Manoj" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.allenmanoj.com/" />
        <meta property="og:title" content="Allen Manoj" />
        <meta
          property="og:description"
          content="Explore the portfolio of Allen Manoj, Data Scientist and Machine Learning Enthusiast. Discover projects, experience, publications, and achievements."
        />
        <meta property="og:image" content="/images/og-preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Allen Manoj Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allen Manoj" />
        <meta name="twitter:description" content="Explore Allen Manoj's portfolio showcasing projects, experience, publications, and achievements in AI and ML." />
        <meta name="twitter:image" content="/images/og-preview.png" />
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