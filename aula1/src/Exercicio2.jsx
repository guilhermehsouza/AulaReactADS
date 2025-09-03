export default function Exercicio2({ peso, altura }) {

  let imc = peso / (altura * altura);

  return (
    <div className="conteudo">
      <h2>Exercício 2 - Calculadora de IMC</h2>
      <p>Peso: <strong>{peso} kg</strong></p>
      <p>Altura: <strong>{altura} m</strong></p>
      <p>IMC: <strong>{imc.toFixed(2)}</strong></p>
    </div>
  );
}