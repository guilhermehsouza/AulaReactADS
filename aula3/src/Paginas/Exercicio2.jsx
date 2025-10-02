import React, { useState } from "react";

export default function Exercicio2() {
    const [km, setKm] = useState("");
    const [dias, setDias] = useState("");
    const [preco, setPreco] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const precoTotal = Number(dias) * 90 + Number(km) * 0.2;
        setPreco(precoTotal);
    };

    return (
        <div>
            <h1>Locadora de Carros FATEC Mococa</h1>
            <form onSubmit={handleSubmit} className="conteudo">
                <p>
                    <label>Km percorridos:</label> <br />
                    <input
                        type="number"
                        value={km}
                        onChange={(e) => setKm(e.target.value)}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <label>Dias alugados:</label> <br />
                    <input
                        type="number"
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                        min="1"
                        required
                    />
                </p>
                <p>
                    <input type="submit" value="Calcular preço" />
                </p>
                

                {preco !== null && (
                <div style={{ marginTop: 20 }}>
                    <strong>Preço total a pagar: R$ {preco.toFixed(2)}</strong>
                </div>
            )}
            </form>
            
        </div>
    );
}