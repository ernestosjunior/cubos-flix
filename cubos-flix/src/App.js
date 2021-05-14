import "./App.css";

import { useEffect, useState } from "react";

import Movies from "./data.js";

import Filmes from "./componentes/Filmes.js";
import Header from "./componentes/Header.js";
import Sacola from "./componentes/Sacola.js";
import TopFilmes from "./componentes/TopFilmes";
import Cupom from "./componentes/Cupom.js";

const filtros = [
  {
    nome: "Todos",
    valor: "todos",
  },
  {
    nome: "Ação",
    valor: "action",
  },
  {
    nome: "Romance",
    valor: "romance",
  },
  {
    nome: "Ficcção Científica",
    valor: "science fiction",
  },
  {
    nome: "Terror",
    valor: "horror",
  },
];

function App() {
  const [filtro, setFiltro] = useState("todos");
  const [cupom, setCupom] = useState("");
  const [sacola, setSacola] = useState([]);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);

  function handleAdicionarSacola(title) {
    const produto = Movies.find((f) => f.title === title);
    const indice = sacola.findIndex((produto) => produto.title === title);
    if (indice === -1) {
      produto.quantidade = 1;
      setSacola([...sacola, produto]);
    } else {
      sacola[indice].quantidade += 1;
    }
  }

  useEffect(() => {
    if (filtro === "todos") {
      setFilmesFiltrados(Movies);
    } else {
      const filmes = Movies.filter((filme) =>
        filme.categories.includes(filtro)
      );
      setFilmesFiltrados(filmes);
    }
  }, [filtro]);

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Cupom preencherCupom={(codigo) => setCupom(codigo)} />
          <article>
            <h2>Top Filmes</h2>
            <div className="container-top-filmes">
              {Movies.slice(0, 5).map((filme) => (
                <TopFilmes
                  backgroundImg={filme.backgroundImg}
                  title={filme.title}
                  price={filme.price}
                  starsCount={filme.starsCount}
                  id={filme.id}
                  addSacola={(produto) => handleAdicionarSacola(produto)}
                />
              ))}
            </div>
          </article>
          <article>
            <h2>Filmes</h2>
            <div className="container-filmes">
              {filtros.map((f) => (
                <button
                  id={filtro === f.valor ? "btn-filtro-selecionado" : ""}
                  onClick={() => setFiltro(f.valor)}
                  className="btns-filtro"
                >
                  {f.nome}
                </button>
              ))}
              {filmesFiltrados.map((filme) => (
                <Filmes
                  backgroundImg={filme.backgroundImg}
                  title={filme.title}
                  price={filme.price}
                  starsCount={filme.starsCount}
                  addSacola={(produto) => handleAdicionarSacola(produto)}
                />
              ))}
            </div>
          </article>
        </section>
        <aside>
          <Sacola cupom={cupom} sacola={sacola} />
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
