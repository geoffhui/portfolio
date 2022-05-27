import React from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FcOpenedFolder } from 'react-icons/fc'
import { IoIosArrowForward } from 'react-icons/io'

const FolderNavBar = ({ path }) => {
   return (  
      <div className="folder-nav-bar">
         <BsArrowLeft className="nav-back-arrow" />
         <BsArrowRight className="nav-forward-arrow" />

         <div className="nav-bar-folder-path">
            <FcOpenedFolder className="path-folder-icon hover-bg-color-gray" size="16px" />
            
            {path.map((item, index) => {
               return (
                  <React.Fragment key={ index }>
                     <IoIosArrowForward className="path-arrow hover-bg-color-gray" />
                     <p className="hover-bg-color-gray">{ item }</p>
                  </React.Fragment>
               )
            })}
         </div>

         <input className="folder-search-box" placeholder="🔎Search" />
      </div>
   );
}
 
export default FolderNavBar;