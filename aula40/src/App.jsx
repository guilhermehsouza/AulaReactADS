import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exemplo3 from "./Paginas/Exemplo3";
import Menu from "./Paginas/Menu";

export default function App()
{
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exemplo1" element={<Exemplo1/>}/>
                <Route path="/exemplo2" element={<Exemplo2/>}/>
                <Route path="/exemplo3" element={<Exemplo3/>}/>
            </Routes>
        </BrowserRouter>
    );
}