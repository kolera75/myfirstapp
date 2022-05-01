import { useState } from "react";
import Button from "../../ui/Button/Button";
export default function Counter() {

    const [counterState, setCounterState ] = useState(0);

    function add() {

      setCounterState(counterState +1)
      
    }

    function sub() {

      setCounterState(counterState -1)
      
    }

    function changeCounter(operation){
      switch(operation){
        case "+":
          setCounterState(counterState + 1)
          break;
          case "-":
            setCounterState(counterState - 1)
          break;
          default:
            return;

      }
    }

        return (
          <div><h2>Compteur = {counterState}</h2>
      
          <Button action={() => changeCounter('+')} success> 
          Plus
          </Button>
          <Button action={() => changeCounter('-')} danger> 
          Moins
          </Button>
          </div>
          )
}
