import React, { useEffect } from 'react';
import './Form.css';

// const Form = ({ setNotificationIsOpened, setNotificationMessage, noteTitle, setNoteTitle, noteMessage, setNoteMessage, notePriority, setNotePriority, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, setNoteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {
// const Form = ({ setNotificationIsOpened, setNotificationMessage, noteTitle, setNoteTitle, noteMessage, setNoteMessage, notePriority, setNotePriority, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened, noteEdited, noteIsBeingEdited, setNoteIsBeingEdited }) => {
const Form = (props) => {

    console.log(props)

    const handleNoteTitle = (event) => props.setNoteTitle(event.target.value);

    const handleNoteMessage = (event) =>  props.setNoteMessage(event.target.value);

    const handleSubmitNote = (event) => {
        event.preventDefault();
        if (props.noteTitle === '' || props.noteMessage === '' || props.notePriority === '') {
            props.setNotificationMessage('Fill in all fields before adding a note.');
            props.setNotificationIsOpened(true);
            return;
        }
        const date = new Date();
        const options = { month: 'long', day: 'numeric' };
        let hours, minutes;
        hours = date.getHours();
        minutes = date.getMinutes();
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        props.setNotes([
            ...props.notes, { 
                id: (Math.random() * 1000).toFixed(0), 
                title: props.noteTitle, 
                message: props.noteMessage, 
                priority: props.notePriority, 
                noteCreation: `${date.toLocaleDateString('en-GB', options)} at ${hours}:${minutes}`,
                lastUpdated: '',
                completed: false 
            }
        ]);
        props.setAmountOfNotes(props.amountOfNotes + 1);
        handleCloseForm();
    };

    const handleUpdateNote = (event) => {
        event.preventDefault();
        if (props.noteTitle === '' || props.noteMessage === '') {
            props.setNotificationMessage('Fill in all fields before editing a note.');
            props.setNotificationIsOpened(true);
            return;
        }
        props.setNotes(props.notes.map(note => {
            if (note.id === props.noteEdited.id) {
                const date = new Date();
                const options = { month: 'long', day: 'numeric' };
                let hours, minutes;
                hours = date.getHours();
                minutes = date.getMinutes();
                if (hours < 10) hours = `0${hours}`;
                if (minutes < 10) minutes = `0${minutes}`;
                return {
                    ...note, 
                    title: props.noteTitle, 
                    message: props.noteMessage, 
                    priority: props.notePriority, 
                    lastUpdated: `${date.toLocaleDateString('en-GB', options)} at ${hours}:${minutes}`
                }
            }
            return note;
        }));
        handleCloseForm();
    };

    const handleCloseForm = () => {
        props.setFormIsOpened(false);
        props.setNoteIsBeingEdited(false);
        props.setNotificationIsOpened(false);
        props.setNoteMessage('');
        props.setNoteTitle('');
        props.setNotePriority('');
    };

    const handlePriority = (event, priority) => {
        event.preventDefault();
        props.setNotePriority(priority);
    };

    useEffect(() => {
        if (props.noteIsBeingEdited) {
            console.log(props.noteEdited);
            props.setNoteTitle(props.noteEdited.title);
            props.setNoteMessage(props.noteEdited.message);
            props.setNotePriority(props.noteEdited.priority);
        }
    // }, [props.noteIsBeingEdited, props.noteEdited, props.setNoteTitle, props.setNoteMessage, props.setNotePriority]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.noteIsBeingEdited]);

    return (
        <div className='form-container'>
            <div className='form-visible'>
                <div className='form-header'>
                    <p>
                        { !props.noteIsBeingEdited ? 'Adding a new note' : 'Editing note'}
                    </p>
                    <button onClick={handleCloseForm}>&times;</button>
                </div>
                <form>
                    <input
                        id='input-note-title'
                        placeholder='Title'
                        type='text'
                        value={props.noteTitle}
                        onChange={handleNoteTitle}></input>
                    <textarea 
                        id='textarea-note-message'
                        placeholder='Write your note here...'
                        type='text' 
                        value={props.noteMessage}
                        onChange={handleNoteMessage}
                        cols="30" 
                        rows="4"></textarea>
                    <div className='container-priority'>
                        <p>Priority</p>
                        <div>
                            <button 
                                onClick={(e) => handlePriority(e, 'low')}
                                className={`button-priority ${props.notePriority === 'low' ? 'priority-selected' : ''}`}>LOW</button>
                            <button 
                                onClick={(e) => handlePriority(e, 'medium')}
                                className={`button-priority ${props.notePriority === 'medium' ? 'priority-selected' : ''}`}>MEDIUM</button>
                            <button 
                                onClick={(e) => handlePriority(e, 'high')}
                                className={`button-priority ${props.notePriority === 'high' ? 'priority-selected' : ''}`}>HIGH</button>
                        </div>
                    </div>
                    <button
                        type='submit'
                        onClick={!props.noteIsBeingEdited ? handleSubmitNote : handleUpdateNote}
                        className='form-submit'>{!props.noteIsBeingEdited ? 'ADD NOTE' : 'UPDATE NOTE'}
                    </button>
                </form>
            </div>
            <div className='form-invisible' onClick={handleCloseForm}></div>
        </div>
        
    );
}

export default Form;