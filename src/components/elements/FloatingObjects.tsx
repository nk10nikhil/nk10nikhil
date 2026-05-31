import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Square, Hexagon, Triangle, Star, Circle } from "lucide-react";
import Particles from "./Particles";
import { getNavigatorConnection } from "../../lib/browser";

const FLOATING_ITEMS = [
  {
    id: 1,
    Icon: Square,
    size: 40,
    className: "absolute top-[15%] right-[10%]",
    containerClass: "bg-purple-700/20 rounded-2xl p-4",
    iconColor: "text-purple-400",
  },
  {
    id: 2,
    Icon: Hexagon,
    size: 30,
    className: "absolute bottom-[20%] left-[15%]",
    containerClass: "bg-indigo-700/20 rounded-full p-4",
    iconColor: "text-indigo-400",
  },
  {
    id: 3,
    Icon: Triangle,
    size: 25,
    className: "absolute top-[50%] right-[20%]",
    containerClass: "bg-blue-700/20 rounded-lg p-3",
    iconColor: "text-blue-400",
  },
  {
    id: 4,
    Icon: Star,
    size: 35,
    className: "absolute top-[30%] left-[30%]",
    containerClass: "bg-primary/20 rounded-xl p-4",
    iconColor: "text-primary/70",
  },
  {
    id: 5,
    Icon: Circle,
    size: 20,
    className: "absolute bottom-[25%] right-[25%]",
    containerClass: "bg-purple-600/20 rounded-full p-2",
    iconColor: "text-purple-300",
  },
  {
    id: 6,
    Icon: Star,
    size: 28,
    className: "absolute top-[10%] left-[20%]",
    containerClass: "bg-indigo-600/20 rounded-full p-4",
    iconColor: "text-indigo-300",
  },
  {
    id: 7,
    Icon: Triangle,
    size: 22,
    className: "absolute bottom-[40%] right-[50%]",
    containerClass: "bg-blue-600/20 rounded-full p-3",
    iconColor: "text-blue-300",
  },
];

const FloatingObjects = React.memo(() => {
  const prefersReducedMotion = useReducedMotion();

  const [isClient, setIsClient] = useState(false);
  const [particleQuantity, setParticleQuantity] = useState(100);

  useEffect(() => {
    setIsClient(true);

    const connection = getNavigatorConnection();

    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");

    if (prefersReducedMotion || saveData || slowNetwork) {
      setParticleQuantity(24);
      return;
    }

    setParticleQuantity(200);
  }, [prefersReducedMotion]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      style={{
        contain: "layout paint style",
      }}
      aria-hidden="true"
    >
      <Particles className="absolute inset-0" quantity={particleQuantity} />

      {FLOATING_ITEMS.map(
        ({ id, Icon, size, className, containerClass, iconColor }) => (
          <motion.div
            key={id}
            className={className}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [-20, 12, -20],
                  }
            }
            transition={{
              duration: 8 + id,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={containerClass}>
              <Icon size={size} className={iconColor} />
            </div>
          </motion.div>
        ),
      )}
    </div>
  );
});

FloatingObjects.displayName = "FloatingObjects";

export default FloatingObjects;
