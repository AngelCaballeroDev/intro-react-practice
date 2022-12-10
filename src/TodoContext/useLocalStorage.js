import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] =React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
  
    React.useEffect(() => {
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
      
          // Si localStorageTodos está vacio, no existe, es null, etc...
          if (!localStorageItem) {
            //Array vacío por defecto
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false); 
        }catch(error) {
          setError(error);
        }
      }, 3000);
    });
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error) {
        setError(error);
      }
  
  
    };
  // OJO para React Hooks. Si tenemos por ejemplo dos elemetos: un estado y su actualizador
  // podemos enviar un array de 2 posiciones --> return [item, saveItem], pero si tenemos más de
  // dos elementos hay que enviar un objeto:
    return {
      item,
      saveItem,
      loading,
      error,
  
    };
};

export { useLocalStorage };

