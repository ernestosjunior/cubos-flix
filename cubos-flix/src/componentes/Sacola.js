import React from "react";
import { useState } from "react";

import bagIcon from "../assets/images/bag-icon.svg";
import cupomIcon from "../assets/images/coupon-icon.svg";
import personIlustration from "../assets/images/person-illustration.svg";

function Sacola() {
  const [sacola, setSacola] = useState([]);
  return (
    <div className="sacola">
      <header>
        <img src={bagIcon} alt="sacola" />
        <h1>Sacola</h1>
      </header>
      <div className="sacola-main">
        <div className="sacola-vazia">
          <h1>Sua sacola está vazia</h1>
          <h2>Adicione filmes agora</h2>
          <img src={personIlustration} alt="" />
        </div>
        <div>{sacola}</div>
        <footer>
          <div>
            Insira seu cumpom
            <div className="input-cupom">
              <input placeholder="Cupom de desconto " />
              <button>
                <img src={cupomIcon} alt="" />
              </button>
            </div>
            <button className="btn-confirmacao">Confirme seus dados R$</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Sacola;
