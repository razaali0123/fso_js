import React, { useState } from 'react'

const Header = prop => <h1>{prop.text}</h1>

const StatisticLine = prop => {
  if (prop.text === "good"){
    return <td>good {prop.value}</td>
  }
  if (prop.text === "neutral"){
    return <td>neutral {prop.value}</td>
  } 
  if (prop.text === "bad"){
    return <td> bad {prop.value}</td>
  }
  if (prop.text === "all"){
    return <td> all {prop.value}</td>
  }
  if (prop.text === "average"){
    if (prop.all === 0){return <td> average 0</td>}
    return <td> average {(prop.value/prop.all)}</td>
  }

  if (prop.text === "posPercentage"){
    if (prop.all === 0){return <td>  posPercentage 0 %</td>}
    return <td> posPercentage {(prop.pos/prop.all)*100} %</td>
  }

}

const Statistics = (prop) => {
  return(
    <div>
      <table>
      <tbody>
      <tr><StatisticLine text="good" value = {prop.good} /></tr>
      <tr><StatisticLine text="neutral" value ={prop.neutral} /></tr>
      <tr><StatisticLine text="bad" value ={prop.bad} /></tr>
      <tr><StatisticLine text="all" value ={prop.bad + prop.good + prop.neutral} /></tr>
      <tr><StatisticLine text="average" all ={prop.bad + prop.good + prop.neutral} value = {prop.bad*-1 + prop.good*1} /></tr>
      <tr><StatisticLine text="posPercentage" all ={prop.bad + prop.good + prop.neutral} pos = {prop.good} /></tr>
      </tbody>
      </table>
    </div>
  )
}

const Button = (prop) => {
  return <button onClick = {prop.func}>{prop.text} </button>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handlebuttonGood = () => {
    setGood(good + 1)
  }
  
  const handlebuttonNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const handlebuttonBad = () => {
    setBad(bad + 1)
  
  }

  return (
    <div>
      <Header text = 'Give Feedback'/>
      <Button text = "good" func = {handlebuttonGood} />
      <Button text = "Neutral" func = {handlebuttonNeutral} />
      <Button text = "Bad" func = {handlebuttonBad} />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}



export default App