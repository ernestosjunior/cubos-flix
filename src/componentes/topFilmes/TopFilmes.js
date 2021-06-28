import React from "react";

import starIcon from "../../assets/images/star.svg";
import goldenStar from "../../assets/images/golden-star.svg";

import "./topFilmes.css";

function TopFilmes(props) {
  return (
    <div className="card-filme">
      <button className="btn-favoritar">
        <img src={starIcon} alt="" />
      </button>
      <img className="card-background" src={props.backgroundImg} alt="" />
      <div className="card-filme-footer">
        <div className="filme-titulo-avaliacao">
          <h1>{props.title}</h1>
          <div className="filme-avaliacao">
            <img src={goldenStar} alt="" />
            <p>{props.starsCount}</p>
          </div>
        </div>
        <button
          className="card-btn-sacola"
          onClick={() => props.addSacola(props.title)}
        >
          Sacola <span>R$ {props.price}</span>
        </button>
      </div>
    </div>
  );
}

export default TopFilmes;
