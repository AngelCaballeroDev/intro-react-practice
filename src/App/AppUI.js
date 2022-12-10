import React from 'react';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
/*Aquí tendremos el mismo value que tenemos en provider
(que hemos llamado desde consumer) por lo que llamamos a las propiedades que necesitemos */
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } =  React.useContext(TodoContext);

  return (
    <React.Fragment>
      {/*Aquí antes, a TodoCounter y search les pasábamos propiedades
      pero ahora las hemos eliminado porque el provider se encargará de eso */}
      <TodoCounter /> 
      <TodoSearch />         
      <TodoList>
        {error && <TodosError error={error} /> }
        {loading &&  new Array(5).fill(1).map((a,i) => <TodosLoading key={i} /> )}
        {(!loading && !searchedTodos.length) && <EmptyTodos /> }

        {/*Esto es la propiedad children que recibira el componente TodoList como children.
        Esta propiedad, va envuelta en un <ul> en el propio componente. Como resultado, nos
        devuelve una lista de componentes TodoItem cuyas propiedades inicializamos desde */}
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
        {/*Preguntamos si existe nuestro array de todos antes de imprimirlo*/}
          {/*<p>{searchedTodos[0]?.text}</p>*/}
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />   
    </React.Fragment>
  );

}

export { AppUI };