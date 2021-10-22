import style from "./style-css/coctail.module.css";
import React, { useState, useEffect } from "react";
import Search from "./search";

function Coctail() {
  const [coctails, setCoctails] = useState([]);
  const [search, setSearch] = useState("");
  // The number of elements equal to the number of ingredients
  let counter = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [wantToSearch, setWantToSearch] = useState(false);

  const newCoctailHandler = () => {
    async function loadCoctail() {
      const promise = await fetch(`http://localhost:5000/coctail`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await promise.json();

      if (promise.status === 200) {
        console.log(data.drinks[0]);
        setCoctails(data.drinks);
      } else {
        console.log("PROBLEM --------------------");
      }
    }

    loadCoctail();
  };

  return (
    <div id={style.mainContainer}>
      {wantToSearch ? (
        <Search
          setWantToSearch={setWantToSearch}
          search={search}
          setSearch={setSearch}
          setCoctails={setCoctails}
        />
      ) : (
        <div></div>
      )}
      <div id={style.buttons}>
        <button onClick={(e) => newCoctailHandler()} className={style.button}>
          New Coctail
        </button>
        <button onClick={(e) => setWantToSearch(true)} className={style.button}>
          Search Coctail
        </button>
      </div>
      {coctails.map((coctail, index) => (
        <div id={style.container} key={coctail.idDrink}>
          <img
            id={style.picture}
            src={coctail.strDrinkThumb}
            alt={coctail.strDrink}
          />

          <div id={style.details}>
            <h2> {coctail.strDrink}</h2>
            <hr />
            <div>Receipt:</div>
            <ol>
              {counter.map((ingr, index) =>
                coctail[`strIngredient${index + 1}`] !== null ? (
                  <li key={index}>
                    {coctail[`strMeasure${index + 1}`]}
                    {coctail[`strIngredient${index + 1}`]}
                  </li>
                ) : (
                  <div></div>
                )
              )}
            </ol>
            <div>
              Instructions:
              <p> {coctail.strInstructions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coctail;
