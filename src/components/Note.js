import React from 'react';

const Note = ({ title, message, note, notes, setNotes, amountOfNotes, setAmountOfNotes }) => {

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
        }))
    };

    const openEditNote = () => {
        console.log('OPEN EDIT NOTE');
    }

    return (
        <div className='note-container' >
            <h2>{title}</h2>
            <li className={`note-message ${note.completed ? 'note-completed' : ''}`}>{message}</li>
            <button onClick={handleStatusNote} className='button-status-note'>V</button>
            <button onClick={handleDeleteNote} className='button-delete-note'>DELETE</button>
            <button onClick={openEditNote} className='button-open-edit-note'>EDIT</button>
        </div>
    );
};

export default Note;