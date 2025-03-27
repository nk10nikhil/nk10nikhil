import { motion } from "framer-motion";
import P5Background from "@/components/elements/P5Background";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { ThreeDMarqueeDemo } from "@/components/elements/ThreeDMarqueeDemo";
import { GlowingEffectDemo } from "@/components/aceternityui/GlowingEffectDemo";
import { HeroHighlightDemo } from "@/components/aceternityui/HeroHighlight";
import { HeroParallaxDemo } from "@/components/aceternityui/HeroParallaxDemo";
import { LampDemo } from "@/components/aceternityui/lamp";
import { SidebarDemo } from "@/components/aceternityui/SidebarDemo";
import { SparklesPreview } from "@/components/aceternityui/SparklesPreview";
import { SVGMaskEffectDemo } from "@/components/aceternityui/SVGMaskEffectDemo";
import { TextHoverEffectDemo } from "@/components/aceternityui/TextHoverEffectDemo";
import { CarouselDemo } from "@/components/aceternityui/CarouselDemo";

const UI = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent min-h-screen relative"
        >
            {/* Background Elements */}
            {/* <P5Background />
            <BlurBackground />
            <FloatingObjects /> */}
            {/* <GlowingEffectDemo />
            <HeroHighlightDemo /> */}
            {/* <HeroParallaxDemo /> */}
            {/* <LampDemo /> */}
            {/* <SidebarDemo /> */}
            {/* <SparklesPreview /> */}
            {/* <SVGMaskEffectDemo /> */}
            {/* <TextHoverEffectDemo /> */}
            {/* <CarouselDemo /> */}
        </motion.div>
    );
};

export default UI;
