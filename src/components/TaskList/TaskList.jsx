import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({props}) => {
    return (
        <>
        {props.Tasks.map((task) => (
          <TaskItem key={task.id} props={{ name: task.name }} />
        ))}
        </>
    )
}

export default TaskList