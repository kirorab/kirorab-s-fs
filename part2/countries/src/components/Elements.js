import React from "react"
const Elements = (props) => (
    <div> {props.name}: <input value={props.input} onChange={props.onChange} /></div>
)
export default Elements