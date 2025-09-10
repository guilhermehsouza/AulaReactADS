import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home - Estudo de Rotas</h1>

            <div className="conteudo">

                <h3>Região Sudeste</h3>

                <p>
                    O estado de São Paulo, localizado na região Sudeste do Brasil, é o mais populoso e economicamente desenvolvido do país. Com uma grande diversidade cultural, abriga importantes centros urbanos, como a capital São Paulo, conhecida por sua influência nos setores financeiro, industrial e cultural. O estado destaca-se também pela forte produção agrícola, infraestrutura avançada e papel fundamental no cenário nacional, sendo um dos principais motores da economia brasileira.
                </p>

                <ul>
                    <li><Link to="/sp">São Paulo</Link></li>
                    <li><Link to="/rj">Rio de Janeiro</Link></li>
                    <li><Link to="/mg">Minas Gerais</Link></li>
                    <li><Link to="/es">Espírito Santo</Link></li>
                </ul>

            </div>

            <div className="conteudo">
                <h3>Região Sul</h3>

                <p>
                    A Região Sul do Brasil é composta pelos estados do Paraná, Santa Catarina e Rio Grande do Sul. Conhecida por suas paisagens diversificadas, clima mais ameno e forte influência de imigrantes europeus, a região destaca-se pela agricultura moderna, indústrias desenvolvidas e altos índices de qualidade de vida. Suas cidades são reconhecidas pela organização, cultura rica e tradições típicas, como festas, culinária e arquitetura.
                </p>

                <ul>
                    <li><Link to="/pr">Paraná</Link></li>
                    <li><Link to="/sc">Santa Catarina</Link></li>
                    <li><Link to="/rs">Rio Grande do Sul</Link></li>
                </ul>
            </div>
        </div>
    );
}