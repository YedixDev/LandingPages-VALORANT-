import React from "react";
import "../styles/news.css"; // Asegúrate de que este archivo esté correctamente vinculado
import ImgConsola from "../img/consolas.jpg";
import ImgNewAgent from "../img/newagenteeee.jpg";
import ImgPlays from "../img/plays.jpg";

const News = () => {
  const newsCards = [
    {
      image: ImgConsola,
      category: "Desarrollo",
      link: "https://playvalorant.com/es-mx/news/game-updates/about-valorant-console-availability/",
      title: "Disponibilidad en consolas",
      description: "Se viene VALORANT para consolas.",
    },
    {
      image: ImgNewAgent,
      category: "Actualizaciones del Juego",
      link: "https://www.youtube.com/watch?v=CvoFNLl2li8&t=4s",
      title: "Nuevo Agente en VALORANT",
      description: "Conoce el nuevo agente de VALORANT.",
    },
    {
      image: ImgPlays,
      category: "Comunidad",
      link: "https://www.youtube.com/watch?v=9O1RakrnlJk",
      title: "Jugadas de VCTAscension",
      description: "Estas son algunas de las mejores plays.",
    },
  ];

  return (
    <div id="news" className="container-news">
      <div className="news-header">
        <div className="header-title-1">Noticias recientes</div>
        <div className="header-title-2">
          <a href="https://playvalorant.com/es-mx/news/">
            Ir a la página de Noticias
          </a>
        </div>
      </div>
      <div className="container-card">
        {newsCards.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.image}
              alt={`Card ${card.title}`}
              className="img-card"
            />
            <div className="card-description">
              <div className="card-span">{card.category}</div>
              <a className="card-link" href={card.link}>
                {card.title}
              </a>
              <div className="card-sub">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
