import FirstName from "../FirstName/FirstName";
import LastName from "../LastName/LastName";

export default function FullName(props){

    return ( 
    
    <>
    <FirstName firstName= {props.firstName}/> 
    <LastName lastName= {props.lastName} /> 
    </>
   
    
    );
}