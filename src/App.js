import { useState } from "react";

import "./App.css";
import "./reset.css";

import LoggedIn from "./pages/LoggedIn";
import LandingPage from "./pages/LandingPage";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);

    if (isLoggedIn) {
      toast.success("Até a próxima!");
    } else {
      toast.success("Seja bem-vindo!!!");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isLoggedIn ? (
        <LoggedIn logout={handleLogin} />
      ) : (
        <LandingPage login={handleLogin} />
      )}
    </>
  );
}

export default App;
