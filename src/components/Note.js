import React from 'react';
import '../Note.css';

const Note = ({ title, message, priority, dayOfCreation, hourOfCreation, lastUpdated, note, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {

    const handleDeleteNote = () => {
        setNotes(notes.filter(element => element.id !== note.id));
        setAmountOfNotes(amountOfNotes - 1);
    };

    const handleStatusNote = () => {
        setNotes(notes.map(element => {
            if (element.id === note.id) {
                return {
                    ...element, completed: !element.completed
                }
            }
            return element;
        }));
    };

    const openEditNote = () => {
        console.log('A NOTE IS BEING EDITED.');
        setNoteIsBeingEdited(true);
        setNoteEdited({
            id: note.id,
            title: title,
            message: message,
            priority: priority
        });
        setFormIsOpened(true);
    }

    return (
        <div className='note-container' >
            <h2>{title}</h2>
            <li className={`note-message ${note.completed ? 'note-completed' : ''}`}>{message}</li>
            <p>{priority}</p>
            <p>DAY OF CREATION: {dayOfCreation}</p>
            <p>HOUR OF CREATION: {hourOfCreation}</p>
            <p>LAST UPDATED: {lastUpdated}</p>
            <button onClick={handleStatusNote} className='button-status-note'>V</button>
            <button onClick={handleDeleteNote} className='button-delete-note'>DELETE</button>
            <button onClick={openEditNote} className='button-open-edit-note'>EDIT</button>
        </div>
    );
};

export default Note;