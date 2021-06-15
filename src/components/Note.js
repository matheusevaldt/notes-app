import React from 'react';
import '../Note.css';

const Note = ({ title, message, priority, noteCreation, lastUpdated, note, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {

    const handleDeleteNote = () => {
        setNotes(notes.filter(element => element.id !== note.id));
        setAmountOfNotes(amountOfNotes - 1);
    };

    // const handleStatusNote = () => {
    //     setNotes(notes.map(element => {
    //         if (element.id === note.id) {
    //             return {
    //                 ...element, completed: !element.completed
    //             }
    //         }
    //         return element;
    //     }));
    // };

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
            <p className='note-priority'><strong>{priority}</strong> priority</p>
            <div className='note-main'>
                <li className={`note-message ${note.completed ? 'note-completed' : ''}`}>{message}</li>
            </div>
            <div className='note-footer'>
                <button onClick={openEditNote} className='button-open-edit-note'>EDIT NOTE</button>
                <div className='note-footer-dates'>
                    <p className='note-creation'>Note created on {noteCreation}</p>
                    <p className={`last-updated ${lastUpdated !== '' ? 'display-last-updated': ''}`}>Last updated on {lastUpdated}</p>
                </div>
            </div>
            
            
            {/* <button onClick={handleStatusNote} className='button-status-note'>V</button> */}
            
            
        </div>
    );
};

export default Note;