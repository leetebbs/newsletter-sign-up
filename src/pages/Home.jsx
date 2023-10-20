import { useState, useContext } from "react";
import "../styles/home.css";
import tick from "../assets/images/icon-list.svg";
import illustration from "../assets/images/illustration-sign-up-desktop.svg";
import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";
import { SuccessContext, EmailContext } from "../App";

const Home = () => {
  const [isSuccessfull, setIsSuccessfull] = useContext(SuccessContext);
  const [emailAddress, setEmailAddress] = useContext(EmailContext);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [check, setCheck] = useState(false);

  if (check) {
    console.log("check", check);
    setIsSuccessfull(true);
    setEmailAddress(email);
  }

  const handleEmail = () => {
    if (isValidEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(email));
      console.log(isValidEmail);

      setCheck(emailRegex.test(email));
      setTimeout(() => {
        setIsValidEmail(true);
        setEmail("");
      }, 2000);
    } else {
      console.log(isValidEmail);
      setTimeout(() => {
        setIsValidEmail(true);
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  return (
    <>
      <div className="sign-up-container">
        <img className="mobileImg" src={mobileIllustration} alt="" />
        <div className="main-text">
          <h1>Stay updated!</h1>

          <div className="text">
            Join 60,000+ product managers receiving monthly
          </div>
          <div className=""> updates on:</div>

          <ul>
            <li>
              <img src={tick} alt="" />
              Product discovery and building what matters
            </li>
            <li>
              <img src={tick} alt="" />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={tick} alt="" />
              And much more!
            </li>
          </ul>
          <div className="email_valid">
            <p className="email">Email address</p>
            {isValidEmail ? (
              <p className="valid-email"></p>
            ) : (
              <p className="invalid-email invalid">Valid email required</p>
            )}
          </div>

          {isValidEmail ? (
            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleInputChange}
              className={isValidEmail ? "" : "invalid-input"}
            />
          ) : (
            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleInputChange}
              className="not-valid"
            />
          )}

          <button onClick={handleEmail}>Subscribe to monthly newsletter</button>
        </div>
        <div className="img_container">
          <img className="desktopImg" src={illustration} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
