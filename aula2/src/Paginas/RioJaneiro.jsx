import { Link } from "react-router-dom";

export default function RioJaneiro() {
    return (
        <div>
            <h1>Seja bem vindo ao Estado do Rio de Janeiro</h1>

            <div className="conteudo">
                <p>
                    O estado do Rio de Janeiro, localizado na região Sudeste do Brasil, é conhecido por suas belas praias, paisagens naturais e rica cultura. Sua capital, a cidade do Rio de Janeiro, é famosa mundialmente pelo Cristo Redentor, o Pão de Açúcar e o Carnaval. O estado possui uma economia diversificada, com destaque para o turismo, a indústria petrolífera, o setor de serviços e a produção cultural, sendo um importante centro histórico e turístico do país.
                </p>

                <p>
                    <img src="/RJ.png" alt="" />
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}