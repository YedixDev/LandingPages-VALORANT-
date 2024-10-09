import { useState } from "react";
import "./App.css";
import Header from "./pages/Header";
import Agents from "./components/Agents";
import Section from "./pages/Section";
import NewAgent from "./pages/NewAgent";
import News from "./pages/News";

function App() {
  const [agents, setAgents] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://valorant-api.com/v1/agents");
    const agentsApi = await api.json();
    setAgents(agentsApi.data);
  };

  return (
    <div className="App">
      <div className="container-header">
        <Header />
      </div>
      <div className="container">
        <Section />
        <NewAgent />
        <News />
        <h1 className="title">Agentes de Valorant</h1>
        {agents ? (
          <Agents agents={agents} />
        ) : (
          <button onClick={reqApi} className="btn-search">
            Buscar Agentes
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
