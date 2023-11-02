import React from "react";
import { RiSoundcloudFill } from "react-icons/ri";
import { FiMenu} from "react-icons/fi";

function Navbar() {
  return (<>
    <div className='navbar__container'>
      <div className="navbar-img">
      <RiSoundcloudFill />
      </div>
      <div className='navbar-menu'>  
      <FiMenu style={{color:'#c04b14', fontSize:'20px'}} />
      </div>
    </div>
  </>)
}

export default Navbar;