import { useState } from "react";
import {Link} from "react-router-dom";

export default function Exemplo2()
{
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(null);

    function calcular()
    {
        let n1 = Number(numero1);
        let n2 = Number(numero2);

        setResultado(
            <div>
                <p>
                    O número 1 é {n1}
                    <br />
                    O número 2 é {n2}
                </p>
                <p>A soma dos números é {n1+n2} </p>
            </div>
        );
    }

    function limpar()
    {
        setResultado(null)
    }

    return (
        <div>
            <h1>Exemplo 2</h1>

            <form className="conteudo">
                <p>
                    Digite o primeiro número: <br />
                    <input type="number" value={numero1} onChange={e => setNumero1(e.target.value)} />
                </p>

                <p>
                    Digite o segundo número: <br />
                    <input type="number" value={numero2} onChange={e => setNumero2(e.target.value)} />
                </p>

                <p>
                    <input type="button" value="Somar" onClick={calcular} />
                    <input type="button" value="Subtrair" />
                    <input type="button" value="Multiplicar" />
                    <input type="button" value="Dividir" />
                    <input type="button" value="Limpar" onClick={limpar} />
                </p>

                <p>
                    {resultado}
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </form>
        </div>
    )
}