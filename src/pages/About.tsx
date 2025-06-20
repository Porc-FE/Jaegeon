import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <div className="mx-10 bg-background lg:mx-20">
        <motion.div
          className="h-20 w-20 bg-amber-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
}
