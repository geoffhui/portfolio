import React from "react";
import { AiOutlineFileText } from 'react-icons/ai';

const FileTextDocument = ({ fileName }) => {
   return (  
   <div className="file-header">
      <AiOutlineFileText size="16px" />
      <p>{ fileName }</p>
   </div>
   );
}
 
export default FileTextDocument;