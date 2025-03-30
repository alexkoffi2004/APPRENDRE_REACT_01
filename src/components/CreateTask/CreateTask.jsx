import React from 'react';
import SharedButton from '../ShareButton/SharedButton';

const CreateTask = ({props}) => {
    
    return(
        <>
            <div>
                <input type="text" placeholder="Add a new task !" onChange={(e) => {
                    props.setNewTask(e.target.value);
                } }/>
                 <SharedButton props={{name: 'Create', handelClick: props.addTask}}/>
            </div>
        </>
    )
}

export default CreateTask;