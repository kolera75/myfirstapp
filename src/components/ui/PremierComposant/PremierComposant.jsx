export function PremierComposant() {
    return (<p>Notre premier composant exporté.</p>);
}

export function ComposantBonjour( {user, isPermis } ) {
    const containerStyle = {
        backgroundColor:"gray",
        padding:"20px"
    };

    const styles = {
        prenom:{
            color:"whitesmoke",
            fontSize:"20px",
            fontWeight:"bold"
        },
        nom:{
            color:"whitesmoke",
            fontSize:"20px",
            fontWeight:"bold",
        },
    }
    
    
    return (
    <div style={containerStyle}>

        <span style={styles.nom}> {user.nom} </span>
        <span style={styles.prenom}> {user.prenom} </span>
        <br/>
        <span

        style={ {
            color: isPermis ? "green" : "red",
            fontSize: "18px",
            borderBottom:`solid 1px ${isPermis ? "green" : "red"}`,
            padding:"5px",
        } }
        
        > {isPermis ? "Vous pouvez conduire!" : "Prendre le bus" } </span>
    </div>
    );
}

export default function TroisiemeComposant(){
    return <p>Un composant exporté par défaut.</p>;
}

