import React from "react";
import { AiOutlineClose, AiOutlineMinus } from 'react-icons/ai';
import { VscChromeMaximize } from 'react-icons/vsc';

const HeaderIcons = ({ onClose, context }) => {
   return (  
      <div className="header-icons">
         <button onClick={() => onClose(context)}>
            <AiOutlineMinus className='minus-icon' />
         </button>

         <VscChromeMaximize className='maximize-icon' />

         <button onClick={() => onClose(context)}>
            <AiOutlineClose className='close-icon' />
         </button>
      </div>
   );
}
 
export default HeaderIcons;