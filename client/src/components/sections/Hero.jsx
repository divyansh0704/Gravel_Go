import React from 'react'
import { motion } from 'framer-motion'
import gravy3 from "../../assets/mining.png"
import ellipse from "../../assets/Ellipse.svg"
import "./hero.css"

const Hero = () => {

    return (
        <div className='hero-out'>
            <div className='hero-container'>


                <motion.div className="head"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}

                //     animate={{ rotate: 360 }}
                // transition={{ duration: 1 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.7 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 8
                        }}
                        whileHover={{ scale: 1.06, y: -4 }}

                    >GRAVEL <span>GO</span> </motion.h1>

                </motion.div>
                <motion.div className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -2 }}

                    >Let Quality  </motion.h3>

                    <motion.h3
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        id='k'>Be Delivered On <span>Time...</span></motion.h3>

                        
                </motion.div>


            </div>
            <div className="hero-right">
                <motion.img src={gravy3} width={380} alt=""
                    //  whileHover={{ rotate: 10 }}
//   transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    animate={{y: [0, -7, 0], rotate: [-2, 2, -2]}}
                    transition={{
                        
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

        </div>
    )
}

export default Hero