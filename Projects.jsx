import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Project.css';
import './index.css';
import data from './According.jsx';
import { useState } from 'react';
const Projects = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
        <div class="Image-Container">
         <img src="/public/images/Icon.png" alt=''/>
        </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span><span className="primaryText">Value We Give to You</span>
          <span className="primaryText">We always ready to help by providing the best services for you.<br/>

          </span>


          <Accordion
          allowMultipleExpanded={false}
          preExpanded= {[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null)
                return(
                  <AccordionItem className={`accordionItem $ {className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({expanded}) => expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                        }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.Heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }

          </Accordion>
        </div>

      </div>

    </section>
  )
}

export default Projects