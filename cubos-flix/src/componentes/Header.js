import React from "react";

import logo from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search-icon.svg";
import favoritosIcon from "../assets/images/favoritos.svg";
import promotionIcon from "../assets/images/promotion-icon.svg";
import profileImg from "../assets/images/profile.jpg";

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <div className="input-header">
        <input type="text" placeholder="Pesquise filmes..." />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <button>
        <img src={favoritosIcon} alt="favoritos" />
        Favoritos
      </button>
      <button>
        <img src={promotionIcon} alt="promoções" />
        Promoções
      </button>
      <div className="profile-container">
        <p>Bem vindo, Dina</p>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
