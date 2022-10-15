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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
    </div>
  )
}

export default App