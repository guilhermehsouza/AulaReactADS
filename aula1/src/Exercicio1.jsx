export default function Exercicio1({ fahrenheit }) {

  let celsius = ((fahrenheit - 32) * 5) / 9;

  return (
    <div className="conteudo">
      <h2>Exercício 1 - Conversor de Temperatura</h2>
      <p>Temperatura em Fahrenheit: <strong>{fahrenheit}°F</strong></p>
      <p>Temperatura em Celsius: <strong>{celsius.toFixed(2)}°C</strong></p>
    </div>
  );
}


