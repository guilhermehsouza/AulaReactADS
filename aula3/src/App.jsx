import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exemplo1" element={<Exemplo1/>}/>
                <Route path="/exemplo2" element={<Exemplo2/>}/>
                <Route path="/exercicio1" element={<Exercicio1/>}/>
                <Route path="/exercicio2" element={<Exercicio2/>}/>
            </Routes>
        </BrowserRouter>
    );
}