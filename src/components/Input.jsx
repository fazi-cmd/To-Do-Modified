import style from './Input.module.css';
import {useContext, useRef } from 'react';
import { TodoContext } from '../data/todo-items';
function Input() {
    const {handleNewItem}=useContext(TodoContext);
    //const [name, setName] = useState('');
   // const [date, setDate] = useState('');
const nameUpdate=useRef();
const dateUpdate=useRef();
    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handleDateChange = (event) => {
    //     setDate(event.target.value);
    // };
    const handleAddClick = () => {
        const name = nameUpdate.current.value;
        const date = dateUpdate.current.value;
        //console.log(`the item added is :${name} and ${date}` );
        nameUpdate.current.value='';
        dateUpdate.current.value='';
       // if (name.trim() && date) {  
            handleNewItem(name, date);
            // setName('');  
            // setDate('');
       // }
    };
    return (
        <div className="container text-center">
            <div className={`${style.row} ${style.enterTask}`}>
                <div className="col-sm-5 enterTask">
                    <input
                        // value={name} 
                        ref={nameUpdate} 
                       // onChange={handleNameChange}
                        type="text"
                        className={style.value}
                        placeholder="Enter the Task"
                    />
                </div>
                <div className="col-sm-5">
                    <input
                        // value={date} 
                        ref={dateUpdate}
                      //  onChange={handleDateChange}
                        type="date"
                        className={style.value}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className={`${style.btn} btn btn-success`}
                        onClick={handleAddClick}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;