import { useContext } from 'react';
import { TodoContext } from '../data/todo-items';
import style from './Welcomemsg.module.css';
const WelcomeMsg = () => {
  const {todoItems}=useContext(TodoContext);
  return ( 
    
      todoItems.length ===0 && <p className={`${style.fadeIn} ${style.body}`}>
        Enjoy Your day</p>
    
  );
}
export default WelcomeMsg;