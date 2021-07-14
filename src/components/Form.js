import React, { useEffect } from 'react';
import '../Form.css';

const Form = ({ setNotificationIsOpened, setNotificationMessage, noteTitle, setNoteTitle, noteMessage, setNoteMessage, notePriority, setNotePriority, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {

    const handleNoteTitle = (event) => setNoteTitle(event.target.value);
    const handleNoteMessage = (event) =>  setNoteMessage(event.target.value);

    const handleSubmitNote = (event) => {
        event.preventDefault();
        if (noteTitle === '' || noteMessage === '' || notePriority === '') {
            setNotificationMessage('Fill in all fields before adding a note.');
            setNotificationIsOpened(true);
            return;
        }
        const date = new Date();
        const options = { month: 'long', day: 'numeric' };
        let hours, minutes;
        hours = date.getHours();
        minutes = date.getMinutes();
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        setNotes([
            ...notes, { 
                id: (Math.random() * 1000).toFixed(0), 
                title: noteTitle, 
                message: noteMessage, 
                priority: notePriority, 
                noteCreation: `${date.toLocaleDateString('en-GB', options)} at ${hours}:${minutes}`,
                lastUpdated: '',
                completed: false 
            }
        ]);
        setAmountOfNotes(amountOfNotes + 1);
        handleCloseForm();
    };

    const handleUpdateNote = (event) => {
        event.preventDefault();
        if (noteTitle === '' || noteMessage === '') {
            setNotificationMessage('Fill in all fields before adding a note.');
            setNotificationIsOpened(true);
            return;
        }
        setNotes(notes.map(note => {
            if (note.id === noteEdited.id) {
                const date = new Date();
                const options = { month: 'long', day: 'numeric' };
                let hours, minutes;
                hours = date.getHours();
                minutes = date.getMinutes();
                if (hours < 10) hours = `0${hours}`;
                if (minutes < 10) minutes = `0${minutes}`;
                return {
                    ...note, 
                    title: noteTitle, 
                    message: noteMessage, 
                    priority: notePriority, 
                    lastUpdated: `${date.toLocaleDateString('en-GB', options)} at ${hours}:${minutes}`
                }
            }
            return note;
        }));
        handleCloseForm();
    };

    const handleCloseForm = () => {
        setFormIsOpened(false);
        setNoteIsBeingEdited(false);
        setNotificationIsOpened(false);
        setNoteMessage('');
        setNoteTitle('');
        setNotePriority('');
    };

    const handlePriority = (event, priority) => {
        event.preventDefault();
        setNotePriority(priority);
    };

    useEffect(() => {
        if (noteIsBeingEdited) {
            console.log(noteEdited);
            setNoteTitle(noteEdited.title);
            setNoteMessage(noteEdited.message);
            setNotePriority(noteEdited.priority);
        }
    }, [noteIsBeingEdited, noteEdited, setNoteTitle, setNoteMessage, setNotePriority]);

    return (
        <div className='form-container'>
            <div className='form-visible'>
                <div className='form-header'>
                    <p>
                        { !noteIsBeingEdited ? 'Adding a new note' : 'Editing note'}
                    </p>
                    <button onClick={handleCloseForm}>&times;</button>
                </div>
                <form>
                    <input
                        id='input-note-title'
                        placeholder='Title'
                        type='text'
                        value={noteTitle}
                        onChange={handleNoteTitle}></input>
                    <textarea 
                        id='textarea-note-message'
                        placeholder='Write your note here...'
                        type='text' 
                        value={noteMessage}
                        onChange={handleNoteMessage}
                        cols="30" 
                        rows="4"></textarea>
                    <div className='container-priority'>
                        <p>Priority</p>
                        <div>
                            <button 
                                onClick={(e) => handlePriority(e, 'low')}
                                className={`button-priority ${notePriority === 'low' ? 'priority-selected' : ''}`}>LOW</button>
                            <button 
                                onClick={(e) => handlePriority(e, 'medium')}
                                className={`button-priority ${notePriority === 'medium' ? 'priority-selected' : ''}`}>MEDIUM</button>
                            <button 
                                onClick={(e) => handlePriority(e, 'high')}
                                className={`button-priority ${notePriority === 'high' ? 'priority-selected' : ''}`}>HIGH</button>
                        </div>
                    </div>
                    <button
                        type='submit'
                        onClick={!noteIsBeingEdited ? handleSubmitNote : handleUpdateNote}
                        className='form-submit'>{!noteIsBeingEdited ? 'ADD NOTE' : 'UPDATE NOTE'}
                    </button>
                </form>
            </div>
            <div className='form-invisible' onClick={handleCloseForm}></div>
        </div>
        
    );
}

export default Form;