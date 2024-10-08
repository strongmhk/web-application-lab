import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';
import {call} from "./service/ApiService";


function App(){
	
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
    
  }, []);
  
  const addItem = (item) => {
    item.id = "ID-"+items.length;
    item.done = false;
    setItems([...items, item]);
    console.log("items: ", items);
    call("/todo","POST", item)
     .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    const newItems = items.filter(e=> e.id !== item.id);
    setItems([...newItems])
  }

  let todoItems = 
     items.length > 0 && (
     <Paper style={{ margine: 16 }} > 
     <List>
     {items.map((item) => ( 
        <Todo item={item} key={item.id} 
        deleteItem={deleteItem} />
     ))} 

     </List>
     </Paper>
     );

	return <div className = "App"> 
    <Container maxWidth="md">
      <AddTodo addItem={addItem}/>
      {todoItems}
    </Container>
   </div>

}

export default App;