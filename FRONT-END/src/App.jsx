import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Reembolsos from "./components/Reembolsos/Reembolsos"
import Solicitacao from "./components/Solicitacao/Solicitacao"
import "./global.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/reembolsos" element={ <Reembolsos /> } />
        <Route path="/solicitacao" element={ <Solicitacao /> } />
      </Routes>
    </BrowserRouter>
  )
}
