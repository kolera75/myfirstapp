import { useState } from "react";
import Button from "../../ui/Button/Button";

export default function Home() {

  const [textState, setTextState ] = useState("du texte");






  

  function clicked(){
  setTextState("Un nouveau texte")

  }
  return (
    <div><p>Home</p>

    <Button action={clicked}> 
    Click!
    </Button>
    
    <p>{textState}</p>
  
    
    </div>
  )
}
