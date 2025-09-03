export default function Exercicio4({ a, b, c }) 
{
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    return (
      <div className="conteudo">
        <h2>Exercício 4 - Equação de 2º Grau</h2>
        <p>Coeficientes: a = {a}, b = {b}, c = {c}</p>
        <div className="delta1">
          <p>
            Discriminante: {delta}<br />
            Raízes reais:<br />
            x1 = {raiz1.toFixed(2)}<br />
            x2 = {raiz2.toFixed(2)}
          </p>
        </div>
      </div>
    );
  } else if (delta === 0) {
    const raiz = (-b) / (2 * a);
    return (
      <div className="conteudo">
        <h2>Exercício 4 - Equação de 2º Grau</h2>
        <p>Coeficientes: a = {a}, b = {b}, c = {c}</p>
        <div className="delta2">
          <p>
            Discriminante: {delta}<br />
            Raiz única real:<br />
            x = {raiz.toFixed(2)}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="conteudo">
        <h2>Exercício 4 - Equação de 2º Grau</h2>
        <p>Coeficientes: a = {a}, b = {b}, c = {c}</p>
        <div className="delta3">
          <p>
            Discriminante: {delta}<br />
            Não existem raízes reais.
          </p>
        </div>
      </div>
    );
  }
}
