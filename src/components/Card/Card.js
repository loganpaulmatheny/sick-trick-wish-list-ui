import "./Card.css";

function Card({ stance, name, obstacle, tutorial, id, deleteTrick }) {
  return (
    <div className="card">
      <p>{stance}</p>
      <p>{name}</p>
      <p>{obstacle}</p>
      <a href={tutorial}>{tutorial}</a>
      <button
        onClick={() => {
          deleteTrick(id);
        }}
      >
        🗑️
      </button>
    </div>
  );
}

export default Card;
