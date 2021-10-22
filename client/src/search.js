import style from "./style-css/search.module.css";
import React, { useState } from "react";

function Search({ setWantToSearch, search, setSearch, setCoctails }) {
  const [error, setError] = useState(false);

  const searchCoctailHandler = () => {
    console.log("handler...");
    const searchCoctail = async () => {
      const promise = await fetch(`http://localhost:5000/coctail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          search
        })
      });

      if (promise.status === 200) {
        const data = await promise.json();
        setCoctails(data.drinks);
      } else {
        setError(true);
        setTimeout(function () {
          setError(false);
        }, 3000);
      }
    };
    searchCoctail();
    setTimeout(function () {
      setWantToSearch(false);
    }, 3000);
  };

  return (
    <div id={style.container}>
      <h2>Searching bar</h2>
      <label>Name of coctail</label>
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={(e) => searchCoctailHandler()}>Search</button>
      {error ? <div id={style.error}>Error: data not found!</div> : <div></div>}
    </div>
  );
}

export default Search;
