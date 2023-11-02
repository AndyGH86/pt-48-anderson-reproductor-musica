import React from "react";
import { BsPlay } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineSync } from "react-icons/md";
import { FaComment } from "react-icons/fa";

function Footer() {
    return (<>
      <div className='footer__container'>
        <div className='footer__play'>
        <div>
         <span><BsPlay /> </span>
         </div>
         <div>
         <span className="badge text-secondary">50</span>
        </div>
        </div>
         <div className="footer__likes">
         <button type="button" className="btn">
         <AiFillHeart /> <span className="badge text-secondary">300</span>
        </button>
         </div>
       
         <div className="footer__reproduction">
         <button type="button" className="btn">
         <MdOutlineSync /> <span className="badge text-secondary">20</span>
        </button>
         </div>
  
         <div className="footer__comment">
         <button type="button" className="btn">
         <FaComment /> <span className="badge text-secondary">4</span>
        </button>
         </div>
      </div>   
          
        
      
    </>)
  }

  export default Footer;