import { motion } from 'framer-motion';

export default function FadeWrapper({children}: {children: React.ReactNode}){
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeInOut"
        }
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
