const Header = ({head}) => (
  <h1>
    {head}
  </h1>
)

const Part = (props) => (
  <div>
    {props.name} {props.exercises} 
  </div>
)

const Total = ({total}) => (
  <div>
    total of {total} exercises
  </div>
)

const Content = ({content}) =>(
  <div>
    <Part name = {content[0].name} exercises = {content[0].exercises}/>
    <Part name = {content[1].name} exercises = {content[1].exercises}/>
    <Part name = {content[2].name} exercises = {content[2].exercises}/>
    <Total total = {content[0].exercises+content[1].exercises+content[2].exercises}/>
  </div>
)

const Course = ({course}) => (
  <div>
    <Header head={course.name} />
    <Content content={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App