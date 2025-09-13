import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavSemLogin() {

  const navigate = useNavigate();
  
  return (
    <nav className="nav_institucional_pai">
    <div className="nav_institucional_coluna">
      <p className="paragrafo-2 underline-hover" onClick={() => navigate("/login")}>Página Inicial</p>
      <p className="paragrafo-2 underline" onClick={() => navigate("/servicos")}>Serviços</p>
    </div>
    <div className="nav_institucional_coluna">
      <img src="src/assets/svg/logo_black.svg" alt="logo" style={{ height: "50px" }} />
    </div>
    <div className="nav_institucional_coluna">
      <button id="btn_entrar" className="btn-branco" onClick={() => navigate("/login")}>Entrar</button>
      <button id="btn_cadastrar" className="btn-rosa" onClick={() => navigate("/servicos")}>Cadastre-se</button>
      {/* <button id="btn_perfil" className="btn-rosa" onclick="navigate('./config_perfil.html')" style="display: none;">Configurações</button> */}
    </div>
  </nav>
  );
}
