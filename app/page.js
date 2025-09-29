import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/about/AboutSection";
import AchievementsSection from "./components/achievements/AchievementsSection";
import EmailSection from "./components/contact/EmailSection";
import Footer from "./components/footer/Footer";
import ProjectSection from "./components/projects/ProjectSection";

export default function Home() {
  return (

      <main className="flex min-h-screen flex-col bg-background ">
        <Navbar />
        <div className="container mt-24 mx-auto px-10 py-4">
          <HeroSection />
          {/* <AchievementsSection /> */}
          <AboutSection/>
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
     
  );
}
