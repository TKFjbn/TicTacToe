import React from "react"
//import PropTypes from "prop-types"
import "./Button.css"

function Button ({type, text, data=[], setData=() =>{}}) {

    const handleClick = () => {
        let tableroParse = [...data[0]]
        tableroParse[data[1]][data[2]].estado = data[3] ? "X" : "O"
        setData(tableroParse)
    }

    return(
        <button id="gato-btn" className={type} onClick={()=>handleClick()} >
        <span>{text}</span>
    </button>
    )
}

/*
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
*/

export default Button