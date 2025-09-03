import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";
import "./App.css";
import Exemplo4 from "./Exemplo4";

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

    </div>
  )
}