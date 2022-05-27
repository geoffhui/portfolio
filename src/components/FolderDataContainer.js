import React, { useEffect, useState } from "react";
import FileGoogleChrome from "./FileGoogleChrome";
import FolderCategoryHeader from "./FolderCategoryHeader";

const FolderDataContainer = ({ folderName, chrome }) => {
   const [url, setUrl] = useState("")

   useEffect(() => {
      if (folderName === "Stomp The World") {
         setUrl("https://github.com/geoffhui/stomptheworld")
      }

      if (folderName === "Eatsafe") {
         setUrl("https://github.com/geoffhui/eatsafe")
      }

      if (folderName === "Task Tracker") {
         setUrl("https://github.com/geoffhui/task-tracker")
      }

      if (folderName === "Hangman") {
         setUrl("https://github.com/geoffhui/hangman")
      }

      if (folderName === "Chat App") {
         setUrl("https://github.com/geoffhui/chatapp")
      }
   }, [folderName])

   return (  
      <div className="folder-data-container">
         <FolderCategoryHeader />

         <a href={url} target="_blank" className="text-decoration-none cursor-default">
            <div className='project-name cursor-default'>
               <div className="file-name">
                  <FileGoogleChrome fileName={chrome.name}/>
               </div>
               <p className="file-date">{chrome.date}</p>
               <p className="file-type">{chrome.type}</p>
               <p>{chrome.size}</p>
            </div>
         </a>
      </div>
   );
}
 
export default FolderDataContainer;