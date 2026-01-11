import React from 'react'
import "./what.css"
import { motion } from 'framer-motion'
import Feature from '../layout/Feature'

const Whatwedo = () => {
  return (
    <motion.div className='what-container'
    initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6}}
    >
        <motion.h2
        initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.7}}
        >We Deliver Trust and Quality.|</motion.h2>
        <p>At Gravel Go, we supply high-quality construction materials including Gatka, Bajri, Reth, PSSI, Mitti, and Pathar.
We don’t just deliver materials — we deliver trust, transparency, and quality with every order.</p>
{/* <Feature/> */}
    </motion.div>
    
  )
}

export default Whatwedo