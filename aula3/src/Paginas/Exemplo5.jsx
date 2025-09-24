import {Link} from 'react-router-dom';
import { useState} from 'react';

export default function Exemplo5() {

    const[nome, setNome] = useState("");
    const[curso, setCurso] = useState("");
    const[media, setMedia] = useState(0);

    const[alunos, setAlunos] = useState([]);

    function adicionar() {
        let novoAluno = {
            nome: nome,
            curso: curso,
            media: Number(media)
        };

        setAlunos([...alunos, novoAluno]);

        setNome("");
        setCurso("");
        setMedia(0);
    }

    return (
        <div>
            <h1>Exemplo 5</h1>

            <div className="conteudo">

                <h3>Cadastro de Alunos</h3>

                <form>
                    <p>
                        Nome do Aluno <br />
                        <input type="text" value={nome} 
                        onChange={e => setNome(e.target.value)} />
                    </p>

                    <p>
                        Curso <br />
                        <input type="text" value={curso} 
                        onChange={e => setCurso(e.target.value)} />
                    </p>

                    <p>
                        Média <br />
                        <input type="number" value={media} 
                        onChange={e => setMedia(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Cadastrar" onClick={adicionar} />
                    </p>
                </form>                
            </div>

            <div className="conteudo">
                <h3>Exibição do Vetor de Objetos em uma Tabela</h3>

                <table>
                    <tr>
                        <th>Indice</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Média</th>
                    </tr>

                    {alunos.map(
                        (aluno, i) => (
                            <tr>
                                <td>{i}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.media}</td>
                            </tr>
                        )
                    )}
                </table>
            </div>

        </div>
    )
}