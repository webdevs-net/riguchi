import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../styles/colors";

const LoadingAnimation = () => {
  const [sequence, setSequence] = React.useState(1);

  React.useEffect(() => {
    const timers = [
      setTimeout(() => setSequence(2), 3000),
      setTimeout(() => setSequence(3), 5000),
    ];
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  // Define the name in a single variable
  const name = "Ryan Iguchi";

  // Fade-in and upward motion animation
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div style={{ background: colors.background.gradient }}>
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.background.default}80 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.background.paper}80 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {sequence === 1 && (
            <motion.div className="flex flex-col items-center" exit={{ scale: 1.2, opacity: 0 }}>
              {/* Name with Smooth Gradient */}
              <motion.h1
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent cursor-default"
                style={{ color: colors.text.primary }}
                whileHover={{ scale: 1.05 }}
              >
                {name}.
              </motion.h1>
              {/* Title */}
              <motion.h2
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium mb-12"
                style={{ color: colors.text.secondary }}
              >
                Application Security Engineer
              </motion.h2>
            </motion.div>
          )}
          {sequence >= 2 && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {/* Name with Smooth Gradient */}
              <motion.h1
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent cursor-default"
                style={{ background: colors.accent.gradient }}
                whileHover={{ scale: 1.05 }}
              >
                {name}.
              </motion.h1>
              {/* Title */}
              <motion.h2
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium mb-12"
                style={{ color: colors.text.secondary }}
              >
                Application Security Engineer
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dotted Loading Animation */}
        <div className="absolute bottom-10 flex gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ background: colors.accent.gradient }}
              animate={{
                y: ["0%", "-100%", "0%"],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;