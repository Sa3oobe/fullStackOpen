import React from "react"

const Filter = (props) => {
    return (
        <div>
            Filter shown with <input  value={props.filterdName} type="text"  onChange={props.handlefilterdName}/>
        </div>
    )
}


export default Filter