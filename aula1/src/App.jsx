import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";
import Exemplo4 from "./Exemplo4";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";

export default function App() 
{
  return (
    <div>
      <h1>Aula 01 - Introdução ao React com Java Script</h1>

      <Exemplo1 />
      <Exemplo2 nome={"Guilherme"} idade={46} />
      <Exemplo2 nome={"Ana Cristina"} idade={25} />
      <Exemplo2 nome={"Gustavo"} idade={18} />

      <Exemplo4 numero1={10} numero2={20} />
      <Exemplo4 numero1="10" numero2="20" />

      <Exercicio1 fahrenheit={100} />
      <Exercicio2 peso={70} altura={1.75} />
      <Exercicio3 nota1={7.5} nota2={2.0} />
      <Exercicio4 a={1} b={-3} c={2} />
      <Exercicio4 a={1} b={2} c={1} />
      <Exercicio4 a={1} b={2} c={3} />
    </div>
  )
}