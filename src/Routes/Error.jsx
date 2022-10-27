import React from 'react'
import { motion } from "framer-motion";



function Error() {
  return (
    <motion.div className='errorpage' 
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
    </motion.div>
  )
}

export default Error
