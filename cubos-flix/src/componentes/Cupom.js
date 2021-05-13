import React, { useState, useEffect } from "react";

import cupomIconCircle from "../assets/images/coupon-circle-icon.svg";
import timeIcon from "../assets/images/time-icon.svg";
import moneyImg from "../assets/images/money.png";

function Cupom() {
  const [tempo, setTempo] = useState(5);

  return (
    <div className="cupom-desc">
      <div className="cupom-esquerda">
        <h1>Aproveite agora</h1>
        <div className="codigo-cupom">
          <img src={cupomIconCircle} alt="" />
          <p>Cupom: htmlnaoelinguagem</p>
        </div>
      </div>
      <div className="cupom-direita">
        <h2>Finaliza em:</h2>
        <div className="tempo-cupom">
          <img src={timeIcon} alt="" />
          <p>
            00:0{tempo % 60}:{String(Math.floor(tempo / 6)).padStart(2, "0")}
          </p>
        </div>
      </div>
      <img id="money-img" src={moneyImg} alt="" />
    </div>
  );
}

export default Cupom;
