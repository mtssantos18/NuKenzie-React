import "./styles.css";
import nuKenzie1 from "../../images/nuKenzie1.svg";
import nuBackground from "../../images/nuBackground.svg";

function LandingPage({ login }) {
  return (
    <main className="containerStart">
      <section className="firstSec">
        <img src={nuKenzie1} alt="Nu Kenzie" />
        <p className="initialText">Centralize o controle das suas finanças</p>
        <small className="smallText">de forma rápida e segura</small>
        <button onClick={login}>Iniciar</button>
      </section>

      <section className="imgSec">
        <img className="bgImg" src={nuBackground} alt="background" />
      </section>
    </main>
  );
}

export default LandingPage;
