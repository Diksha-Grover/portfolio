import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ImpactMetrics from "./components/ImpactMetrics";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ImpactMetrics />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}