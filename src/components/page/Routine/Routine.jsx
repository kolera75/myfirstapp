import Button from "../../ui/Button/Button";

export default function Routine() {

    function manger (){
      alert ("manges!");
  
    }

    function dormir (){
        alert ("dors!");
    
      }

      function etudier (){
        alert ("etudie!");
    
      }

      function routine(text){
        alert(text)
      }
    return (
      <div>
      
      <Button 
      action={()=>{ routine("Faut aller manger");}}
      outline
      success
      >
        Manger
        </Button>

        <Button 
       action={()=>{ routine("Faut aller dormir");}}
        warning
        
      >
        Dormir
        </Button>

        <Button 
    action={()=>{ routine("Faut aller etudier");}}
    danger
    outline
      >
        Etudier
        </Button>
      
      </div>
    )
  }
  

