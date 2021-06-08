import React from 'react';
import '../Notes.css';

// Importing components.
import Note from './Note';

const Notes = ({ notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened }) => {
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
                            notes={notes} 
                            setNotes={setNotes} 
                            amountOfNotes={amountOfNotes}
                            setAmountOfNotes={setAmountOfNotes}
                            setFormIsOpened={setFormIsOpened}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Notes;