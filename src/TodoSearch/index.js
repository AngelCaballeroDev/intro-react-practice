import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
//Antes se hacía así:
/*class Componente extends React.Component {
    constructor(){
        this.state = {
            patito: 'Juan'
        };
    }

    render() {
        return (
            <div onClick={() => this.setState('Enrique')}>this.state.patito</div>
        )
    }
}*/

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    //const [] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder='Programar'
        value={searchValue}
        onChange={onSearchValueChange}
        />
        //<p>{searchValue}</p>
    );
}

export { TodoSearch };