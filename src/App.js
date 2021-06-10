import React, { useState } from 'react';
import './App.css';
import './global.css';

// Importing components.
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {

  const [notificationIsOpened, setNotificationIsOpened] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  const [notePriority, setNotePriority] = useState('');
  const [notes, setNotes] = useState([]);
  const [amountOfNotes, setAmountOfNotes] = useState(0);
  const [formIsOpened, setFormIsOpened] = useState(false);
  const [noteEdited, setNoteEdited] = useState({});
  const [noteIsBeingEdited, setNoteIsBeingEdited] = useState(false);

  return (
    <>
      {
        notificationIsOpened &&
        <Notification 
          notificationMessage={notificationMessage} 
          setNotificationIsOpened={setNotificationIsOpened} />
      }
      <Sidebar amountOfNotes={amountOfNotes} />
      {
        formIsOpened && 
        <Form 
          setNotificationIsOpened={setNotificationIsOpened}
          setNotificationMessage={setNotificationMessage}
          noteTitle={noteTitle}
          setNoteTitle={setNoteTitle}
          noteMessage={noteMessage}
          setNoteMessage={setNoteMessage}
          notePriority={notePriority}
          setNotePriority={setNotePriority}
          notes={notes} 
          setNotes={setNotes} 
          amountOfNotes={amountOfNotes}
          setAmountOfNotes={setAmountOfNotes}
          setFormIsOpened={setFormIsOpened} 
          noteEdited={noteEdited}
          setNoteEdited={setNoteEdited}
          noteIsBeingEdited={noteIsBeingEdited}
          setNoteIsBeingEdited={setNoteIsBeingEdited}
        />
      }
      {
        amountOfNotes > 0 &&
        <Notes 
          notes={notes} 
          setNotes={setNotes} 
          amountOfNotes={amountOfNotes} 
          setAmountOfNotes={setAmountOfNotes} 
          setFormIsOpened={setFormIsOpened} 
          noteEdited={noteEdited}
          setNoteEdited={setNoteEdited}
          noteIsBeingEdited={noteIsBeingEdited}
          setNoteIsBeingEdited={setNoteIsBeingEdited}
        />
      }
      <Footer 
        formIsOpened={formIsOpened} 
        setFormIsOpened={setFormIsOpened} />
    </>
  );

}

export default App;
