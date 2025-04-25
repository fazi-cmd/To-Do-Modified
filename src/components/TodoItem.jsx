import TodoItems from './TodoItems';
function TodoItem({todoItems, onDeleteClick}){
    return (
      <div className="task-container">
        {todoItems.map((item, index) => (
          <TodoItems 
            key={index}
            todoName={item.name} 
            todoDate={item.date}
            onDeleteClick={onDeleteClick}
            className={item.urgent ? "urgent" : ""}
          />
        ))}
      </div>
    );
  }
export default TodoItem;