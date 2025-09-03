export default function Exemplo4( {numero1, numero2} )
{
    let resultado = Number(numero1) + Number(numero2);

    return(
        <div className="conteudo">
            <p>
                A soma {numero1} + {numero2} é igual a <b>{resultado}</b>.
            </p>
        </div>
    )
}