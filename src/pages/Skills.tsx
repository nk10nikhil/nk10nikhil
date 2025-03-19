import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import SkillsSection from "@/components/section/SkillsSection";
import DigitalLamp from "@/components/universeio/DigitalLamp";
import { OrbitingCirclesDemo } from "@/components/elements/OrbitingCirclesDemo";
import ParallaxScroll from "@/components/elements/ParallaxScroll";
import TechStack from "@/components/section/TechStack";

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent min-h-screen relative"
        >
            {/* Background Elements */}
            <P5Background className="blur-sm" />
            <BlurBackground />
            <FloatingObjects />

            {/* Content */}
            <Navbar />
            <main className="py-20 md:py-28">
                <section className="container mx-auto px-4 md:px-6 mb-0 pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="flex flex-col items-center justify-center bg-black/25 bg-opacity-10 rounded-lg p-4 mb-4">
                            <h1 className="text-4xl md:text-5xl font-bold heading-gradient">My Skills</h1>
                            <div className="flex flex-row items-center justify-center space-x-4">
                                <div className="flex items-center justify-center">
                                    <OrbitingCirclesDemo />
                                </div>
                                <div className="flex flex-col items-center justify-center">

                                    <p className="text-lg text-muted-foreground max-w-3xl">
                                        I have a wide range of skills and experience in the field of web development. Here are some of the
                                        technologies I have worked with.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <SkillsSection />
                        <TechStack />
                    </motion.div>
                </section>
            </main>
            <Footer />
        </motion.div>
    );
};

export default Skills;
