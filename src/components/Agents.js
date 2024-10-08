const Agents = (props) => {
  const { agents } = props;

  return (
    <div className="characters">
      <div className="container-characters">
        {agents && agents.length > 0 ? (
          agents.map((agent, index) => (
            <div className="character-container" key={index}>
              <div>
                <img src={agent.displayIcon} alt={agent.displayName} />
              </div>
              <h3>{agent.displayName}</h3>
              <p>{agent.description || "No hay descripción disponible."}</p>
              <p>
                <strong>Rol:</strong> {agent.role?.displayName || "Sin rol"}
              </p>
              <h4>Habilidades:</h4>
              <ul>
                {agent.abilities && agent.abilities.length > 0 ? (
                  agent.abilities.map((ability) => (
                    <li key={ability.uuid}>
                      <strong>{ability.displayName}</strong>
                    </li>
                  ))
                ) : (
                  <li>No hay habilidades disponibles.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No se encontraron agentes.</p>
        )}
      </div>
    </div>
  );
};

export default Agents;
