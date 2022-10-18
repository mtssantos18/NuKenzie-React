import "./styles.css";
import Card from "../Card";
import EmptyCard from "../EmptyCard";

function List({ listTransactions, handleList }) {
  return (
    <ul>
      {listTransactions.length === 0 ? (
        <EmptyCard />
      ) : (
        listTransactions.map((elem, index) => (
          <Card key={index} elem={elem} handleList={handleList} />
        ))
      )}
    </ul>
  );
}

export default List;
