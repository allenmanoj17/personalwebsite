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
          content="Explore Allen Manoj's portfolio showcasing dashboards, data analytics, projects, and business insights powered by Tableau, Power BI, and Machine Learning."
        />
        <meta
          name="keywords"
          content="Allen Manoj, Data Analytics, Dashboards, Tableau, Power BI, Data Science, Portfolio, Machine Learning, AI, Projects"
        />
        <meta name="author" content="Allen Manoj" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.allenmanoj.com/" />
        <meta property="og:title" content="Allen Manoj" />
        <meta
          property="og:description"
          content="Explore Allen Manoj's portfolio showcasing dashboards, data analytics, projects, and business insights powered by Tableau, Power BI, and Machine Learning."
        />
        <meta property="og:image" content="/images/forPreview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Allen Manoj Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allen Manoj" />
        <meta name="twitter:description" content="Explore Allen Manoj's portfolio showcasing dashboards, data analytics, projects, and business insights powered by Tableau, Power BI, and Machine Learning." />
        <meta name="twitter:image" content="/images/forPreview.png" />
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