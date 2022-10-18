import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";

function Form({ listTransactions, setListTransactions, setIsFiltered }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  function handleTransactions() {
    const transaction = {
      description,
      type,
      value: type === "Despesa" ? -value : Number(value),
    };

    setListTransactions([...listTransactions, transaction]);
    toast.success("Transação adicionada com sucesso");
    setIsFiltered(false);
  }

  return (
    <form
      id="getEvent"
      onSubmit={(event) => handleTransactions(event.preventDefault())}
    >
      <fieldset className="formDescription">
        <label className="fontStyle">Descrição</label>
        <div className="descriptionValue">
          <input
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Digite aqui sua descrição"
          />
          <small>Ex: Compra de roupas</small>
        </div>
      </fieldset>

      <div className="valuesDiv">
        <fieldset className="fieldValue">
          <label className="fontStyle">Valor</label>
          <input
            type="number"
            step="any"
            onChange={(event) => setValue(event.target.value)}
            placeholder="1.00"
          />
        </fieldset>
        <fieldset className="fieldSelect">
          <label className="fontStyle">Tipo de Transação</label>
          <select name="type" onChange={(event) => setType(event.target.value)}>
            <option value="">--Escolha--</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </fieldset>
      </div>

      <button id="formBtn" type="submit">
        Iserir Valor
      </button>
    </form>
  );
}

export default Form;
