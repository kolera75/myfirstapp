import { useState } from "react";
import Button from "../../ui/Button/Button";
import InputWithError from "../../ui/InputWithError/InputWithError";

export default function LoginForm() {

  //1 Création des variable d'états pour les entrées et les erreurs
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");


  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2 Création des fonctions handle
  function handleEmail(e) {
    setEmailInput(e.target.value);
    setEmailError("");
  }

  function handlePassword(event){

    setPasswordInput(event.target.value);
    setPasswordError("");
  }


  //3 Créer la fonction pour valider le formulaire: tests/Envoi de données backend
  function login() {
    if (emailInput.includes('@') && passwordInput.length >=6 ) {
    alert("Connexion avec: " + emailInput);
  }else{
    setEmailError( !emailInput.includes("@")? "Format email invalide" : "");
    setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court" : "");
  }
  setPasswordInput("");
  }
 
  //Two way binding l'input est lié dans les deux sens

  return (
    <div style={{ maxWidth:"500px", padding: "10%"}}>
      <h2>Connectez-vous</h2>

      <InputWithError 
      holder={"Email"} 
      value={emailInput} 
      action={handleEmail}
      type={"email"}
      error={emailError}
      
      />


      <InputWithError 
      holder={"Mot de passe"} 
      value={passwordInput} 
      action={handlePassword}
      type={"password"}
      error={passwordError}
      
      />

      <Button action={login}>Valider</Button>
    </div>
  );
}