"use client";

import { motion } from "framer-motion";

const stroke = "rgba(7, 26, 45, 0.22)";
const strokeSoft = "rgba(158, 50, 56, 0.28)";

export default function AnimatedMap() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full"
        initial="hidden"
        animate="show"
      >
        <motion.path
          d="M82 360 C 180 250, 220 420, 330 310 S 520 260, 610 310 S 720 420, 760 330"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 2.2, ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="M110 210 C 190 140, 300 160, 380 220 S 520 330, 620 280 S 740 210, 770 240"
          fill="none"
          stroke={strokeSoft}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 2.6, ease: "easeInOut", delay: 0.15 },
            },
          }}
        />
        <motion.path
          d="M70 470 C 190 520, 310 470, 420 520 S 610 590, 740 500"
          fill="none"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="3 10"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 3.0, ease: "easeInOut", delay: 0.25 },
            },
          }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { x: 220, y: 250 },
            { x: 520, y: 290 },
            { x: 640, y: 420 },
          ].map((p) => (
            <g key={`${p.x}-${p.y}`}>
              <circle cx={p.x} cy={p.y} r="4" fill="rgba(158, 50, 56, 0.8)" />
              <circle cx={p.x} cy={p.y} r="14" fill="rgba(158, 50, 56, 0.14)" />
            </g>
          ))}
        </motion.g>
      </motion.svg>

      <motion.div
        className="absolute left-[16%] top-[20%] h-20 w-20 rounded-full border border-brand-navy/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[14%] top-[18%] h-28 w-28 rounded-full border border-brand-amber/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[26%] bottom-[18%] h-40 w-40 rounded-full border border-brand-navy/10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
      />
    </motion.div>
  );
}
