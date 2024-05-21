import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="padding innerwidth flexcenter c-container">
   {/* left side */}
   <div className="flexColStart c-left">
   <span className='orangeText'>Our contact</span>
   <span className='primaryText'>Easy to Contact Us</span>
   <span className='secondaryText'>We are always ready to help by provindg quality and affordable houses that suit your taste</span>
   
   <div className="flexColStart contactModes">
  {/* first row */}
  <div className="flexStart row">
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <MdCall size={25} />
        </div>
        <div className="flexColStart detail">
          <span className='primaryText'>Call</span>
          <span className='secondaryText'>+237677684842</span>
        </div>
      </div>
      <div className="flexCenter button">
        Call Now
      </div>
    </div>


    {/* second mode*/}
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <BsFillChatDotsFill size={25} />
        </div>
        <div className="flexColStart detail">
          <span className='primaryText'>Chat</span>
          <span className='secondaryText'>+237677684842</span>
        </div>
      </div>
      <div className="flexCenter button">
        Chat Now
      </div>
    </div>

  </div>

  {/* second row */}
  <div className="flexStart row">
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <BsFillChatDotsFill size={25} />
        </div>
        <div className="flexColStart detail">
          <span className='primaryText'>Video Call</span>
          <span className='secondaryText'>+237677684842</span>
        </div>
      </div>
      <div className="flexCenter button">
        Video Call Now
      </div>
    </div>


    {/* fourth mode*/}
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          <HiChatBubbleBottomCenter size={25} />
        </div>
        <div className="flexColStart detail">
          <span className='primaryText'>Message</span>
          <span className='secondaryText'>+237677684842</span>
        </div>
      </div>
      <div className="flexCenter button">
        Message Now
      </div>
    </div>

  </div>

</div>
   
   
   
   </div>
     {/* Right side */}
     <div className="c-right">
      <div className="image-container">
    
        <img src="./public\images\img2.png" alt=""/>
      </div>
     </div>
     </div>
    </section>
  )
}

export default Contact