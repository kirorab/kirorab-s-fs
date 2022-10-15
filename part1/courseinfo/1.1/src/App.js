const Head = (props) =>{
  return(
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}


const Content = (props) =>{
  return(
    <div>
      <Part part1={props.part1} exercises1={props.num1}/>
      <Part part2={props.part2} exercises2={props.num2}/>
      <Part part3={props.part3} exercises3={props.num3}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Head course={course}/></h1>
      <p>
        <Content part1={part1} num1={exercises1} part2={part2} num2={exercises2} part3={part3} num3={exercises3}/>
      </p>
      <p><Total total={exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

export default App