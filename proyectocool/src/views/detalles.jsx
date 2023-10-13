import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const Detalles = ()=>{ 

    const url = new URL(window.location.href);
    const queryParams = new URLSearchParams(url.search);
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const color = queryParams.get('color');


    return(
        <div>
            <Link to={"/autos"}>
                <button>🔙</button>
            </Link>
            <p>Id:{id}</p>
            <p>Marca:{name}</p>
            <p>Color:{color}</p>
            
        </div>
    )
    
}

export default Detalles