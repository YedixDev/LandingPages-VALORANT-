import ImgNewAgent from "../img/vyse.webp";
import PowerIcon1 from "../img/icon-1.png";
import PowerIcon2 from "../img/icon-2.png";
import PowerIcon3 from "../img/icon-3.png";
import PowerIcon4 from "../img/icon-4.png";

const NewAgent = () => {
  return (
    <div className="content-agent">
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
            <img src={PowerIcon1} alt="Poder 1" className="power-icon" />
            <img src={PowerIcon2} alt="Poder 2" className="power-icon" />
            <img src={PowerIcon3} alt="Poder 3" className="power-icon" />
            <img src={PowerIcon4} alt="Poder 4" className="power-icon" />
          </div>
          <div className="power-description">
            Cortacaminos: EQUIPA filamentos de metal líquido. DISPARA para
            colocar una pared oculta a modo de trampa. Cuando un enemigo la
            cruce, una pared indestructible saldrá del suelo detrás suyo. La
            pared durará un breve periodo antes de disiparse.
          </div>
        </div>
      </div>
      <img src={ImgNewAgent} alt="Img-Vyse" className="img-vyse" />
    </div>
  );
};

export default NewAgent;
