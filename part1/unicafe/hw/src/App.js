
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

const StatisticLine = (props) => (
  <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.value}{props.percent}</td>
    </tr>
  </tbody>
)

const Statistics = (props) =>{
  if (props.isGive === 0) {
    return(
      <div>
        No StatisticLine given
      </div>
    )
  } else {
    return(
      <div>
        <table>
          <StatisticLine name = {props.good} value = {props.goodValue}/>
          <StatisticLine name = {props.neutral} value = {props.neutralValue} />
          <StatisticLine name = {props.bad} value = {props.badValue}/>
          <StatisticLine name = {props.all} value = {props.allValue}/>
          <StatisticLine name = {props.average} value = {props.averageValue}/>
          <StatisticLine name = {props.postive} value = {props.postiveValue} percent = {props.percent} />
        </table>
        
      </div>
    )
  }


}

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
      <Statistics isGive = {good+bad+neutral}
      good = "good" goodValue = {good} 
      neutral = "neutral" neutralValue = {neutral} 
      bad = "bad" badValue = {bad}
      all = "all" allValue = {good+bad+neutral}
      average = "average" averageValue = {(good-bad)/(good+bad+neutral)} 
      postive = "postive" postiveValue = {100*good/(good+bad+neutral)} percent = "%" /> 
    </div>
    
  )
}

export default App