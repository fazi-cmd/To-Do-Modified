 import TodoApp from './components/Heading';
 import './App.css';
 import Input from './components/Input';
import TodoItem from './components/TodoItem';
import WelcomeMsg from './components/Welcomemsg';
import { useState } from 'react';
import { TodoContext } from './data/todo-items';
 function App() {
  
  const [todoItems, setTodoItems]=useState([]);
const handleNewItem=(name,date)=>{
// console.log(`the item added is :${name} and ${date}` ); 
setTodoItems((currentValue)=>{
  const newTodoItem=[
    ...currentValue,{name:name,date:date}];
    return newTodoItem;
});
};
const handleDeleteItem=(name)=>{
  const newTodoItems= todoItems.filter(item=>item.name !== name);
  setTodoItems(newTodoItems);

};


  return (
    <TodoContext.Provider value={{
  todoItems: todoItems,
  handleNewItem:handleNewItem,
  handleDeleteItem:handleDeleteItem
    }}>
    <center>
      <div>
       <TodoApp></TodoApp>
       <Input ></Input>
        <WelcomeMsg ></WelcomeMsg>
       <TodoItem  ></TodoItem>
     </div>
     
    </center>
    </TodoContext.Provider>
  );
}
export default App;