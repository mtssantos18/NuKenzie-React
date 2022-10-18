import { useState } from "react";
import "../../App.css";
import "../../reset.css";
import Form from "../../components/Form";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import { toast } from "react-toastify";

function LoggedIn({ logout }) {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterTransactions, setFilterTransactions] =
    useState(listTransactions);

  const [isFiltered, setIsFiltered] = useState(false);

  const handleList = (removeCard) => {
    const filteredTransactions = listTransactions.filter(
      (elem) => elem.description !== removeCard
    );
    setListTransactions(filteredTransactions);

    if (isFiltered) {
      const filteredItems = filterTransactions.filter(
        (elem) => elem.description !== removeCard
      );
      setFilterTransactions(filteredItems);
    }

    toast.error("Transação removida com sucesso");
  };

  return (
    <>
      <Header logout={logout} />
      <main className="container">
        <section className="getInformation">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setIsFiltered={setIsFiltered}
          />

          {listTransactions.length !== 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>

        <section className="showInformation">
          {listTransactions.length !== 0 && (
            <Filter
              listTransactions={listTransactions}
              filterTransactions={filterTransactions}
              setFilterTransactions={setFilterTransactions}
              setIsFiltered={setIsFiltered}
            />
          )}

          <List
            listTransactions={
              isFiltered ? filterTransactions : listTransactions
            }
            handleList={handleList}
          />
        </section>
      </main>
    </>
  );
}

export default LoggedIn;
