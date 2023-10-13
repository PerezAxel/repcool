import { Link } from 'react-router-dom';
import style from './card.module.css'
/* eslint-disable react/prop-types */
function Card (props){ 
    const {car} = props;
    
return (
    <Link to= {`/detalles?id=${car.id}&name=${car.marca}&color=${car.color}`}>
    <div className={style.container}>
    <p>Marca:{car.marca}</p>
    <p>Color:{car.color}</p>
    </div>
    </Link>
)
}

export default Card;