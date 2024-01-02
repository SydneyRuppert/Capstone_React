import Background from '../assets/images/plants_bg.jpeg'
import { motion } from 'framer-motion';


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <motion.div className='flex place-items-center h-screen'
          initial={{ y: -250}}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
          <h1 className='p-5 bg-white bg-opacity-50 text-black rounded'>Welcome To The Plant Inventory</h1>
        </motion.div>
    </div>
  )
}

export default Home