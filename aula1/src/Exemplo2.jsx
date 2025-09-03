export default function Exemplo2( {nome, idade} )
{
    let dias = idade * 365;

    return(
        <div className="conteudo">
            <h2>Olá {nome} seja bem vindo !</h2>

            <p>
                Sua idade é <b>{idade} anos.</b> 
                Você viveu aproximadamente <b>{dias} dias.</b>.
            </p>
        </div>
    )
}