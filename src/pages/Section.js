import "../styles/section.css";
import welcomeVideo from "../video/welcome.valorant.mp4";

const Section = () => {
  return (
    <>
      <div id="welcome" className="container-section">
        <div className="hero-section">
          <video className="video-section" muted autoPlay loop>
            <source src={welcomeVideo} type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="title-section">
            <div className="welcome">Valorant</div>
            <div className="span">
              Un juego de disparos táctico 5v5 basado en Agentes con habilidades
              especiales.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
