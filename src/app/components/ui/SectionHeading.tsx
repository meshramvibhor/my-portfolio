"use client";
import { motion } from "framer-motion";

export const SectionHeading = ({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) => {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-kicker mb-3">{kicker}</p>
      <h2 className="section-title mb-5">{title}</h2>
      <div className="mx-auto h-px w-32 holo-divider" />
    </motion.div>
  );
};
