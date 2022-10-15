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
        {props.part} {props.exercises}
      </p>
    </div>
  )
}


const Content = (props) =>{
  return(
    <div>
      <Part part={props.part} exercises={props.num}/>
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
        <Content part={part1} num={exercises1}/>
      </p>
      <p>
        <Content part={part2} num={exercises2}/>
      </p>
      <p>
        <Content part={part3} num={exercises3}/>
      </p>
      <p><Total total={exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

export default App