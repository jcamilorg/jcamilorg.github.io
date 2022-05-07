import React from "react";
import DefaultTempleate from "../Components/DefaultTempleate";

const Home = () => {
  return (
    <DefaultTempleate>
      <div className="container">
        <h1>Bienvenido a mi Pagina</h1>
        <h2>Esta es la pagina de Juan Camilo Ramirez</h2>
        <button> Juegos</button>
      </div>
    </DefaultTempleate>
  );
};

export default Home;
