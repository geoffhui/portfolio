import React from 'react';
import TextDocumentDescription from '../components/TextDocumentDescription';
import TextDocumentHeader from '../components/TextDocumentHeader';
import HeaderIcons from '../components/HeaderIcons';
import TextDocumentOptions from '../components/TextDocumentOptions';

const TextDocumentUI = ({ documentName, onClose, context, description }) => {
   return (
      <>
         <div className="text-document-container">
            <TextDocumentHeader documentName={ documentName } />
            <HeaderIcons onClose={ onClose } context={ context }/>
            <TextDocumentOptions />
         </div>

         <TextDocumentDescription description={ description }/>
      </>
   );
}
 
export default TextDocumentUI;