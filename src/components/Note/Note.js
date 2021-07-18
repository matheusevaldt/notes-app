import React, { useEffect } from 'react';
import './Note.css';

const Note = ({ title, message, priority, noteCreation, lastUpdated, note, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {

    const handleDeleteNote = () => {
        setNotes(notes.filter(element => element.id !== note.id));
        setAmountOfNotes(amountOfNotes - 1);
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

    const handleExpandButton = (event) => {
        const element = event.target.parentElement.parentElement.firstChild;
        console.log(element);
        element.classList.remove('message-blur');
        element.nextSibling.firstChild.style.display = 'none'; // Expand button
        element.nextSibling.firstChild.nextSibling.style.display = 'block'; // Collapse button
    };

    const handleCollapseButton = (event) => {
        const element = event.target.parentElement.parentElement.firstChild;
        console.log(element);
        element.classList.add('message-blur');
        element.nextSibling.firstChild.style.display = 'block';
        element.nextSibling.firstChild.nextSibling.style.display = 'none';
    };

    useEffect(() => {
        const element = document.getElementById(`${note.id}`);
        console.log(message);
        console.log(`HEIGHT: ${element.clientHeight}`);
        if (element.clientHeight > 72) {
            element.classList.add('message-blur');
            element.nextSibling.classList.add('display-buttons-message');
            // Reset buttons. Show Expand and Hide Collapse
            element.nextSibling.firstChild.style.display = 'block';
            element.nextSibling.firstChild.nextSibling.style.display = 'none';
        } else {
            element.nextSibling.classList.remove('display-buttons-message');
            element.classList.remove('message-blur');
        }
    }, [message, note.id]);

    return (
        <div className='note-container'>
            <div className='note-header'>
                <h2>{title}</h2>
                <button onClick={handleDeleteNote} className='button-delete-note'>&times;</button>
            </div>
            <p className='note-priority'><strong>{priority}</strong> priority</p>
            <div className='note-main'>
                <li className='note-message' id={note.id}>
                    {message}
                </li>
                <div className='buttons-message'>
                    <button onClick={(e) => handleExpandButton(e)} className='button-expand'>EXPAND NOTE</button>
                    <button onClick={(e) => handleCollapseButton(e)} className='button-collapse'>COLLAPSE NOTE</button>
                </div>
            </div>
            <div className='note-footer'>
                <button onClick={openEditNote} className='button-open-edit-note'>EDIT NOTE</button>
                <div className='note-footer-dates'>
                    <p className='note-creation'>Note created on {noteCreation}</p>
                    <p className={`last-updated ${lastUpdated !== '' ? 'display-last-updated': ''}`}>Last updated on {lastUpdated}</p>
                </div>
            </div>
        </div>
    );
};

export default Note;