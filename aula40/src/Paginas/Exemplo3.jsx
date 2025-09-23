import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exemplo3() {

    const [alunos, setAlunos] = useState([]);
    const [aluno, setAluno] = useState({ nome: "", idade: "", curso: "" });
    const [cursos, setCursos] = useState(["ADS", "GE", "Agro", "RH"]);

    function adicionar() {
        if (aluno.curso === "" )
        {
            alert("Selecione um curso");
            return;
        }

        setAlunos([...alunos, aluno]);
        setAluno({ nome: "", idade: "", curso: "" });
    }

    function excluir(indice) {
        alunos.splice(indice, 1);
        setAlunos([...alunos]);
    }

    return (
        <div>
            <h1>Exemplo 3</h1>

            <div className="conteudo">
                <p>
                    Digite o nome do aluno: <br />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={aluno.nome}
                        onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                    />
                </p>
                <p>
                    Digite a idade do aluno: <br />
                <input
                    type="number"
                    placeholder="Idade"
                    value={aluno.idade}
                    onChange={(e) => setAluno({ ...aluno, idade: e.target.value })}
                />
                </p>
                <p>
                    Digite o curso do aluno: <br />
                    <select value={aluno.curso}
                        onChange={(e) => setAluno({ ...aluno, curso: e.target.value })}>
                            <option value="">Selecione um curso</option>
                        {cursos.map( (item) => (<option>{item}</option>) )}
                    </select>
               
                </p>    
                <p>
                <button onClick={adicionar}>Adicionar</button>
                </p>
                <ul>
                    {alunos.map((a, i) => (
                        <li key={i}>
                            {a.nome} - {a.idade} - {a.curso}
                            <button onClick={() => excluir(i)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}
