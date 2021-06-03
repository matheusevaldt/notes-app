import React from 'react';
import '../Form.css';

import Notification from './Notification';

const Form = ({ notificationIsOpened, setNotificationIsOpened, setNotificationMessage, noteTitle, setNoteTitle, noteMessage, setNoteMessage, notePriority, setNotePriority, notes, setNotes, amountOfNotes, setAmountOfNotes, setFormIsOpened }) => {

    const handleNoteTitle = (event) => setNoteTitle(event.target.value);
    const handleNoteMessage = (event) => setNoteMessage(event.target.value);

    const handleSubmitForm = (event) => {

        event.preventDefault();

        if (noteTitle === '' || noteMessage === '' || notePriority === '') {
            setNotificationMessage('Fill in all fields before adding a note.');
            setNotificationIsOpened(true);
            setTimeout(() => {
                    setNotificationIsOpened(false);
                    <Notification notification={'aaaaaaaaaaa'} />
            }, 4000);
            return;
        }

        setNotes([
            ...notes, { 
                title: noteTitle, 
                message: noteMessage, 
                id: (Math.random() * 1000).toFixed(0), 
                priority: notePriority, 
                completed: false 
            }
        ]);
        // Reseting the state of the 'inputForm'.
        setNoteMessage('');
        setNoteTitle('');
        setNotePriority('');

        setAmountOfNotes(amountOfNotes + 1);
        handleCloseForm();
    };

    const handleCloseForm = () => {
        setFormIsOpened(false);
        setNoteMessage('');
        setNoteTitle('');
        setNotePriority('');
    };

    const handlePriority = (event, priority) => {
        event.preventDefault();
        setNotePriority(priority);
    };

    return (
        <div className='form-container'>
            <div className='form-header'>
                <p>Adding a new note</p>
                <button onClick={handleCloseForm}>&times;</button>
            </div>
            <form>
                <input
                    placeholder='Title'
                    type='text'
                    value={noteTitle}
                    onChange={handleNoteTitle}
                ></input>
                <textarea 
                    placeholder='Write your note here...'
                    type='text' 
                    value={noteMessage}
                    onChange={handleNoteMessage}
                    cols="30" 
                    rows="4"
                ></textarea>
                <div className='container-priority'>
                    <p>Priority</p>
                    <div>
                        <button 
                            onClick={(e) => handlePriority(e, 'low')}
                            className={`button-priority ${notePriority === 'low' ? 'priority-selected' : ''}`}
                        >LOW</button>
                        <button 
                            onClick={(e) => handlePriority(e, 'medium')}
                            className={`button-priority ${notePriority === 'medium' ? 'priority-selected' : ''}`}
                        >MEDIUM</button>
                        <button 
                            onClick={(e) => handlePriority(e, 'high')}
                            className={`button-priority ${notePriority === 'high' ? 'priority-selected' : ''}`}
                        >HIGH</button>
                    </div>
                </div>
                <button
                    type='submit'
                    onClick={handleSubmitForm}
                    className='form-submit'
                >ADD NOTE</button>
            </form>
            
        </div>
        
    );
}

export default Form;