import { useState } from 'react'

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

const Button = (props) => (
  <button onClick={props.click}>
    {props.text}
  </button>
)

const Title = ({title}) => (
  <h1>
    {title}
  </h1>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(Array(7).fill(0))

  
  const nextAnecdote = (min,max) =>() =>(
      setSelected(getRandomIntInclusive(min,max))
    )
  
  const vote = (num) => () =>{
    const copy = [...points]
    copy[num]+=1
    return (setPoints(copy))
  } 
  
  console.log("selectedis"+ selected)
  console.log(points[selected])
  
  

  return (
    <div>
      <Title title = "Anecdote of the day" />
      {anecdotes[selected]}
      <div>
        has {points[selected]} votes
        <div>
          <Button text = "next anecdote" click = {nextAnecdote(0,6)} />
          <Button text = "vote" click ={vote(selected)} />
        </div>
      </div> 
      <div>
        <Title title= "Anecdote with most votes" /> 
        {anecdotes[points.indexOf(Math.max(...points))]}
      </div>
    </div>
  )
}



export default App