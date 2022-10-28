import Elements from "./Elements"
const Filter = (props) => (
    <Elements name="filter shown with" input={props.newSearch} onChange={props.handleSearchChange} />
)
export default Filter