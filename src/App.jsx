import { useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Success from "./components/Success";

export const SuccessContext = createContext();
export const EmailContext = createContext();

function App() {
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <>
      <SuccessContext.Provider value={[isSuccessfull, setIsSuccessfull]}>
        <EmailContext.Provider value={[emailAddress, setEmailAddress]}>
          {!isSuccessfull ? <Home /> : <Success />}
        </EmailContext.Provider>
      </SuccessContext.Provider>
    </>
  );
}

export default App;
