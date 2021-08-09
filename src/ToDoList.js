import React from 'react'

const ToDoList = (props) => {

    return (
        <>
            <div className='todo_style'>
                <li>{props.item}</li>
                <i class="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id)
                }} />
            </div>
        </>
    )
    
    

}

export default ToDoList
