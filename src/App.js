import logo from './logo.svg';
import './App.css';

function App() {

  let utilisateur = { prenom: "Amin", nom: "Sebki"};

  function PremierComposant(){
    return <p>Notre premier composant!</p>
    }

    function ComposantBonjour({user, isPermis}){
      return (
      <div>
        <span> {user.prenom} </span>
        <span>{user.nom}</span>
        <p>{isPermis ? "Vous pouvez conduire" : "Prendre le bus"}</p>
        </div>
      );
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bonjour et bienvenue sur React !</p>
        <p>{utilisateur.prenom}</p>
        { PremierComposant()}
        <PremierComposant />

       {/*} { ComposantBonjour(utilisateur)}*/}
        <ComposantBonjour 
        user={utilisateur} isPermis={true}
        />
      </header>
    </div>
  );
}

export default App;
