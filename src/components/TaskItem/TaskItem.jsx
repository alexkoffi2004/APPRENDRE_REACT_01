import React from 'react';
import SharedButton from '../ShareButton/SharedButton';

const TaskItem = () => {
    return(
        <>
            <li>
                <input type="checkbox" name="" id="" /> Task 1
                <SharedButton props={{name: 'Delete'}}/>
                <SharedButton props={{name: 'Edit'}}/>
            </li>
        </>
    )
}

export default TaskItem