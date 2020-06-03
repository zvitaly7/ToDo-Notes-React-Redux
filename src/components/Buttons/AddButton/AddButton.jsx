import React from "react";
import './addbutton.scss'

function AddButton({addOrEdit}) {
    return (
        <div className='addButton'>
            <button className='btn' onClick={addOrEdit}>+</button>
        </div>
    )

}
export default AddButton;