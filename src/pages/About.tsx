import Background from '../assets/images/plants_bg.jpeg'
import { motion } from 'framer-motion';

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <motion.div className='flex place-items-center h-screen'
          initial={{ y: -250}}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
          <h1 className='p-5 bg-white bg-opacity-50 text-black rounded'>This Greenventory is meant to help you keep track of the plants in yoyur personal collection. From houseplants to your small business we want to help you 
          keep track of your green friends and what you know about them.</h1>
        </motion.div>
    </div>
  )
}

export default About