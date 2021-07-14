import React, { useEffect, useState } from 'react';
import './App.css';

// Importing components.
import Sidebar from './components/Sidebar/Sidebar';
import DesktopFormButton from './components/DesktopFormButton/DesktopFormButton';
import MobileFormButton from './components/MobileFormButton/MobileFormButton';
import Form from './components/Form';
import Notes from './components/Notes';
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
  const [filter, setFilter] = useState('all');
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleDisplayNotes = () => {
    switch (filter) {
      case 'low':
        setFilteredNotes(notes.filter(note => note.priority === 'low'));
        break;
      case 'medium':
        setFilteredNotes(notes.filter(note => note.priority === 'medium'));
        break;
      case 'high':
        setFilteredNotes(notes.filter(note => note.priority === 'high'));
        break;
      default:
        setFilteredNotes(notes);
        break;
    }
  };

  useEffect(() => {
    handleDisplayNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes, filter]);

  return (
    <div className='App'>

      <div className='sidebar-wrapper'>
        <Sidebar amountOfNotes={amountOfNotes} />
        { window.innerWidth >= 1020 ? <DesktopFormButton setFormIsOpened={setFormIsOpened} /> : '' }
      </div>

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
        filter={filter}
        setFilter={setFilter}
        filteredNotes={filteredNotes}
      />

      { window.innerWidth < 1019 && !formIsOpened ? <MobileFormButton setFormIsOpened={setFormIsOpened} /> : '' }

      {
        notificationIsOpened &&
        <Notification 
          notificationMessage={notificationMessage} 
          setNotificationIsOpened={setNotificationIsOpened} />
      }

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


    </div>
  );

}

export default App;
