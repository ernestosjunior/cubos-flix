import React, { useState } from "react";

import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import favoritosIcon from "../../assets/images/favoritos.svg";
import promotionIcon from "../../assets/images/promotion-icon.svg";
import profileImg from "../../assets/images/emoji.jpg";

import "./header.css";

function Header(props) {
  const [inputBusca, setInputBusca] = useState("");

  function textoBusca(texto) {
    props.campoBusca(texto);
    setInputBusca("");
    return;
  }

  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <form
        className="input-header"
        onSubmit={(e) => {
          e.preventDefault();
          textoBusca(inputBusca);
        }}
      >
        <input
          type="text"
          placeholder="Pesquise filmes..."
          value={inputBusca}
          onChange={(e) => setInputBusca(e.target.value)}
          // onKeyPress={(e) => textoBusca(e)}
        />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      <button>
        <img src={favoritosIcon} alt="favoritos" />
        Favoritos
      </button>
      <button>
        <img src={promotionIcon} alt="promoções" />
        Promoções
      </button>
      <div className="profile-container">
        <p>Bem vindo, Ernesto</p>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
