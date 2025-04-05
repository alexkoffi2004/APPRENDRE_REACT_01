import React from 'react';
import SharedButton from '../ShareButton/SharedButton';

const TaskItem = ({props}) => {
    return(
        <>
            <li>
                <input type="checkbox" name="" id="" /> {props.name}
                <SharedButton props={{name: 'Delete', handelClick:() => props.Delete(props.id)}} />
                <SharedButton props={{name: 'Edit'}}/>
            </li>
        </>
    )
}

export default TaskItem