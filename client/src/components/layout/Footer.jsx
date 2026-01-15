import React from 'react'
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./footer.css"

const Footer = () => {
  return (
    <motion.div className='footer-container'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}

      >Contact & Services</motion.h2>
      <h4>Whether it’s a small site or a large project, Gravel Go is here with quality materials, fair pricing, and reliable delivery.</h4>
      <h4 className="service-area">
        Currently serving <strong>District Panchkula</strong> and <strong>District Ambala</strong>, with a clear vision to expand our
        services across <strong>Haryana</strong>.
      </h4>
      <div className="icons">
        <div className="icon"><motion.a whileHover={{scale:1.06,y:-2}} transition={{type:"spring",stiffness:400}} href="mailto:gravelgo.supply@gmail.com"><MdEmail fontSize={34} />gravelgo.supply@gmail.com</motion.a> </div>
        <div className="icon"><motion.a whileHover={{scale:1.06,y:-2}} transition={{type:"spring",stiffness:400}} href="https://instagram.com/gravelgo_official" target="_blank"><FaInstagram fontSize={34} />gravelgo_official</motion.a></div>
        <div className="icon"><motion.a whileHover={{scale:1.06,y:-2}} transition={{type:"spring",stiffness:400}} href="https://wa.me/918295583149"
          target="_blank"><FaWhatsapp fontSize={34} />8295583149</motion.a></div>
      </div>
      <h5 id='lit'>© Gravel Go — Delivering Trust & Quality</h5>
    </motion.div>

  )
}

export default Footer