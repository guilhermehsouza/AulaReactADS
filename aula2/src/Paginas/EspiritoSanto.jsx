import { Link } from "react-router-dom";

export default function EspiritoSanto() {
    return (
        <div>
            <h1>Seja bem vindo ao Estado do Espírito Santo</h1>

            <div className="conteudo">
                <p>
                    O Espírito Santo é um estado localizado na região Sudeste do Brasil, conhecido por suas belas praias, montanhas e rica cultura. Sua capital, Vitória, destaca-se pela qualidade de vida e pelo importante porto. A economia do estado é diversificada, com destaque para a indústria, agricultura, mineração e exportação de commodities. O Espírito Santo também é famoso pela culinária típica, como a moqueca capixaba, e por suas festas tradicionais e hospitalidade.
                </p>

                <p>
                    <img src="/ES.png" alt="" />
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}