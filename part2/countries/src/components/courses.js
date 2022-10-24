import React from "react";

const Header = ({head}) => (
    <h2>
      {head}
    </h2>
  )
  
const Part = ({content}) => {
  const part = content.map(note => <p key={note.id}>{note.name} {note.exercises}</p>)
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

export default Courses
