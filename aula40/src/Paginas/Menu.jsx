import {Link} from "react-router-dom";

export default function Menu()
{

    return (
        <div className="menu">
            <h2>Estudo de Vetores no React</h2>

            <div>
                <Link to="/exemplo1">Exemplo 1</Link>
                <Link to="/exemplo2">Exemplo 2</Link>
                <Link to="/exemplo3">Exemplo 3</Link>
            </div>
            
        </div>
    )
}