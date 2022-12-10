import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    //todos --> estado
 // saveTodos --> forma de actualizar el estado
 // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

 //El array anterior pasa a ser un objeto:
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    //Este es el criterio que determina el filtro de búsqueda.
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];      
    newTodos.push({
      completed: false,
      text,
    });     
    saveTodos(newTodos);
  };
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
      //Spread operator = ...
      //Creamos un array a partir de los todos anteriores modificando la propiedad del index
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
      //Actualizamos el estado
      saveTodos(newTodos);

/*    todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }*/
  };

  console.log('Render (antes del useEffect)')
  //Esto se va a ejecutar justo antes de transformar el código react a HTML.

  React.useEffect(() => {
    console.log('use effect')
  }, [totalTodos]); //Se va a lanzar el useEffect cada vez que eliminemos un todo de la lista,
  //porque cambia el length.

  console.log('Render (después del useEffect)')

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

<TodoContext.Consumer></TodoContext.Consumer>
