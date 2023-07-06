import { useAuth } from "../Autenticacion/AutProvider"
import { useState, useEffect } from "react";
import { API_URL } from "../Autenticacion/constanst";

interface Todo {
  id: string,
  title: string,
  completed: boolean;
}

export default function Dashboard(){

  const [todos, setTodos] = useState<Todo[]>([]);

  const auth = useAuth();

  useEffect(()=>{
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const response = await fetch(`${API_URL}/todos`,{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`
        },
      });

      if(response.ok){
        const json = await response.json();
        setTodos(json);
      }else{

      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      
    }
    
  }


  return (
    <div>
      <h1>Dashboard de {auth.getUser()?.name || ""}</h1>
      {todos.map((todo)=>(<div>{todo.title}</div>))}
    </div>
  )
}