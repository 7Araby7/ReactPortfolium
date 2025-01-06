import P from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionWrapper = ({ children, variants, threshold = 0 }) => {
  const [ref, inView] = useInView({ threshold });

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} exit="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

MotionWrapper.propTypes = {
  children: P.node.isRequired,
  variants: P.object.isRequired,
  threshold: P.number,
};

export default MotionWrapper;
