import React from "react";
import { FcFolder } from 'react-icons/fc';

const DesktopFolderIcon = ({ folderName }) => {
   return (  
      <div className="desktop-icon">
         <FcFolder className="desktop-text-document-icon" size="35px" />
         <p className="text-font-14px text-color-white">{ folderName }</p>
      </div>
   );
}
 
export default DesktopFolderIcon;