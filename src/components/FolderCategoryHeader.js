import React from "react";

const FolderCategoryHeader = () => {
   return (  
      <div className="sorting-headers">
         <p className="folder-header-name">Name</p>            
         <p className="folder-header-date">Date Modified</p>
         <p className="folder-header-type">Type</p>
         <p className="folder-header-size">Size</p>
      </div>
   );
}
 
export default FolderCategoryHeader;