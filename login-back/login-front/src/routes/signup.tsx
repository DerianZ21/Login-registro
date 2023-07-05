import { Navigate } from "react-router-dom";
import { useAuth } from "../Autenticacion/AutProvider";

import React, { useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { API_URL } from "../Autenticacion/constanst";

export default function Signup(){
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      const response = await fetch(`${API_URL}/signup`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          password
        })
      })

      if(
        response.ok){
        console.log("el usuario se creo correctamente")
      }else{
        console.log("algo malo acurrió :o")
      }
    }catch(error){
      console.log(error)
    }
  }

  if(auth.esAutentico){
    return <Navigate to="/dashboard"/>
  };

  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleSubmit}>
        <h1>signup</h1>

        <label>Nombre</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Username</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <label>password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button>Create Usuario</button>
      </form>
    </DefaultLayout>
  
  )
  
}