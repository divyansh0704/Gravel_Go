import React from 'react'
import "./materials.css"
import bajri from "../../assets/bajri.jpg"
import gatka from "../../assets/gatkaa.webp"
import sand from "../../assets/sand1.jpg"
import { motion } from "framer-motion"

const materials = [
  {
    id: 1,
    name: "Gatka(Crushed Stone)",
    pricePerFoot: 28,
    deliveryPrice: "₹500–1k",
    uses: "concrete, flooring base",
    sizeAndShape: "1-2 Inches, not round, angular shape",
    description: "Used for foundation and road base work.",
    image: gatka,
    whatsappText: 'Hello Gravel Go I want Gatka. Please share details.'
  },
  {
    id: 2,
    name: "Bajri(Gravel)",
    pricePerFoot: 32,
    uses: "concrete, flooring base",
    sizeAndShape: "1-2 Inches,not round,angular shape",
    deliveryPrice: "₹500–1k",
    description: "High quality aggregate for construction.",
    image: bajri,
    whatsappText: "Hello Gravel Go I want Bajri. Please share details."
  },
  {
    id: 3,
    name: "Reth(Sand)",
    pricePerFoot: 22,
    deliveryPrice: "₹500–1k",
    uses: "concrete, flooring base",
    sizeAndShape: "1-2 Inches,not round,angular shape",
    description: "Fine sand used for plastering and concrete.",
    image: sand,
    whatsappText: "Hello Gravel Go I want Reth. Please share details."
  }
];
const Materials = () => {
  return (
    <motion.div className='mat-container'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >Materials We Provide</motion.h2>

      <div className="card-container">
        {materials.map(item => (
          <motion.div key={item.id} className='each-card'
            whileHover={{ scale: 1.01, y: -1 }}
            transition={{
              // type:"spring",
              // stiffness:"300"
              duration: 0.4
            }}
          >
            <div className="img"><img src={item.image} alt="" /></div>
            <div className="card-content">
              <div className="whatnuse">
                <h2>{item.name}</h2>
                <h5>Use for {item.uses} </h5>
              </div>
              <div className="card-about">
                <h4><div className='dl'>Price per Foot:</div> <div className="diff">₹{item.pricePerFoot}</div>  </h4>
                <h4><div className='dl'>Delivery:</div> <div className="diff">{item.deliveryPrice}</div></h4>
                <h4><div className='dl'>Size and Shape:</div> <div className="diff">{item.sizeAndShape}</div> </h4>
                <motion.button onClick={() =>
                  window.open(
                    `https://wa.me/918295583149?text=${item.whatsappText}`,
                    "_blank"
                  )
                }
                  // whileHover={{ scale: 1.06 }}
                  // transition={{
                  //   type: "spring",
                  //   stiffness: "200"
                  // }}
                >Chat for Order</motion.button>

              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Materials