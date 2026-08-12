function Button({name, color, onClick}){
    return(
        <button 
         style={{padding : "8px", 
            backgroundColor : color,
            margin : "0",
            border: "1px solid black",
            borderRadius : "6px ",
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "white",
            
  

        }}
        onClick={onClick}
         >{name}</button>
    )
}

export default Button;