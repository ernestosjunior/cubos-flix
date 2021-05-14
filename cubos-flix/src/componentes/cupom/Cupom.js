import React, { useState, useEffect, useRef } from "react";

import cupomIconCircle from "../../assets/images/coupon-circle-icon.svg";
import timeIcon from "../../assets/images/time-icon.svg";
import moneyImg from "../../assets/images/money.png";

import "./cupom.css";
function Cupom(props) {
  const [tempo, setTempo] = useState(300);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () => setTempo((tempoAnterior) => tempoAnterior - 1),
      1000
    );
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div
      className={tempo > 0 ? "cupom-desc" : "cupom-desc-none"}
      onClick={() => {
        setTempo(0);
        props.preencherCupom("HTMLNAOELINGUAGEM");
      }}
    >
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
            00:0{Math.floor(tempo / 60)}:{String(tempo % 60).padStart(2, "0")}
          </p>
        </div>
      </div>
      <img id="money-img" src={moneyImg} alt="" />
    </div>
  );
}

export default Cupom;
