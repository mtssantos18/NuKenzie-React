import "./styles.css";

function Filter({ listTransactions, setFilterTransactions, setIsFiltered }) {
  const filterAll = () => {
    setIsFiltered(false);
  };

  const filteredTransactions = (filterType) => {
    setIsFiltered(true);
    setFilterTransactions(
      listTransactions.filter((elem) => elem.type === filterType)
    );
  };

  return (
    <div className="filterDiv">
      <h2 className="title">Resumo financeiro</h2>
      <div className="buttonsDiv">
        <button onClick={() => filterAll()}>Todos</button>
        <button onClick={() => filteredTransactions("Entrada")}>
          Entradas
        </button>
        <button onClick={() => filteredTransactions("Despesa")}>
          Despesas
        </button>
      </div>
    </div>
  );
}

export default Filter;
