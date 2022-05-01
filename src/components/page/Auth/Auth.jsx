import { useState } from "react";
import LoginForm from "../../container/LoginForm/LoginForm";
import SignUpForm from "../../container/SignUpForm/SignUpForm";

export default function Auth() {

  const [isLogin, setIsLogin] = useState(false)

  function toggleLogin(){
    setIsLogin( !isLogin);
  }
  return (
    <div>
      {isLogin ? <LoginForm/> : <SignUpForm/>}
      <p 
      style={{ 
        cursor: "pointer", 
        textDecoration: "underline",
        color: "royalblue",
      
    }} 


      onClick={toggleLogin}
      
      >

        { isLogin 
        ? "Pas encore membre? Inscrivez-vous !" 
        : "Déjà membre? connectez-vous!"}
      </p>
    </div>
  );
}

// email test si il possede un @ / email invalide
//username test sup a 5 et inf a 10 / username trop Ccourt / trop long
//password test sup a 6 / mot de passe court

//confirm password test password === confirmpassword