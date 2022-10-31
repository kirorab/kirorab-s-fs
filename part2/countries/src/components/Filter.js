import Elements from "./Elements"
const Filter = (props) => (
    <Elements name={props.name} input={props.newSearch} onChange={props.handleSearchChange} />
)
export default Filter