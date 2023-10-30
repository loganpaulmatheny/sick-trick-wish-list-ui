import "./Card.css";

function Card({ stance, name, obstacle, tutorial }) {
  return (
    <div className="card">
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <a href={tutorial}>{tutorial}</a>
      <p>🗑️</p>
    </div>
  );
}

export default Card;
