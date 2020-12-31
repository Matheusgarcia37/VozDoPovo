import React from "react";

import {FiArrowRight} from 'react-icons/fi';

import '../styles/global.css'
import '../styles/pages/landing.css'

import icon from '../images/icon.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <header>
          <div className="logo">
            <img src={icon} alt="icon" />
            <h2>Voz do povo</h2>
          </div>
          <a href="" className="login-adm">
            <FiArrowRight size={15} /> Admin access
          </a>
        </header>
        <div id="buttonChoise">
          <a href="">Denúncia</a>
          <a href="">Sugestão</a>
          <a href="">Índice de efetividade da gestão</a>
        </div>
        <main>
          <h1>Fale por todos</h1>

          <p>Aponte os problemas ou deficiências de nossa cidade</p>
        </main>
      </div>
    </div>
  );
}

export default Landing;
