import style from "./style-css/coctail.module.css";

function Coctail() {
  const newCoctailHandler = () => {
    console.log("button clicked");
    async function loadCoctail() {
      const promise = await fetch(`http://localhost:5000/coctail`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const status = promise.status;

      if (status === 200) {
        console.log("GET data is OK *****************");
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
      <div id={style.container}>
        <div id={style.picture}>Picture</div>
        <div id={style.details}>Details</div>
      </div>

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
