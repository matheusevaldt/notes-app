import React, { useState } from 'react';
import './App.css';
import './global.css';
// Importing components.
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Notes from './components/Notes';
import Footer from './components/Footer';

function App() {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  const [notePriority, setNotePriority] = useState('');
  const [notes, setNotes] = useState([]);
  const [amountOfNotes, setAmountOfNotes] = useState(0);
  const [formIsOpened, setFormIsOpened] = useState(false);

  return (
    <>
      <Sidebar amountOfNotes={amountOfNotes} />
      {
        formIsOpened && 
        <Form 
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
        />
      }
      <Notes 
        notes={notes} 
        setNotes={setNotes} 
        amountOfNotes={amountOfNotes} 
        setAmountOfNotes={setAmountOfNotes} 
      />
      <Footer formIsOpened={formIsOpened} setFormIsOpened={setFormIsOpened} />
    </>
  );

}

export default App;
