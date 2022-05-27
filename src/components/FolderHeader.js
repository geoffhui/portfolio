import React from "react";
import { FcOpenedFolder } from 'react-icons/fc';

const FolderHeader = ({ folderName }) => {
   return (  
      <div className="file-header">
         <FcOpenedFolder />
         <p>{ folderName }</p>
      </div>
   );
}

export default FolderHeader;