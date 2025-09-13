import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Importar páginas
import Index from "./pages/client_pages/index.jsx";
import Login from "./pages/client_pages/login.jsx";
import Servicos from "./pages/client_pages/servicos.jsx";
// import Cadastro from "./pages/client_pages/Cadastro.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Servicos" element={<Servicos />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
