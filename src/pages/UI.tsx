import { motion } from "framer-motion";
import P5Background from "@/components/elements/P5Background";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { ThreeDMarqueeDemo } from "@/components/uilibrary/ThreeDMarqueeDemo";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import AnimatedDice from "@/components/uilibrary/AnimatedDice";



const UI = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent min-h-screen relative py-20 md:py-28 "
        >
            {/* Background Elements */}
            <P5Background className="blur-sm" />
            <BlurBackground />
            <FloatingObjects />
            <Navbar />

            {/* Main Content */}
            <h1 className="flex items-center justify-center text-gradient text-4xl md:text-5xl font-bold heading-gradient">UI Library</h1>

            <div className="flex flex-col items-center justify-center my-10 md:my-20 space-y-40">
                <ThreeDMarqueeDemo />
                <AnimatedDice />

            </div>



            <Footer />
        </motion.div>
    );
};

export default UI;
