import React from 'react';
import '../Notes.css';

// Importing components.
import Note from './Note';

const Notes = ({ notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited, filter, setFilter, filteredNotes }) => {

    const handleFilterNotes = (event) => setFilter(event.target.value);

    return (
        <div className='notes-container'>

            {
                amountOfNotes === 0 ?
                <div className='notes-empty'>
                    <p>Your notes will be displayed here.</p>
                </div> :
                <div className='notes-content'>
                    <div className='filter-container'>
                        <p>Filter by priority</p>
                        <select onChange={handleFilterNotes}>
                            <option value='all'>All</option>
                            <option value='low'>Low</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select>
                    </div>
                    <ul className='notes-list'>
                        {
                            filteredNotes.length !== 0 ?
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
                            : <p id='empty-filter'>You haven't added any list with {filter} priority.</p>
                        }
                    </ul>
                </div>
            }

        </div>
        
    );
};

export default Notes;