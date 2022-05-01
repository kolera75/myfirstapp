
export default function Button({action, children, success, danger, warning, outline}){ 

const color = success ? "green" : danger ? "red" : warning ? "orange" : "royalblue"
 
return (
    <button style={{ 
        backgroundColor: outline ? "transparent" : color,
        padding:"10px",
        border:outline ? `solid 1px ${color}` : "none",
        color: outline ? color : "whitesmoke",
        fontSize:"18px",
        borderRadius:"5px",
        minWidth: "100px",
        cursor:"pointer",

    }}
    onClick={action}
    >
    {children}
    </button>
  )
}
