 import TodoApp from './components/Heading';
 import './App.css';
 import Input from './components/Input';
import TodoItem from './components/TodoItem';
import WelcomeMsg from './components/Welcomemsg';
import { useState } from 'react';
 function App() {
  
  const [todoItems, setTodoItems]=useState([]);
const handleNewItem=(name,date)=>{
console.log(`the item added is :${name} and ${date}` );
const newTodoItem=[...todoItems,{name:name,date:date}];
setTodoItems(newTodoItem);
};
const handleDeleteItem=(name)=>{
  const newTodoItems= todoItems.filter(item=>item.name !== name);
  setTodoItems(newTodoItems);

};


  return (
    <center>
      <div>
       <TodoApp></TodoApp>
       <Input onNewItem={handleNewItem}></Input>
        {todoItems.length ===0 &&  <WelcomeMsg ></WelcomeMsg>}
       <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItem>
     </div>
     
    </center>
  );
}
export default App;