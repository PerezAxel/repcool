import { Link } from "react-router-dom";

const Inicio = ()=>{
 return (
    <>Soy iniciooooooooooooo
    <Link to={"/autos"}>
    <button>Ir a autos</button>
    </Link>
    
    </>
 )
 
}

export default Inicio;