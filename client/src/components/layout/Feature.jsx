import React from 'react'
import {motion} from "framer-motion"
import wall from "../../assets/wall.png"
import money from "../../assets/money.png"
import truck from "../../assets/transport.png"
import trust from "../../assets/trust.png"
import "./feature.css"


export const features = [
  {
    id: 1,
    title: "Quality Construction Materials",
    desc:
      "Carefully sourced materials suitable for all types of construction work.",
    icon: wall
  },
  {
    id: 2,
    title: "Transparent Pricing",
    desc:
      "Clear pricing per foot with no hidden charges.",
    icon: money
  },
  {
    id: 3,
    title: "Reliable & Timely Delivery",
    desc:
      "On-time delivery based on location and order size.",
    icon: truck
  },
  {
    id: 4,
    title: "Trust & Long-Term Support",
    desc:
      "We build long-term relationships with our customers.",
    icon: trust
  }
];


const Feature = () => {
  return (
    <div className='feature-grid'>
      {features.map((item, index) => (
        <motion.div className="feature-card" key={index}
          initial={{ opacity: 0, y: 40 }}
          whileHover={{scale:1.04,y:-6}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          transition={{
            // type: "spring",
            // stiffness: 300,
            duration:0.6
          }}

        >
          <div className="icon"> <img width={100} src={item.icon} alt="" /></div>
          <div className='card-content'>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Feature