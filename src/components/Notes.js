import React, { useEffect } from 'react';
import '../Notes.css';

// Importing components.
import Note from './Note';

const Notes = ({ notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited, filter, setFilter, filteredNotes, setFilteredNotes }) => {

    const handleFilterNotes = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
            <div className='filter-container'>
                <p>Priority</p>
                <select onChange={handleFilterNotes}>
                    <option value='all'>All</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
            </div>
            <div className='notes-container'>
                <ul>
                {
                    filteredNotes.map(note => (
                        <Note 
                            note={note}
                            key={note.id} 
                            title={note.title}
                            message={note.message}
                            priority={note.priority}
                            noteCreation={note.noteCreation}
                            lastUpdated={note.lastUpdated}
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
                    ))
                }
            </ul>
            </div>
        </>
        
    );
};

export default Notes;