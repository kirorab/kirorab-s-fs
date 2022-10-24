const Header = ({head}) => (
  <h2>
    {head}
  </h2>
)

const Part = ({content}) => {
  const part = content.map(note => <p>{note.name} {note.exercises}</p>)
  const total = content.reduce((p,c)=>p+c.exercises,0)
  return (
    <div>
      {part} 
      total of {total} exercises
    </div>
  )
}

const Content = ({content}) =>{
  
  return(
  <div>
    <Part content={content} />
  </div>
)
} 
const Courses = ({courses}) => (
  <div>
    <h1>Web development curriculum</h1>
    <Header head={courses[0].name} />
    <Content content={courses[0].parts} />
    <Header head={courses[1].name}/>
    <Content content={courses[1].parts} />
  </div>
)

const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return <Courses courses={courses} />
}

export default App