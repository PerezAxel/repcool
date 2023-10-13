import Autos from "./views/autos"
import Detalles from "./views/detalles";
import Inicio from "./views/inicio"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./views/nav";



function App() {
    return (
    <BrowserRouter>
      <Nav/>
      <Routes> 
        <Route path="/inicio" element={<Inicio />}/>
        <Route path="/autos" element={<Autos />}/>
        <Route path="/detalles" element={<Detalles />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
