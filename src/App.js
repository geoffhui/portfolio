import React, { useState } from 'react';
import './App.css';
import DesktopFolderIcon from './components/DesktopFolderIcon';
import DesktopTextDocumentIcon from './components/DesktopTextDocumentIcon';
import Folder from './pages/Folder';
import TextDocumentUI from './pages/TextDocumentUI'
import { projectData, taskTrackerPath, eatsafePath, stompTheWorldPath, reactjsOnlineStorePath, aboutMeDescription } from "./functions/data";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [toggleTextDocument, setToggleTextDocument] = useState(false)
  const [toggleTaskTracker, setToggleTaskTracker] = useState(false)
  const [toggleEatsafe, setToggleEatsafe] = useState(false)
  const [toggleStompTheWorld, setToggleStompTheWorld] = useState(false)
  const [toggleReactJSOnlineStore, setToggleReactJSOnlineStore] = useState(false)

  // PARAM fileToggle: a function that sets the state of a specific data
  const handleClick = (e, fileToggle) => {
    switch (e.detail) {
      case 2:
        fileToggle(true)
        break
    }
  }

  const onClose = (file) => {
    switch (file) {
      case 'about me':
        setToggleTextDocument(false)
        break
      case 'task-tracker':
        setToggleTaskTracker(false)
        break
      case 'eatsafe':
        setToggleEatsafe(false)
        break
      case 'stomp-the-world':
        setToggleStompTheWorld(false)
        break
      case 'reactjs-online-store':
        setToggleReactJSOnlineStore(false)
        break
    }
  }

  return (
    <div className="App">
      <div className='about-me-file-position' onClick={(e) => handleClick(e, setToggleTextDocument)}>
        <DesktopTextDocumentIcon fileName="About Me" />
      </div>

      <div className='task-tracker-folder-position' onClick={(e) => handleClick(e, setToggleTaskTracker)}>
        <DesktopFolderIcon folderName="Task Tracker" />
      </div>

      <div className='eatsafe-folder-position' onClick={(e) => handleClick(e, setToggleEatsafe)}>
        <DesktopFolderIcon folderName="Eatsafe" />
      </div>

      <div className='stomp-the-world-folder-position' onClick={(e) => handleClick(e, setToggleStompTheWorld)}>
        <DesktopFolderIcon folderName="Stomp The World" />
      </div>
      
      <div className='reactjs-online-store-folder-position' onClick={(e) => handleClick(e, setToggleReactJSOnlineStore)}>
        <DesktopFolderIcon folderName="ReactJS Online Store" />
      </div>



      <a href="https://www.linkedin.com/in/geoff-hui/" target="_blank" className='text-decoration-none'>
        <div className="desktop-icon linkedin-icon">
          <FaLinkedin size="36px" color="1137FF" />
          <p className='text-color-white'>Linkedin</p>
        </div>
      </a>

      <a href="https://github.com/geoffhui" target="_blank" className='text-decoration-none'>
        <div className="desktop-icon github-icon" href="https://github.com/geoffhui">
          <FaGithub size="36px" color="white"/>
          <p className='text-color-white'>Github</p>
        </div>
      </a>
      


      {toggleTextDocument ? 
        <TextDocumentUI 
          documentName="About Me" 
          onClose={onClose} 
          context="about me" 
          description={ aboutMeDescription }
        />
        : null
      }

      {toggleTaskTracker ?
        <Folder 
          folderName="Task Tracker" 
          onClose={onClose}
          context="task-tracker"
          chrome={projectData["task-tracker"]["chrome"]}
          path={taskTrackerPath}
        />
        : null
      }

      {toggleEatsafe ?
        <Folder 
          folderName="Eatsafe" 
          onClose={onClose}
          context="eatsafe"
          chrome={projectData["eatsafe"]["chrome"]}
          path={eatsafePath}
        />
        : null
      }

      {toggleStompTheWorld ?
        <Folder 
          folderName="Stomp The World" 
          onClose={onClose}
          context="stomp-the-world"
          chrome={projectData["stomp-the-world"]["chrome"]}
          path={stompTheWorldPath}
        />
        : null
      }

      {toggleReactJSOnlineStore ?
        <Folder
          folderName="ReactJS Online Store"
          onClose={onClose}
          context="reactjs-online-store"
          chrome={projectData["reactjs-online-store"]["chrome"]}
          path={reactjsOnlineStorePath}
        /> 
        : null
      }
    </div>
  );
}

export default App;
