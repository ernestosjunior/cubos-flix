import React, { useEffect } from "react";
import { useState } from "react";

import bagIcon from "../assets/images/bag-icon.svg";
import cupomIcon from "../assets/images/coupon-icon.svg";
import personIlustration from "../assets/images/person-illustration.svg";

function Sacola(props) {
  const [inputCupom, setInputCupom] = useState("");

  useEffect(() => {
    setInputCupom(props.cupom);
  }, [props.cupom]);

  return (
    <div className="sacola">
      <header>
        <img src={bagIcon} alt="sacola" />
        <h1>Sacola</h1>
      </header>
      <div className="sacola-main">
        <div
          className={props.sacola.length ? "sacola-vazia-none" : "sacola-vazia"}
        >
          <h1>Sua sacola está vazia</h1>
          <h2>Adicione filmes agora</h2>
          <img src={personIlustration} alt="" />
        </div>
        <div className="corpo-sacola">
          {props.sacola.map((p) => (
            <div className="item-sacola">
              <img src={p.backgroundImg} alt="" />
              <p>{p.title}</p>
              <p>R$ {p.price}</p>
              <p>{p.quantidade}</p>
            </div>
          ))}
        </div>
        <footer>
          <div>
            Insira seu cumpom
            <div className="input-cupom">
              <input
                placeholder="Cupom de desconto "
                value={inputCupom}
                onChange={(e) => setInputCupom(e.target.value)}
              />
              <button>
                <img src={cupomIcon} alt="" />
              </button>
            </div>
            <button
              hidden={props.sacola.length ? false : true}
              className="btn-confirmacao"
            >
              Confirme seus dados R$
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Sacola;
