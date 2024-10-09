import { SiValorant } from "react-icons/si";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <SiValorant />
      </div>
      <div className="nav">
        <a href="#welcome">Home</a>
        <a href="#new-agent">New Agent</a>
        <a href="#news">News</a>
        <a href="#">This is Valorant</a>
      </div>

      <div className="btn-play">
        <a
          href="https://playvalorant.com/es-es/download/"
          className="btn btn-1"
        >
          Play now
        </a>
      </div>
    </div>
  );
};

export default Header;
