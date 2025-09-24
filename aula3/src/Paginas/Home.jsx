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

                <h3>Exemplos de Vetores e Objetos</h3>

                <ul>
                    <li><Link to="/exemplo3">Exemplo 3</Link></li>
                    <li><Link to="/exemplo4">Exemplo 4</Link></li>
                    <li><Link to="/exemplo5">Exemplo 5</Link></li>
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