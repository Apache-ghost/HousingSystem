import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="padding innerwidth flexcenter c-container">
   {/* left side */}
   <div className="flexColStart c-left">
   <span className='orangeText'>Our contact</span>
   <span className='primaryText'>Easy to Contact Us</span>
   <span className='secondaryText'>We are always ready to help by provindg quality and affordable houses that suit your taste</span>
   </div>
     {/* Right side */}
     <div className="c-right">
      <div className="image-container">
    
        <img src="./public\images\hero-image.png" alt=""/>
      </div>
     </div>
     </div>
    </section>
  )
}

export default Contact