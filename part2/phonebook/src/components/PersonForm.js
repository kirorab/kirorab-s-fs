import Elements from "./Elements"
const PersonForm = (props) => (
    <form onSubmit={props.add}>
      <Elements name="name" input={props.newName} onChange={props.handleNameChange} />
      <Elements name="num"  input={props.newNum} onChange={props.handleNumChange} />
      <div><button type="submit">add</button></div>
    </form>
)

export default PersonForm