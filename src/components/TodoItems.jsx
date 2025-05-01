 import { TodoContext } from '../data/todo-items';
 import { useContext, useState } from 'react';
import style from './TodoItems.module.css';
 function TodoItems({todoName,todoDate}){
const {handleDeleteItem}= useContext(TodoContext);
    return (
        <div className="container text-center">
        <div className={style.row} >
          <div className="col-sm-5">{todoName}</div>
          <div className="col-sm-5">{todoDate}</div>
          <div>
          <button onClick={()=>handleDeleteItem(todoName)} type="button" className={`${style.btn}btn btn-danger`}>Delete</button>
        </div>
      </div>
    </div>
    );
}
export default TodoItems;