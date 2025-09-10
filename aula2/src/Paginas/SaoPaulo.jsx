import { Link } from "react-router-dom";

export default function SaoPaulo() {
    return (
        <div>
            <h1>Seja bem vindo ao Estado de São Paulo</h1>

            <div className="conteudo">
                <p>
                    O estado de São Paulo, situado na região Sudeste do Brasil, é o mais populoso do país e um dos principais polos econômicos da América Latina. Sua capital, também chamada São Paulo, é reconhecida por sua diversidade cultural, vida noturna agitada e grande influência nos setores financeiro, industrial e tecnológico. O estado destaca-se ainda pela forte produção agrícola, infraestrutura moderna e papel fundamental no desenvolvimento econômico e social do Brasil.
                </p>

                <p>
                    <img src="/SP.png" />
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}