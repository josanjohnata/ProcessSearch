import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import MaskedInput from "./useSearch";
import data from "../../data/process.json";
import _ from "underscore";

import style from "./search.module.css";

export default function Input() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [acronyms, setAcronyms] = useState([]);
  const items = data.items;

  const navigate = useNavigate();
  function redirectSearchResults(e) {
    e.preventDefault();
    const getProcess = items.filter(
      (process) => process.numero_processo === searchInput
    );
    const getPossibleProcessNumber = items.filter(
      (acronym) => acronym.siglaTribunal === selectedCourt
    );
    const checkProcessNumberAndCourt = getPossibleProcessNumber.some(
      (item) => item.numero_processo === searchInput
    );
    if (!checkProcessNumberAndCourt) {
      return window.alert("Número do processo não condiz com o tribunal!");
    }
    navigate(`/processResults/${getProcess[0].id}`, { replace: true });
  }

  function handleCourtAcronyms(items) {
    const acronymsArrayFiltered = _.uniq(items, (x) => x.siglaTribunal);
    setAcronyms(acronymsArrayFiltered);
  }

  useEffect(() => {
    handleCourtAcronyms(items);
  }, [items]);

  return (
    <>
      <form className={style.sectionSearch}>
        <div className={style.selectCourt}>
          <label>Selecione um tribunal</label>
          <select
            className={style.selectCourtSection}
            value={selectedCourt}
            onChange={(e) => setSelectedCourt(e.target.value)}
          >
            <option value="" disabled="disabled">
              Tribunal
            </option>
            {acronyms.length > 0
              ? acronyms.map((item, index) => {
                  return (
                    <option value={item.siglaTribunal} key={index} required>
                      {item.siglaTribunal}
                    </option>
                  );
                })
              : null}
          </select>
        </div>

        <div className={style.processNumber}>
          <label>Número do processo</label>
          <MaskedInput
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>

        <button
          className={style.search}
          onClick={(e) => redirectSearchResults(e)}
        >
          Buscar
        </button>
      </form>
    </>
  );
}
