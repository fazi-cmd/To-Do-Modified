 import { useState } from 'react';
import style from './TodoItems.module.css';
 function TodoItems({todoName,todoDate,onDeleteClick}){

    return (
        <div className="container text-center">
        <div className={style.row} >
          <div className="col-sm-5">{todoName}</div>
          <div className="col-sm-5">{todoDate}</div>
          <div>
          <button onClick={()=>onDeleteClick(todoName)} type="button" className={`${style.btn}btn btn-danger`}>Delete</button>
        </div>
      </div>
    </div>
    );
}
export default TodoItems;