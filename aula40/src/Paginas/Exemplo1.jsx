import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exemplo1()
{

    let vetor = [1, 2, 3, 4, 5];


    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">

                <p>
                    Vetor: {vetor}
                </p>

                <p>
                    Conteudo do vetor: {vetor.join(", ")}
                </p>

                <p>
                    {vetor.map((numero, indice) => (
                        <>
                            Indice {indice} : {numero} <br />
                        </>
                    )
                    )}
                </p>

                <ul>
                    {vetor.map( (numero) =>(<li>Número {numero}</li>) )}
                </ul>

            </div>
            
        </div>
    )
}