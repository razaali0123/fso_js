import React, { useState } from 'react'

const Header = prop => <h1>{prop.text}</h1>


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
    </div>
  )
}



export default App