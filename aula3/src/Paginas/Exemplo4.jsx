import {Link} from 'react-router-dom';
import { useState} from 'react';

export default function Exemplo4() {

    let aluno1 = {nome: "Ana Cristina", curso: "ADS", media: 8.5};
    let aluno2 = {nome: "Gustavo", curso: "SI", media: 6.5};
    let aluno3 = {nome: "Felipe", curso: "GE", media: 9.0};
    let aluno4 = {nome: "Helena", curso: "ADS", media: 7.5};

    let alunos = [aluno1, aluno2, aluno3, aluno4];

    return (
        <div>
            <h1>Exemplo 4</h1>

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