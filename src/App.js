
import { useState, useEffect } from "react";

function App() {
  const [toDo,setTodo]=useState("");
  const [toDos,setTodos]=useState([]);
  const onChange=(event)=>setTodo(event.target.value);
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo===""){
      return;
    }
    setTodo("");
    setTodos(currentArray=>[toDo,...currentArray])
    console.log(toDos);

  };
  return (
    <div >
      <form onSubmit={onSubmit}>
        <input  onChange={onChange} 
                type="text" 
                value={toDo} 
                placeholder="Write your to do..."/>

        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
