import Card from "./card"
import { Link } from "react-router-dom";

function Autos() {

  const cars = [
    {
      id: 1,
      marca: 'Toyota',
      descripcion: 'Un auto deportivo rojo',
      color: 'rojo'
    },
    {
      id: 2,
      marca: 'Honda',
      descripcion: 'Un auto familiar azul',
      color: 'azul'
    },
    {
      id: 3,
      marca: 'Ford',
      descripcion: 'Un auto todoterreno verde',
      color: 'verde'
    }
  ];

  
  return (
    <>

    {cars.map((car)=>{
      return <Card key={car.id} car={car}/>
    })}
<Link to={"/inicio"}>
    <button>Volver</button>
    </Link>
    </>
  )
}

export default Autos;