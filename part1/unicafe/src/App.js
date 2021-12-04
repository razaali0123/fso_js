import React, { useState } from 'react'

const Header = prop => <h1>{prop.text}</h1>
const All = prop =>  (prop.good + prop.bad + prop.neutral)


const Avg = prop => {
if (prop.good + prop.bad + prop.neutral === 0){return 0}
return (prop.good*1 + prop.bad*-1)/(prop.good + prop.bad + prop.neutral)
}


const Positivepercentage = prop => {
if (prop.good + prop.bad + prop.neutral === 0){return 0}
return ((prop.good/(prop.good + prop.bad + prop.neutral))*100)
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
      <button onClick = {handlebuttonGood}>good </button>
      <button onClick = {handlebuttonNeutral}>Neutral </button>
      <button onClick = {handlebuttonBad}>Bad </button>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all <All good = {good} neutral = {neutral} bad = {bad} /></p>
      <p>average <Avg good = {good} bad = {bad} neutral = {neutral} /> </p>
      <p>positive <Positivepercentage good = {good} neutral = {neutral} bad = {bad} /> %</p>
    </div>
  )
}



export default App