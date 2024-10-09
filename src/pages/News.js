import React, { useState } from "react";
import "../styles/news.css"; // Asegúrate de que este archivo esté correctamente vinculado
import ImgConsola from "../img/consolas.jpg";
import ImgNewAgent from "../img/newagenteeee.jpg";

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsCards = [
    {
      image: ImgConsola,
      category: "Desarrollo",
      link: "https://playvalorant.com/es-mx/news/game-updates/about-valorant-console-availability/",
      title: "Disponibilidad de VALORANT en consolas",
      description:
        "Actualización sobre la disponibilidad de VALORANT para consolas.",
    },
    {
      image: ImgNewAgent,
      category: "Actualizaciones del Juego",
      link: "https://playvalorant.com/es-mx/news/game-updates/about-valorant-console-availability/",
      title: "Nuevo Agente en VALORANT",
      description: "Conoce el nuevo agente que se une a VALORANT.",
    },
    {
      image: ImgNewAgent,
      category: "Actualizaciones del Juego",
      link: "https://playvalorant.com/es-mx/news/game-updates/about-valorant-console-availability/",
      title: "Mejoras en la jugabilidad",
      description: "Actualización sobre mejoras en la jugabilidad de VALORANT.",
    },
    {
      image: ImgNewAgent,
      category: "Actualizaciones del Juego",
      link: "https://playvalorant.com/es-mx/news/game-updates/about-valorant-console-availability/",
      title: "Eventos especiales",
      description: "Actualización sobre eventos especiales en VALORANT.",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < newsCards.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  // Obtener solo las cartas que se van a mostrar (2 a la vez)
  const displayedCards = newsCards.slice(currentIndex, currentIndex + 2);

  return (
    <div id="news" className="container-news">
      <div className="news-header">
        <div className="header-title-1">Noticias más recientes</div>
        <div className="header-title-2">
          <a href="https://playvalorant.com/es-mx/news/">
            Ir a la página de Noticias
          </a>
        </div>
      </div>
      <div className="slider">
        <button className="nav-button" onClick={goToPrevious}>
          ←
        </button>
        <div className="container-card">
          {displayedCards.map((card, index) => (
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
        <button className="nav-button" onClick={goToNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default News;
