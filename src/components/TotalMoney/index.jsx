import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="box">
      <div className="priceBox">
        <p className="totalPriceText">Valor total:</p>
        <p className="totalPrice">
          {listTransactions
            .reduce((acc, currentValue) => acc + currentValue.value, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </div>
      <small className="moneyCaption">O valor se refere ao saldo</small>
    </div>
  );
}
export default TotalMoney;
