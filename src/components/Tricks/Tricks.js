import "./Tricks.css";
import Card from "../Card/Card";

function Tricks({ tricks }) {
  const trickCards = tricks.map((trick) => {
    return (
      <Card
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    );
  });
  return <div className="tricks-container">{trickCards}</div>;
}

export default Tricks;
