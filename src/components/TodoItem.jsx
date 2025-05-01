import {useContext } from 'react';
import { TodoContext } from '../data/todo-items';
import TodoItems from './TodoItems';
function TodoItem() {

const {todoItems}=useContext(TodoContext);


    return (
      <div className="task-container">
        {todoItems.map((item, index) => (
          <TodoItems 
            key={index}
            todoName={item.name} 
            todoDate={item.date}
            className={item.urgent ? "urgent" : ""}
          />
        ))}
      </div>
    );
  }
export default TodoItem;