//! Import's
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

//! Asset's
import styles from "../styles/Login.module.css";
import Header from "../components/header";

const LoginPage = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameVerification, setNameVerification] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [passwordVerification, setPasswordVerification] = useState(false);
  const [phoneVerification, setPhoneVerification] = useState(false);
  const [symbolVerification, setSymbolVerification] = useState(false);

  function signUp() {
    if (nameVerification && emailVerification && phoneVerification && passwordVerification) {
      return;
    } else {
      alert("Preencha os campos!");
    }
  }

  //* Verification's
  //! Name Verification
  useEffect(() => {
    const regExpName = /(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/g;

    if (regExpName.test(nameInput)) {
      setNameVerification(true);
    } else {
      setNameVerification(false);
    }
  }, [nameInput]);

  //! Email Verification
  useEffect(() => {
    const regExpEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

    if (emailInput.length >= 6 && regExpEmail.test(emailInput) === true) {
      setEmailVerification(true);
    } else {
      setEmailVerification(false);
    }
  }, [emailInput]);

  //! Password Verification
  useEffect(() => {
    if (passwordInput.length >= 8 && passwordInput.indexOf("@") !== -1 || passwordInput.indexOf("#") !== -1) {
      setPasswordVerification(true);
    } else {
      setPasswordVerification(false)
    }
  }, [passwordInput])

  useEffect(() => {
    if (passwordInput.indexOf("@") !== -1 || passwordInput.indexOf("#") !== -1) {
      setSymbolVerification(true);
    } else {
      setSymbolVerification(false);
    }
  }, [passwordInput])

  //! Phone Verification
  useEffect(() => {
    const regExpPhone = /^(?:(?:\+|00)?(55)\s?)?((\(|)(([1,4,6,8,9][1-9])|(2[1,2,4,7,8])|(3[1-8])|(4[1-9])|(5[1-5])|(7[1,3,4,5,7,9]))(\)|))?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    if(regExpPhone.test(phoneInput) === true) {
      setPhoneVerification(true);
    } else {
      setPhoneVerification(false);
    }
  }, [phoneInput])

  return (
    <>
      <Header />
      
      <div className={styles.loginPage}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideItems}>
            <h2>Let’s get you started</h2>

            <div className={styles.signupArea}>
              <div className={styles.nameInput}>
                <p>Full name</p>
                <input
                  type={"text"}
                  placeholder="Ade Tiger"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  style={nameVerification ? {border: "#a0c692 1px solid"} :  {border: "#c3c3c3 1px solid"}}
                />
              </div>

              <div className={styles.emailInput}>
                <p>Email Address</p>
                <input
                  type={"email"}
                  placeholder="adetiger@gmail.com" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={emailVerification ? {border: "#a0c692 1px solid"} :  {border: "#c3c3c3 1px solid"}}
                />
              </div>

              <div className={styles.phoneInput}>
                <p>Phone number</p>
                <input
                  type={"tel"}
                  placeholder="(11) 999999999"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  style={phoneVerification ? {border: "#a0c692 1px solid"} :  {border: "#c3c3c3 1px solid"}}
                />
              </div>

              <div className={styles.passwordInput}>
                <p>Create password</p>
                <input
                  type={"password"}
                  placeholder="●●●●●●●●●●"
                  min={8}
                  maxLength={32}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  style={passwordVerification ? {border: "#a0c692 1px solid"} :  {border: "#c3c3c3 1px solid"}}
                />

                <div className={styles.correctPasswordArea}>
                  <small style={passwordInput.length >= 8 ? {color: "#a0c692"} :  {color: "#ccc"}} className={styles.firstItem}>
                    Password must contain a minimum of 8 characters
                  </small>
                  <small style={symbolVerification ? {color: "#a0c692"} :  {color: "#ccc"}}>
                    Password need contain symbol @ or #
                  </small>
                </div>
              </div>

              <div className={styles.locationInput}>
                <p>Location <small>(Optional)</small></p>
                <select>
                  <option value={"NOTHING"}></option>
                  <option value={"BRA"}>Brazil</option>
                  <option value={"USA"}>United States America</option>
                </select>
              </div>
            </div>

            <div className={styles.finishArea}>
              <button onClick={signUp}>Sign Up</button>
              <p>Already a user? <Link href={""}><a>Login</a></Link></p>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.rightSideItems}>
            <h1>“Creativity is intelligence having fun”</h1>
            <p>- Albert Einstein</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
