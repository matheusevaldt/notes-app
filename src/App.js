import React, { useEffect, useState } from 'react';
import './App.css';

// Importing components.
import Sidebar from './components/Sidebar/Sidebar';
import DesktopFormButton from './components/DesktopFormButton/DesktopFormButton';
import MobileFormButton from './components/MobileFormButton/MobileFormButton';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Notification from './components/Notification/Notification';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileMenu from './components/MobileMenu/MobileMenu';

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);



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

  const updateWindowWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  return (

    <div className='App'>

      <p>{windowWidth}</p>

      <MobileHeader setMobileMenuIsOpened={setMobileMenuIsOpened} />

      { mobileMenuIsOpened && <MobileMenu setMobileMenuIsOpened={setMobileMenuIsOpened} amountOfNotes={amountOfNotes} /> }
      
      <div className='sidebar-wrapper'>
        <Sidebar amountOfNotes={amountOfNotes} />
        <DesktopFormButton setFormIsOpened={setFormIsOpened} />
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

      { windowWidth < 1020 && !formIsOpened ? <MobileFormButton setFormIsOpened={setFormIsOpened} /> : '' }

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
          // setNoteEdited={setNoteEdited}
          noteIsBeingEdited={noteIsBeingEdited}
          setNoteIsBeingEdited={setNoteIsBeingEdited}
        />
      }

    </div>

  );

}

export default App;
