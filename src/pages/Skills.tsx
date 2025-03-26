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
import LinkedCircularSkills from "@/components/elements/LinkedCircularSkills";
import BackgroundHero from "@/components/section/BackgrounHero";
import { CheckCircle2 } from "lucide-react";
import ScrollingSections from "@/components/section/ScrollableSection";
import LogoScroll from "@/components/elements/LogoScroll";


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
            {/* <P5Background className="blur-sm" /> */}
            <BlurBackground />
            {/* <FloatingObjects /> */}

            {/* Content */}
            <Navbar />
            <main className="pb-20 md:pb-28">
                <section className="container mx-0 px-0 md:px-0 mb-0 pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >

                        <BackgroundHero />

                        <LogoScroll />

                        <div className="relative">
                            <div className="absolute -inset-1 rounded-xl bg-black/50 blur-xl opacity-70"></div>
                            <div className="relative glass-card rounded-xl p-10 backdrop-blur-xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Why Choose Me?</h2>
                                <p className="text-white/80 text-lg  leading-relaxed">
                                    We blend technical expertise with strategic thinking to deliver solutions that drive real business value. Our approach is collaborative, transparent, and focused on long-term success.
                                </p>
                                <ScrollingSections />
                            </div>
                        </div>


                        {/* Api Integration */}
                        <section className="container mx-auto py-16 relative">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <div className="relative mx-auto max-w-md rounded-xl overflow-hidden border border-purple-700/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 pointer-events-none"></div>
                                        <img
                                            src="/sections/api4.png"
                                            width={400}
                                            height={400}
                                            alt="API Integrations"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-1 mb-6 border border-purple-700/30">
                                        <span className="text-xs text-purple-300">INTEGRATIONS</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">APIs and Integrations</h2>
                                    <p className="text-gray-400 mb-8">
                                        Easily connect with over 100 tools and services to enhance your workflow and extend functionality.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-purple-500" />
                                            </div>
                                            <span className="text-sm">Google Analytics</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-purple-500" />
                                            </div>
                                            <span className="text-sm">Stripe Payments</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-purple-500" />
                                            </div>
                                            <span className="text-sm">Mailchimp</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-purple-500" />
                                            </div>
                                            <span className="text-sm">Zapier</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* {Testimonials} */}
                        <section className="container mx-auto py-16 relative">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-1 mb-6 border border-purple-700/30">
                                    <span className="text-xs text-purple-300">TESTIMONIALS</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">What my customers say</h2>
                            </div>
                            <div className="flex mx-auto items-center justify-center gap-6 max-w-3xl">
                                {[1].map((i) => (
                                    <div
                                        key={i}
                                        className="bg-gradient-to-br from-purple-900/40 to-purple-800/10 p-6 rounded-xl border border-purple-700/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                                    >
                                        <div className="flex items-center gap-0.5 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <div key={star} className="text-yellow-400">
                                                    ★
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-6 text-left">
                                            "Nikhil has completely transformed how we build websites. The AI-powered tools save us hours of work,
                                            and the templates are beautiful and customizable."
                                        </p>
                                        <div className="flex items-left gap-3">
                                            <div className="h-10 w-10 rounded-full bg-purple-600/30"></div>
                                            <div>
                                                <p className="font-medium text-left">Sahil Sharma</p>
                                                <p className="text-sm text-gray-400">Marketing Director</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </motion.div>
                </section>
            </main>
            <Footer />
        </motion.div>
    );
};

export default Skills;
