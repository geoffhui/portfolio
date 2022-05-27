import React from "react";

const TextDocumentDescription = ({ description }) => {
   return (  
      <div className="text-document-description-container">
         <p>{ description }</p>
      </div>
   );
}

export default TextDocumentDescription;