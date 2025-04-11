import { motion } from "framer-motion";
import ls from "../assets/ls.png"

function TransitionPage() {
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex justify-center items-center z-[999] fixed top-0 left-0  bg-losoRed text-white font-light text-xl font-gothic "
    >
<motion.img
  src={ls}
  alt="Logo"
  draggable={false}
  className="w-[150px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px]"
  transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
/>

    </motion.div>
  );
}

export default TransitionPage;
