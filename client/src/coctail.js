import style from "./style-css/coctail.module.css";
import React, { useState, useEffect } from "react";

function Coctail() {
  const [coctails, setCoctails] = useState([]);
  const [search, setSearch] = useState("");
  let ingredients = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
    "strIngredient8",
    "strIngredient9",
    "strIngredient10",
    "strIngredient11",
    "strIngredient12",
    "strIngredient13",
    "strIngredient14",
    "strIngredient15"
  ];

  console.log("Koktélok.", coctails, typeof ingredients, ingredients);
  const newCoctailHandler = () => {
    console.log("button clicked");
    async function loadCoctail() {
      const promise = await fetch(`http://localhost:5000/coctail`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await promise.json();
      const status = promise.status;

      if (status === 200) {
        console.log("GET data is OK *****************", data.drinks[0]);
        setCoctails(data.drinks);
      } else {
        console.log("PROBLEM --------------------");
      }
    }

    loadCoctail();
  };

  const searchCoctailHandler = () => {
    console.log("button clicked");
  };

  return (
    <div id={style.mainContainer}>
      {coctails.map((coctail, index) => (
        <div id={style.container} key={index}>
          <img
            id={style.picture}
            src={coctail.strDrinkThumb}
            alt={coctail.strDrink}
          />

          <div id={style.details}>
            <h2> {coctail.strDrink}</h2>
            <ol>
              {ingredients.map((ingr, index) =>
                coctail[ingr] !== null ? (
                  <li key={index}>{coctail[ingr]}</li>
                ) : (
                  <div></div>
                )
              )}
            </ol>
            <p> {coctail.strInstructions}</p>
          </div>
        </div>
      ))}

      <div id={style.buttons}>
        <button onClick={(e) => newCoctailHandler()} className={style.button}>
          New Coctail
        </button>
        <button
          onClick={(e) => searchCoctailHandler()}
          className={style.button}
        >
          Search Coctail
        </button>
      </div>
    </div>
  );
}

export default Coctail;
