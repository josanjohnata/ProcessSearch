import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import style from "./searchResults.module.css";

import Data from "../../data/process.json";
const items = Data.items;

function SearchResults() {
  const { id } = useParams();

  const [processData, setProcessData] = useState();

  function getProcessData(id) {
    const processDataResult = items.filter(
      (process) => process.id === Number(id)
    );
    setProcessData(...processDataResult);
  }

  useEffect(() => {
    getProcessData(id);
  }, [id, processData]);

  const navigate = useNavigate();
  function redirectHome() {
    navigate('/', { replace: true });
  };

  return (
    <>
      {processData ? (
        <main>
          <header className={style.header}>
            <h1>
              Processo n. {processData.numeroprocessocommascara} do{" "}
              {processData.siglaTribunal}
            </h1>
            <p>Distribuído em {processData.datadisponibilizacao}</p>
          </header>

          <article>
            <section className={style.sectionBoxLeft}>
              <h3>Movimentações</h3>
              <div className={style.updateAtInfo}>
                <span>{processData.created_at}</span>
                <p>{processData.comunicacao}</p>
              </div>
              <div className={style.updateAtInfo}>
                <span>{processData.created_at}</span>
                <p>{processData.comunicacao}</p>
              </div>
              <div className={style.updateAtInfo}>
                <span>{processData.created_at}</span>
                <p>{processData.comunicacao}</p>
              </div>
              <div className={style.textInfo}>
                <span>{processData.created_at}</span>
                <p>{processData.texto}</p>
              </div>
            </section>
            <section className={style.sectionBoxRight}>
              <div className={style.processDetails}>
                <h4>Detalhes do processo</h4>
                <p>{processData.detalhe}</p>
                <p>{processData.detalhe}</p>
                <p>{processData.detalhe}</p>

                <hr />
              </div>

              <div className={style.relatedParties}>
                <h4>Partes envolvidas</h4>
                <p>{processData.destinatarios}</p>
                <span>Parte envolvida &bull; Exequente</span>
                <p>{processData.destinatarios}</p>
                <span>Parte envolvida &bull; Apelante</span>
                <p>{processData.destinatarios}</p>
                <span>Advogado envolvido</span>
                <p>{processData.destinatarios}</p>
                <span>Advogado envolvido &bull; OAB 002337/BA</span>
              </div>
            </section>
          </article>
          <button
            className={style.newSearch}
            onClick={(e) => redirectHome(e)}
          >
            Nova Busca
          </button>
        </main>
      ) : (
        <p>Error, sem informação do processo.</p>
      )}
    </>
  );
}

export default SearchResults;
