import React from 'react';
import '../Notes.css';

// Importing components.
import Note from './Note';

const Notes = ({ notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {
    return (
        <div className='notes-container'>
            <ul>
                {
                    notes.map(note => (
                        <Note 
                            note={note}
                            key={note.id} 
                            title={note.title}
                            message={note.message}
                            priority={note.priority}
                            dayOfCreation={note.date.dayOfCreation}
                            hourOfCreation={note.date.hourOfCreation}
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
    );
};

export default Notes;