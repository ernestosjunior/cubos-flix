import React from "react";
import { useState } from "react";

const filtros = [
  {
    nome: "Todos",
    valor: "todos",
  },
  {
    nome: "Ação",
    valor: "acao",
  },
  {
    nome: "Romance",
    valor: "romance",
  },
  {
    nome: "Ficcção Científica",
    valor: "ficcao-cinetifica",
  },
  {
    nome: "Terror",
    valor: "terror",
  },
];

function Filtros(props) {
  const [filtro, setFiltro] = useState("todos");
  return (
    <div className="btns-filtro">
      {filtros.map((f) => (
        <button
          id={filtro === f.valor ? "btn-filtro-selecionado" : ""}
          onClick={() => setFiltro(f.valor)}
        >
          {f.nome}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
