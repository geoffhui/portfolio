import React from 'react';
import { CgNotes } from 'react-icons/cg';

const TextDocumentHeader = ({ documentName }) => {
   return (  
      <div className="file-header">
         <CgNotes />
         <p>{ documentName } - Notepad</p>
      </div>
   );
}
 
export default TextDocumentHeader;