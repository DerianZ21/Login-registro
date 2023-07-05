import { useAuth } from "../Autenticacion/AutProvider"


export default function Dashboard(){

  const auth = useAuth();
  return (
    <h1>Dashboard de {auth.getUser()?.name || ""}</h1>
  )
}