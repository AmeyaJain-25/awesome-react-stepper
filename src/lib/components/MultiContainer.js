import React from 'react'
import localClasses from "../styles/multiContainer.module.css"

const MultiContainer = (props) => {
    return (
        <div className={localClasses.mainContainer} style={props.containerStyle}>
            {props.children}
        </div>
    )
}

export default MultiContainer;