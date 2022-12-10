import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

/*const estilos = {
    color: 'red',
    backgroundColor: 'green' 
};*/

function TodoCounter() {
/*Antes le pasabamos las propiedades por parámetro,
ahora lo haremos a través del todoContext */

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        //Si queremos enviar valores de estilo hay que introducirlos entre {{valores}}
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
}

export { TodoCounter };