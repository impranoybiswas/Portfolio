"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type SpecialDay = {
  month: number; 
  day: number;   
  title: string;

};

const SPECIAL_DAYS: SpecialDay[] = [
  // January
  { month: 1, day: 1, title: "Happy New Year" },

  // Fabruary
  { month: 2, day: 7, title: "Happy Rose Day" },
  { month: 2, day: 9, title: "Chocolate Day" },
  { month: 2, day: 11, title: "Promise Day" },
  { month: 2, day: 14, title: "Happy Valentine's Day" },
  { month: 2, day: 21, title: "Moaning for Language Martyrs" },

  // March
  { month: 3, day: 8, title: "Happy Women's Day" },
  { month: 3, day: 17, title: "Happy Children's Day" },
  { month: 3, day: 26, title: "Happy Independence Day" },

  // April
  { month: 4, day: 14, title: "Shubho Pohela Boishakh" },

  // May

  // June

  // July

  // August
  { month: 8, day: 12, title: "International Youth Day" },
  { month: 8, day: 15, title: "Moaning for Bangabandhu" },

  // September


  // Octaber
  { month: 10, day: 5, title: "Thanks to all Teachers" },

  // Navember

  // December
  { month: 12, day: 14, title: "Moaning for Intellectuals Martyrs" },
  { month: 12, day: 16, title: "Victory Day of Bangladesh" },
  { month: 12, day: 25, title: "Mary Christmas" },
  { month: 12, day: 31, title: "Happy New Year's Eve" },
];

export default function SpecialDayPopup() {
  const [visible, setVisible] = useState(false);
  const [matchedDay, setMatchedDay] = useState<SpecialDay | null>(null);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const foundDay = SPECIAL_DAYS.find(
      (d) => d.month === month && d.day === day
    );

    if (!foundDay) return;

    setMatchedDay(foundDay);
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && matchedDay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-10 left-1/2 z-50 -translate-x-1/2 max-w-lg rounded-xl border border-secondary/30 bg-primary/40 backdrop-blur-md px-6 py-4 shadow-xl text-center text-white text-base md:text-lg font-semibold"
        >
          {matchedDay.title}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
