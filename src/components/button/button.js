import React,  { memo } from 'react';

function Button({ id, label }) {
    console.log("Rendered Button with id:", id);

    return(
        <button id={'button-' + id}>
            <span> { label } </span>
        </button>
    )
}

export default memo(Button);