import React, { useState } from "react";
import "../styles/section.css";
import ImgNewAgent from "../img/vyse.webp";
import PowerIcon1 from "../img/icon-1.png";
import PowerIcon2 from "../img/icon-2.png";
import PowerIcon3 from "../img/icon-3.png";
import PowerIcon4 from "../img/icon-4.png";

const NewAgent = () => {
  const [selectedPower, setSelectedPower] = useState({
    title: "",
    description:
      "Conoce las habilidades del nuevo Agente haciendo click en los iconos.",
  });

  // Descripciones de los poderes
  const powers = {
    power1: {
      title: "Cortacaminos:",
      description:
        "EQUIPA filamentos de metal líquido. DISPARA para colocar una pared oculta a modo de trampa. Cuando un enemigo la cruce, una pared indestructible saldrá del suelo detrás suyo. La pared durará un breve periodo antes de disiparse.",
    },
    power2: {
      title: "Rosa Metálica:",
      description:
        "EQUIPA una Rosa Metálica. Apunta a una superficie y DISPARA para colocar una Rosa Metálica camuflada, o usa el DISPARO SECUNDARIO para colocarla al otro lado de la superficie seleccionada. REUTILÍZALA para cegar a todos los jugadores que la vean.",
    },
    power3: {
      title: "Enredadera Filosa:",
      description:
        "EQUIPA un nido de metal líquido. DISPARA para lanzarlo. Tras aterrizar, el nido se vuelve invisible. Al ACTIVARSE, se extiende hasta convertirse en una enredadera filosa grande que ralentizará e infligirá daño a todos los jugadores que se muevan a través de ella.",
    },
    power4: {
      title: "Jardín Magnético:",
      description:
        "EQUIPA un matorral de metal líquido. DISPARA para lanzar el metal que sale de ti como un torrente de espinas metálicas sobre el campo de batalla, lo que BLOQUEA las armas principales de los enemigos tras una breve carga.",
    },
  };

  return (
    <div id="new-agent" className="content-agent">
      <div className="new-agent">
        <div className="title-agent">New Agent</div>
        <div className="details-agent">
          <div className="name">VYSE:</div>
          <div className="description">
            Vyse, la mente maestra metálica, libera metal líquido para aislar,
            atrapar y desarmar a sus enemigos. Mediante su astucia y
            manipulación, obliga a quienes se opongan a ella a temerle al campo
            de batalla mismo.
          </div>
        </div>
        <div className="power-agent">
          <div className="power-icon">
            <img
              src={PowerIcon1}
              alt="Poder 1"
              className="power-icon"
              onClick={() => setSelectedPower(powers.power1)}
            />
            <img
              src={PowerIcon2}
              alt="Poder 2"
              className="power-icon"
              onClick={() => setSelectedPower(powers.power2)}
            />
            <img
              src={PowerIcon3}
              alt="Poder 3"
              className="power-icon"
              onClick={() => setSelectedPower(powers.power3)}
            />
            <img
              src={PowerIcon4}
              alt="Poder 4"
              className="power-icon"
              onClick={() => setSelectedPower(powers.power4)}
            />
          </div>
          <div className="power-description">
            <h2>{selectedPower.title}</h2>
            <p>{selectedPower.description}</p>
          </div>
        </div>
      </div>
      <img src={ImgNewAgent} alt="Img-Vyse" className="img-vyse" />
    </div>
  );
};

export default NewAgent;
