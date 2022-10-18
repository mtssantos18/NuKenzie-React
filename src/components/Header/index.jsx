import "./styles.css";
import nuKenzie from "../../images/nuKenzie.svg";

function Header({ logout }) {
  return (
    <header className="navBar">
      <img src={nuKenzie} alt="Nu Kenzie" />

      <button className="leaveBtn" onClick={logout}>
        Início
      </button>
    </header>
  );
}

export default Header;
