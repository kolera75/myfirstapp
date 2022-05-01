import logo from "../../../logo.svg"
import styles from "./ComposantHeader.module.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../../ui/Button/Button";
export default function ComposantHeader({ title }) {

    const [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

    const pages = [ { routePath:"/", routeName:"Home"},
    { routePath:"/profil", routeName:"Profil"},
    { routePath:"/routine", routeName:"Routine"},
    { routePath:"/counter", routeName:"Counter"}, 
    { routePath: "/auth", routeName: "Login" },       
];


    return (
    <header className={styles.container}>
        <nav className={styles.nav}>
        
        <NavLink to="/">

    <img className={styles.imageLogo} src={logo} alt="Logo React" />
    </NavLink>
    <Button action={toggleMenu}>Menu</Button>
        
    <div className={styles.itemsContainer}
          style={{ left: isMenuShown ? "0" : "-100%" }}
        >
        {
        pages.map(function(route){
            return( 
            <NavLink 
                className={({isActive}) => 
                isActive ? styles.navItemActive : styles.navItem
                } to={route.routePath}
                > 
                {route.routeName}
                </NavLink>
                );
        })}

    </div>
   </nav>
</header>
    );
}