import { useEffect } from "react";
import Hero from "../components/section/Hero";
import BlurBackground from "../components/section/BlurBackground";
import FloatingObjects from "../components/elements/FloatingObjects";
import TechStack from "../components/section/TechStack";
import FeaturedProjects from "../components/section/FeaturedProjects";
import Certification from "../components/section/Certification";
import SkillsSection from "../components/section/SkillsSection";
import Services from "../components/section/Services";
import ToolbarHighlight from "../components/section/ToolbarHighlight";
import TechnologyHighlight from "../components/section/TechnologyHighlight";
import TechSkills from "../components/section/TechSkills";
import ContactSection from "../components/section/ContactSection";
import { hasRuntimeConstraints } from "../lib/browser";

const Index = () => {
  const showFloatingEffects = !hasRuntimeConstraints();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Background Elements */}
      <BlurBackground />

      {showFloatingEffects && <FloatingObjects />}

      {/* Main Content */}
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <Certification />
        <SkillsSection />
        <Services />
        <ToolbarHighlight />
        <TechnologyHighlight />
        <TechSkills />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
