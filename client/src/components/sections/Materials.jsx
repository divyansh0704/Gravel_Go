import React from 'react'
import "./materials.css"
import bajri from "../../assets/bajri.jpg"
import gatka from "../../assets/gatkaa.webp"
import sand from "../../assets/sand1.jpg"

const materials = [
  {
    id: 1,
    name: "Gatka(Crushed Stone)",
    pricePerFoot: 28,
    deliveryPrice: "Depends on distance (₹500–1k)",
    uses:"concrete, flooring base",
    sizeAndShape:"1-2 Inches, not round, angular shape",
    description: "Used for foundation and road base work.",
    image: gatka,
    whatsappText: "I want Gatka. Please share details."
  },
  {
    id: 2,
    name: "Bajri(Gravel)",
    pricePerFoot: 32,
    uses:"concrete, flooring base",
    sizeAndShape:"1-2 Inches,not round,angular shape",
    deliveryPrice: "Depends on distance (₹500–1k)",
    description: "High quality aggregate for construction.",
    image: bajri,
    whatsappText: "I want Bajri. Please share details."
  },
  {
    id: 3,
    name: "Reth(Sand)",
    pricePerFoot: 22,
    deliveryPrice: "Depends on distance (₹500–1k)",
    uses:"concrete, flooring base",
    sizeAndShape:"1-2 Inches,not round,angular shape",
    description: "Fine sand used for plastering and concrete.",
    image: sand,
    whatsappText: "I want Reth. Please share details."
  }
];
const Materials = () => {
  return (
    <div className='mat-container'>
        <h2>Materials We Provide</h2>

    <div className="card-container">
        {materials.map(item=>(
            <div key={item.id} className='each-card'>
                <div className="img"><img src={item.image} alt="" /></div>
                <div className="card-content">
                    <div className="whatnuse">
                        <h2>{item.name}</h2>
                    <h5>Use for {item.uses} </h5>
                    </div>
                    <div className="card-about">
                        <h4>Price per Foot: <span className="diff">₹{item.pricePerFoot}</span>  </h4>
                        <h4>Delivery: <span className="diff">{item.deliveryPrice}</span></h4>
                        <h4>Size and Shape: <span className="diff">{item.sizeAndShape}</span> </h4>
                        <button>Chat for Order</button>

                    </div>
                    
                </div>
                
            </div>
        ))}
    </div>
    </div>
  )
}

export default Materials