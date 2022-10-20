import { useState } from 'react'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Title = ({title}) => (
  <h1>
    {title}
  </h1>
)

const Feedback = (props) => (
  <div>
    {props.name} {props.value} {props.percent}
  </div>
)
const Statistics = (props) =>(
  <div>
      <Feedback name = {props.good} value = {props.goodValue}/>
      <Feedback name = {props.neutral} value = {props.neutralValue} />
      <Feedback name = {props.bad} value = {props.badValue}/>
      <Feedback name = {props.all} value = {props.allValue}/>
      <Feedback name = {props.average} value = {props.averageValue}/>
      <Feedback name = {props.postive} value = {props.postiveValue} percent = {props.percent} />
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => () =>{
      console.log('good')
      setGood(good + 1)
    }
  
  const setNeutralValue = () => () =>{
      console.log('neutral')
      setNeutral(neutral + 1)
    }
  
    const setBadValue = () => () =>{
      console.log('bad')
      setBad(bad + 1)
    }

  return (
    <div>
      <Title title="give feedback"/>
      <Button handleClick = {setGoodValue()} text = "good" />
      <Button handleClick = {setNeutralValue()} text = "neutral"/>
      <Button handleClick = {setBadValue()} text = "bad"/>
      <Title title="staistics"/>
      <Statistics good = "good" goodValue = {good} 
      neutral = "neutral" neutralValue = {neutral} 
      bad = "bad" badValue = {bad}
      all = "all" allValue = {good+bad+neutral}
      average = "average" averageValue = {(good-bad)/(good+bad+neutral)} 
      postive = "postive" postiveValue = {100*good/(good+bad+neutral)} percent = "%" /> 
    </div>
  )
}

export default App