import React from "react";

export default function NavLogado() {
  return (
    <nav className="nav_institucional_pai">
    <div className="nav_institucional_coluna">
      <p className="paragrafo-2 underline-hover" onclick="navegar('./index.html')">Página Inicial</p>
      <p className="paragrafo-2 underline" onclick="navegar('./servicos.html')">Serviços</p>
    </div>
    <div className="nav_institucional_coluna">
      <img src="../../assets/svg/logo_black.svg" alt="logo" style="height: 50px;"/>
    </div>
    <div className="nav_institucional_coluna">
      <button id="btn_perfil" className="btn-rosa" onclick="navegar('./config_perfil.html')">Configurações</button>
    </div>
  </nav>
  );
}
