import React, { useState } from "react";

export default function Exercicio1() {
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [valor, setValor] = useState("");
    const [precoFinal, setPrecoFinal] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let desconto = 0;
        if (sexo === "F") {
            desconto = 0.2;
        } else if (sexo === "M") {
            desconto = 0.05;
        }
        const preco = Number(valor) * (1 - desconto);
        setPrecoFinal(preco);
    };

    return (
        <div>
            <h1>Promoção Dia da Mulher</h1>
            <form onSubmit={handleSubmit} className="conteudo">
                <p>
                    <label>Nome:</label> <br />
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Sexo (M/F):</label> <br />
                    <input
                        type="text"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value.toUpperCase())}
                        maxLength={1}
                        required
                        placeholder="M ou F"
                    />
                </p>
                <p>
                    <label>Valor das compras (R$):</label> <br />
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <input type="submit" value="Calcular desconto" />
                </p>

                {precoFinal !== null && (
                    <div style={{ marginTop: 20 }}>
                        <strong>
                            {nome}, preço final com desconto: R$ {precoFinal.toFixed(2)}
                        </strong>
                    </div>
                )}
            </form>
        </div>
    );
}