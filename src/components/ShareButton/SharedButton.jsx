import React from 'react';

const SharedButton = ({props}) => {
    return (
        <>
            <button onClick={props.handelClick} > {props.name} </button>
        </>
    )
}

export default SharedButton;