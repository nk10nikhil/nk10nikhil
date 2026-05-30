import { motion } from "framer-motion";
import HoverCard from "../elements/HoverCard";

const TechnologyHighlight = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-secondary/15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">
              Problem Solving
            </h2>
            <p className="text-muted-foreground text-lg text-center">
              I excel at breaking down complex problems into manageable parts and finding efficient solutions. My approach combines analytical thinking with creativity, allowing me to tackle challenges from multiple angles and deliver innovative results.
            </p>
          </motion.div>

          {/* Right side - Technology Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-center"
          >
            <HoverCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHighlight;
