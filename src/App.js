/*import TroisiemeComposant, { PremierComposant, ComposantBonjour} from "./components/ui/PremierComposant/PremierComposant"*/
import logo from './logo.svg';

import './App.css';
import ComposantHeader from "./components/container/ComposantHeader/ComposantHeader"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/page/Home/Home';
import Profil from './components/page/Profil/Profil';
import Routine from './components/page/Routine/Routine';
import Counter from './components/page/Counter/Counter';
import Auth from "./components/page/Auth/Auth";
import {userContext} from "./components/page/Auth/Auth";


function App() {

  let utilisateur = { 
  prenom: "Amin",
   nom: "Sebki",
   cours: [
    {
      nom: "HTML",
      isDone: true,
      icon: "https://img.icons8.com/color/344/html-5--v1.png",
    },
    {
      nom: "CSS",
      isDone: true,
      icon: "https://img.icons8.com/color/344/css3.png",
    },
    {
      nom: "Javascript",
      isDone: true,
      icon: "https://img.icons8.com/color/344/javascript--v1.png",
    },
    {
      nom: "React",
      isDone: false,
      icon: "https://img.icons8.com/officel/344/react.png",
    },
  ],
};

  return (
    <div className="App">
      <BrowserRouter>
      <ComposantHeader title="Une application avec React!"/>


      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profil" element={<Profil user={utilisateur}/>}/>
      <Route path="/routine" element={<Routine/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path='/auth' element={<Auth />} />

      </Routes>


      </BrowserRouter>
      



      {/*<PremierComposant />
      <ComposantBonjour user={utilisateur} isPermis={false} />
  <TroisiemeComposant></TroisiemeComposant>*/}
    </div>
  );
}

export default App;
