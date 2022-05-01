import MenuSecret from "../../hoc/MenuSecret/MenuSecret";
import FullName from "../../ui/FullName/FullName";
import Hobbies from "../../ui/Hobbies/Hobbies"

export default function User(props){
    return( <div style={{backgroundColor:"rgb(50, 50, 55)", padding:"20px"}}>

        <FullName 
        lastName={props.user.nom}
        firstName={props.user.prenom}/>

        <MenuSecret

        labelOpen={"Cacher les cours"}
        labelClose={"Afficher les cours"}
      >
        <Hobbies cours={props.user.cours} />
        </MenuSecret>
    </div>

    );
}


