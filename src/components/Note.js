import React from 'react';
import '../Note.css';

const Note = ({ title, message, priority, noteCreation, lastUpdated, note, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {

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
            <div className='note-header'>
                <h2>{title}</h2>
                <button onClick={handleDeleteNote} className='button-delete-note'>&times;</button>
            </div>
            <div className='note-main'>
                <li className={`note-message ${note.completed ? 'note-completed' : ''}`}>{message}</li>
            </div>
            <p id='note-priority'>NOTE PRIORITY – <strong>{priority}</strong></p>
            <div className='note-footer'>
                <div>

                </div>
                <p>note was created on {noteCreation}</p>
                <p className={`last-updated ${lastUpdated !== '' ? 'display-last-updated': ''}`}>LAST UPDATED: {lastUpdated}</p>
            </div>
            
            
            <button onClick={handleStatusNote} className='button-status-note'>V</button>
            
            <button onClick={openEditNote} className='button-open-edit-note'>EDIT</button>
        </div>
    );
};

export default Note;