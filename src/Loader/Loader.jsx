import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from '../Routes/Home';
import { TypeAnimation } from 'react-type-animation';
const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 1 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: 1000,
      }}
    >
        <TypeAnimation
  sequence={['WELCOME!', 50]}
  className='text-2xl md:text-5xl lg:text-7xl font-kurale font-semibold drop-shadow-lg shadow-md text-white tracking-[20px]'
  repeat={Infinity}
/>
      {/* <h1 className='text-7xl font-montserrat text-white tracking-[10px]'>LOADING</h1> */}
    </motion.div>
  );
const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div >
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Home></Home>
          </motion.div>
        )}
      </div>
    );
};

export default Loader;