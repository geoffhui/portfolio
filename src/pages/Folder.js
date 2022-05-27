import React from "react";
import FolderDataContainer from "../components/FolderDataContainer";
import FolderHeader from "../components/FolderHeader";
import FolderNavBar from "../components/FolderNavBar";
import FolderOptions from "../components/FolderOptions";
import HeaderIcons from "../components/HeaderIcons";

const Folder = ({ folderName, onClose, context, chrome, text, path }) => {
   return (  
      <div className='folder-container text-color-white folder-position'>
         <FolderHeader folderName={ folderName } />
         <HeaderIcons onClose={ onClose } context={ context } />
         <FolderOptions />
         <FolderNavBar path={ path }/>
         <FolderDataContainer
            folderName={folderName}
            chrome={chrome}
            text={text}
         />
      </div>
   );
}
 
export default Folder;