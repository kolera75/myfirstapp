import logo from "../../../logo.svg"
import styles from "./ComposantHeader.module.css"
import { NavLink } from "react-router-dom";
export default function ComposantHeader({ title }) {

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
        
    <div>
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