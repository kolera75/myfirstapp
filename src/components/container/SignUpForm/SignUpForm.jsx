import { useState } from "react";
import Button from "../../ui/Button/Button";
import InputWithError from "../../ui/InputWithError/InputWithError";

export default function SignUpForm() {

const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [userNameInput, setUserNameInput] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmInput, setConfirmInput] = useState("");
  const [confirmError, setConfirmError] = useState("");

  function handleEmail(e) {
    setEmailInput(e.target.value);
    setEmailError("");
  }

  function handleUserName(name) {
    setUserNameInput(name.target.value);
    setUserNameError("");
  }
  function handlePassword(event){

    setPasswordInput(event.target.value);
    setPasswordError("");
  }

  function handleConfirm(event){

    setConfirmInput(event.target.value);
    setConfirmError("");
  }


  function signup(event) {

    event.preventDefault();
    if (emailInput.includes('@') && userNameInput.length >=3 && userNameInput.length <=10  && passwordInput.length >=6 && confirmInput === passwordInput ) {
    alert("Votre inscription à bien été validée: " + userNameInput);
  }else{
    setEmailError( !emailInput.includes("@")? "Format email invalide" : "");
    setUserNameError( userNameInput.length < 3 ? "Username trop court" : userNameInput.length > 10 ? "Username trop long" : "")
    setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court" : "");
    setConfirmError(confirmInput != passwordInput ? "Mot de passe non identique" : "")
  }
  setPasswordInput("");
  }

  return (
    <div style={{ maxWidth:"500px", padding: "10%"}}>
      <h2>Inscrivez-vous</h2>

      <InputWithError 
      holder={"Email"} 
      value={emailInput} 
      action={handleEmail}
      type={"email"}
      error={emailError}
      
      />

<InputWithError 
      holder={"Username"} 
      value={userNameInput} 
      action={handleUserName}
      type={"text"}
      error={userNameError}
      
      />


      <InputWithError 
      holder={"Mot de passe"} 
      value={passwordInput} 
      action={handlePassword}
      type={"password"}
      error={passwordError}
      
      />

<InputWithError 
      holder={"Confirmez le mot de passe"} 
      value={confirmInput} 
      action={handleConfirm}
      type={"password"}
      error={confirmError}
      
      />

      <Button action={signup}
      success >S'inscrire</Button>
    </div>
  )
}
