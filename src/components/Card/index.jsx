import { FaTrash } from "react-icons/fa";
import "./styles.css";

function Card({ elem, handleList }) {
  const { description, type, value } = elem;

  return (
    <li className="card">
      <div className="cardDiv">
        <h3 className="description">{description}</h3>
        <p className="price">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button className="removeBtn" onClick={() => handleList(description)}>
          <FaTrash
            className="test"
            style={{ color: "#5B6166", width: "8.56px", height: "9.78px" }}
            onMouseOver={({ target }) => (target.style.color = "#f8f9fa")}
            onMouseOut={({ target }) => (target.style.color = "#5B6166")}
          />
        </button>
      </div>
      <p className="type">{type}</p>
    </li>
  );
}

export default Card;
