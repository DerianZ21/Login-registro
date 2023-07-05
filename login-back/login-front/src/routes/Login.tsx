import { Navigate } from "react-router-dom";
import { useAuth } from "../Autenticacion/AutProvider";
import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react"

export default function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  if(auth.esAutentico){
    return <Navigate to="/dashboard"/>
  };

  return (
    <DefaultLayout>
      <form className="form">
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}></input>
        <label>password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}></input>
        <button>Login</button>
      </form>
    </DefaultLayout>
  
  )
  
}