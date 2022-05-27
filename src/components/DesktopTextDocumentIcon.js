import React from "react";
import { AiOutlineFileText } from 'react-icons/ai';

const DesktopIcon = ({ fileName }) => {
   return (  
      <div className='desktop-icon'>
         <AiOutlineFileText className="desktop-text-document-icon" size="35px" />
         <p className="text-font-14px text-color-white">{ fileName }</p>
      </div>
   );
}

export default DesktopIcon;