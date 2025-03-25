import { motion } from "framer-motion";
import P5Background from "@/components/elements/P5Background";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { ThreeDMarqueeDemo } from "@/components/temp/ThreeDMarqueeDemo";



const Temp = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      {/* <P5Background /> */}
      <BlurBackground />
      <FloatingObjects />
      <ThreeDMarqueeDemo />

      {/* Main Content */}



    </motion.div>
  );
};

export default Temp;
