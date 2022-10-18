import "./styles.css";

function EmptyCard() {
  return (
    <>
      <li className="noData"> Você ainda não possui nenhum lançamentos</li>
      <li className="emptyList">
        <div className="div1"></div>
        <div className="div2"></div>
      </li>
      <li className="emptyList">
        <div className="div1"></div>
        <div className="div2"></div>
      </li>
      <li className="emptyList">
        <div className="div1"></div>
        <div className="div2"></div>
      </li>
    </>
  );
}

export default EmptyCard;
