import React, {useState} from 'react'
import ToDoList from './ToDoList'

 const Todo = () => {

    const [items, setItems] = useState([]);

    const [inputList, setInputList] = useState('');

    const inputChange = (e) =>{
        setInputList(e.target.value);
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
           return oldItems.filter((arrItem, index)=>{
                return index !== id ;
            })
        })
    }

    const viewItems = (e) =>{
        e.preventDefault();

        if (inputList) {
            setItems((prevItems)=>{
            return [...prevItems, inputList];
        });
        }
        else{
            alert("Please enter something")
        }

        setInputList("");
        
    };
    return (
        <>
            <div className='main_div'>
                <div className='centre_div'>
                    <h2>ToDo List App</h2>
                    <input type="text" placeholder='Add items' value={inputList} onChange = {inputChange}/>
                    <button onClick = {viewItems}>+</button>
                    <ol>
                        {/*  */}
                        {items.map((each, index)=>{
                            return <ToDoList item={each} key={index} id={index} onSelect={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo
