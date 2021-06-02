import React from 'react';

// Importing components.
import Note from './Note';

const Notes = ({ notes, setNotes, amountOfNotes, setAmountOfNotes }) => {
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
                            notes={notes} 
                            setNotes={setNotes} 
                            amountOfNotes={amountOfNotes}
                            setAmountOfNotes={setAmountOfNotes}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Notes;