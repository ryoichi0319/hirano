import { motion } from 'framer-motion';

// const containerVariants = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { y: 50, opacity: 1 },
};

const MotionWrapperWithContainerAndItem = ({
  children,
  inView,
  
}: {
  children: React.ReactNode;
  inView: boolean;
  itemVariants: object
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
      
    >
        {children}
    </motion.div>
  );
};

export default MotionWrapperWithContainerAndItem;
