import { useContext } from "react";
import "../styles/success.css";
import tick from "../assets/images/icon-list.svg";
import { SuccessContext, EmailContext } from "../App";
const Success = () => {
  const [isSuccessfull, setIsSuccessfull] = useContext(SuccessContext);
  const [emailAddress, setEmailAddress] = useContext(EmailContext);

  const handleSuccessfull = () => {
    setIsSuccessfull(false);
  };
  return (
    <div className="success_main">
      <div className="success_container">
        <img className="success-img" src={tick} alt="" />
        <div className="title top">Thanks for</div>
        <div className="title">subscribing!</div>

        <div className="success-text">
          <p className="success-p">
            A confirmation email has been sent to
            <span> {emailAddress}. </span>
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <button className="success-btn" onClick={handleSuccessfull}>
          Dismiss message{" "}
        </button>
      </div>
    </div>
  );
};

export default Success;
