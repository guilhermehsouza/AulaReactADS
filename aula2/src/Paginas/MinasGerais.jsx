import { Link } from "react-router-dom";

export default function MinasGerais() {
    return (
        <div>
            <h1>Seja bem vindo ao Estado de Minas Gerais</h1>

            <div className="conteudo">
                <p>
                    Minas Gerais é um estado localizado na região Sudeste do Brasil, conhecido por sua rica história, cultura e tradição culinária. Com uma das maiores populações do país, destaca-se pela produção de café, leite e minerais, além de abrigar cidades históricas como Ouro Preto, Mariana e Tiradentes. Sua capital, Belo Horizonte, é um importante centro urbano e econômico, e o estado é famoso por suas montanhas, hospitalidade e influência na música e literatura brasileiras.
                </p>

                <p>
                    <img src="/MG.png" alt="" />
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}