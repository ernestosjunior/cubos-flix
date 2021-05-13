import "./App.css";

import Movies from "./data.js";

import Filmes from "./componentes/Filmes.js";
import Header from "./componentes/Header.js";
import Sacola from "./componentes/Sacola.js";
import Filtros from "./componentes/Filtros.js";
import TopFilmes from "./componentes/TopFilmes";
import Cupom from "./componentes/Cupom.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Cupom />
          <article>
            <h2>Top Filmes</h2>
            <div className="container-top-filmes">
              {Movies.slice(0, 5)
                .filter((filme) => filme.starsCount >= 8)
                .map((filme) => (
                  <TopFilmes
                    backgroundImg={filme.backgroundImg}
                    title={filme.title}
                    price={filme.price}
                    starsCount={filme.starsCount}
                  />
                ))}
            </div>
          </article>
          <article>
            <h2>Filmes</h2>
            <Filtros />
            <div className="container-filmes">
              {Movies.map((filme) => (
                <Filmes
                  backgroundImg={filme.backgroundImg}
                  title={filme.title}
                  price={filme.price}
                  starsCount={filme.starsCount}
                />
              ))}
            </div>
          </article>
        </section>
        <aside>
          <Sacola />
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
