import {Link} from 'react-router-dom';
import { useState} from 'react';

export default function Exemplo3() {

    let alunos = ["Ana", "Gustavo", "Felipe", "Helena", "Guilherme"];

    return (
        <div>
            <h1>Exemplo 3</h1>

            <div className="conteudo">
                <p>
                    Vetores em JavaScript, chamados de arrays, são estruturas que armazenam múltiplos valores em uma única variável. Eles permitem guardar elementos de diferentes tipos, acessar itens por índices numéricos e facilitam operações como adicionar, remover e percorrer dados de forma eficiente.
                </p>

                <p>
                    Vetor: {alunos}
                </p>

                <p>
                    Outra forma de exibição: <br />
                    {alunos.join(", ")}
                </p>

                <p>
                    Outra forma de exibição: <br />

                    {alunos.map(
                        (aluno, indice) => (<p>{indice} - {aluno}</p>)
                    )}
                </p>


            </div>
        </div>
    )
}