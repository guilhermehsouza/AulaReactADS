import { Link } from "react-router-dom";
export default function Home() 
{
    return (
        <div>
            <h1>Estudo de Estados (useState) </h1>

            <div className="conteudo">

                <h3>Exemplos</h3>

                <ul>
                    <li><Link to="/exemplo1">Exemplo 1</Link></li>
                    <li><Link to="/exemplo2">Exemplo 2</Link></li>
                </ul>

                <h3>Exercícios</h3>

                <ul>
                    <li><Link to="/exercicio1">Exercício 1</Link></li>
                    <li><Link to="/exercicio2">Exercício 2</Link></li>
                </ul>

            </div>


        </div>
    )
}