import style from "./style-css/coctail.module.css";

function Coctail() {
  return (
    <div id={style.mainContainer}>
      <div id={style.container}>
        <div id={style.picture}>Picture</div>
        <div id={style.details}>Details</div>
      </div>

      <div id={style.buttons}>
        <button className={style.button}>New Coctail</button>
        <button className={style.button}>Search Coctail</button>
      </div>
    </div>
  );
}

export default Coctail;
