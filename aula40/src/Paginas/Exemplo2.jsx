import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exemplo2()
{

    let aluno1 = {aluno : "Guilherme", idade : 20, curso : "ADS"};
    let aluno2 = {aluno : "Maria", idade : 22, curso : "Engenharia"};
    let aluno3 = {aluno : "João", idade : 19, curso : "Medicina"};

    const[alunos, setAlunos] = useState([aluno1, aluno2, aluno3]);

    let aluno4 = {aluno : "Ana", idade : 21, curso : "Direito"};

    function adicionar()
    {
        setAlunos([...alunos, aluno4]);
    }

    function excluir(indice)
    {
        alunos.splice(indice, 1);
        setAlunos([...alunos]); 
    }



    return (
        <div>

            <h1>Exemplo 2</h1>

            

                

                {
                    alunos.map( (aluno, indice) => (
                        <div className="conteudo">
                            indice: {indice} <br />
                            Nome: {aluno.aluno} <br />
                            Idade: {aluno.idade} <br />
                            Curso: {aluno.curso} <br />
                            <button onClick={() => excluir(indice)}>Excluir</button>
                        </div>
                    ) )
                }
                
            
        </div>
    )
}