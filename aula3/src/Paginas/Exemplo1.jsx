import { useState } from "react";
import {Link} from "react-router-dom";

export default function Exemplo1()
{
    const[nome, setNome] = useState("");
    const[idade, setIdade] = useState();
    const[resultado, setResultado] = useState("");

    function calcular()
    {
        let dias = idade * 365;
        setResultado("Sua idade em dias é " + dias);
    }

    return (
        <div>
            <h1>Exemplo 1</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite o nome do aluno <br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </p>

                    <p>
                        Digite a idade do aluno <br />
                        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                    <p>
                        Resultado: <br />
                        Nome do aluno: {nome} <br />
                        Idade do aluno: {idade} <br />
                        {resultado}
                    </p>

                    <p>
                        <Link to="/">Voltar</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}