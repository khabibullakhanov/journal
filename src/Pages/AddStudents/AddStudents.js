// import React, { useState } from 'react'

// export function AddStudents() {

//     const [newItem, setNewItem] = useState("")
//     const [items, setItems] = useState([])

//     const addStudent = () => {
//         console.log(newItem);

//         if (!newItem) {
//             alert("Please enter a new student");
//             return;
//         }

//         const item = {
//             id: Math.floor(Math.random() * 1000),
//             value: newItem
//         }
        
//         setItems(oldList => [...oldList, item])
//         setNewItem("")

//     }

//     const deleteItem = (id) => {
//         const newArray = items.filter(item => item.id !== id)
//         setItems(newArray)
//     }

//     return (
//         <div>
//             <h1>ToDo List App</h1>
//             <input
//                 type="text"
//                 placeholder='AddStudents...'
//                 value={newItem}
//                 onChange={e => setNewItem(e.target.value)}
//             />
//             <ul>
//                 {items.map(item => {
//                     return (
//                         <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>❌</button></li>
//                     )
//                 })}
//             </ul>
//             <button onClick={addStudent}>Add Student</button>


//         </div>
//     )

// }


import React from 'react'
import './AddStudents.css'
import { Todo } from '../../Companenta/TodoList/Todo'


export function AddStudents() {
    return (
        <div >
            <Todo/>
        </div>
    )
}

