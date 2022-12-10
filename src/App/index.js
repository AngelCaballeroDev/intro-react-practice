import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from './AppUI';

//import './App.css';

/*const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso completo de React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LAlalalalaalalalal', completed: false}   
];*/


function App() {
  return (
    <TodoProvider>
        <AppUI />      
    </TodoProvider>
  );
}

export default App;
