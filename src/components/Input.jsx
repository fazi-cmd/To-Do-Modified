import style from './Input.module.css';
import { useState } from 'react';

function Input({ onNewItem }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleAddClick = () => {
        if (name.trim() && date) {  
            onNewItem(name, date);
            setName('');  
            setDate('');
        }
    };

    return (
        <div className="container text-center">
            <div className={`${style.row} ${style.enterTask}`}>
                <div className="col-sm-5 enterTask">
                    <input
                        value={name}  
                        onChange={handleNameChange}
                        type="text"
                        className={style.value}
                        placeholder="Enter the Task"
                    />
                </div>
                <div className="col-sm-5">
                    <input
                        value={date} 
                        onChange={handleDateChange}
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