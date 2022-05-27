import React from "react";
import { FaChrome } from 'react-icons/fa';

const FileGoogleChrome = ({ fileName }) => {
   return (  
      <div className="file-header">
         <FaChrome color="green" size="16px" />
         <p>{ fileName }</p>
      </div>
   );
}
 
export default FileGoogleChrome;