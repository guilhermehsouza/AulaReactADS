export default function Exercicio3({ nota1, nota2 }) {
    let media = (nota1 + nota2) / 2;

    let status;
    if (media >= 6) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return (
        <div className="conteudo">
            <h2>Exercício 3 - Calculo da Média</h2>
            <p>Nota 1: <strong>{nota1}</strong></p>
            <p>Nota 2: <strong>{nota2}</strong></p>
            <p>Média: <strong>{media.toFixed(2)}</strong></p>
            <p>Status: <strong>{status}</strong></p>
        </div>
    );
}
