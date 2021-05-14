import "./App.css";

import { useEffect, useState } from "react";

import Movies from "./data.js";

import Filmes from "./componentes/filmes/Filmes.js";
import Header from "./componentes/header/Header.js";
import Sacola from "./componentes/sacola/Sacola.js";
import TopFilmes from "./componentes/topFilmes/TopFilmes";
import Cupom from "./componentes/cupom/Cupom.js";

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
  const [campoBusca, setCampoBuscar] = useState("");

  function handleAdicionarSacola(title) {
    const produto = Movies.find((f) => f.title === title);
    const indice = sacola.findIndex((produto) => produto.title === title);
    if (indice === -1) {
      produto.quantidade = 1;
      setSacola([...sacola, produto]);
    } else {
      sacola[indice].quantidade += 1;
      setSacola([...sacola]);
    }
  }

  function handleRetirarSacola(title) {
    const produto = Movies.find((f) => f.title === title);
    const indice = sacola.findIndex((produto) => produto.title === title);
    const espelhoSacola = [...sacola];

    if (indice !== -1) {
      if (produto.quantidade === 1) {
        espelhoSacola.splice(indice, 1);
      } else {
        espelhoSacola[indice].quantidade -= 1;
      }
      setSacola([...espelhoSacola]);
      return;
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

  useEffect(() => {
    const filmeBuscado = Movies.filter((f) => f.title.includes(campoBusca));
    if (filmeBuscado) {
      setFilmesFiltrados(filmeBuscado);
    } else {
      setFilmesFiltrados(Movies);
    }
  }, [campoBusca]);

  return (
    <div className="App">
      <Header campoBusca={(texto) => setCampoBuscar(texto)} />
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
          <Sacola
            cupom={cupom}
            sacola={sacola}
            remover={handleRetirarSacola}
            adicionar={handleAdicionarSacola}
          />
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
