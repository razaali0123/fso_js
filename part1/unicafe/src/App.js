import React, { useState } from 'react'

const Header = prop => <h1>{prop.text}</h1>

const Statistics = (prop) => {
  const stat = [0 ,0 ,0]
  if (prop.good + prop.bad + prop.neutral === 0){}
  else {
    stat[0] = (prop.good*1 + prop.bad*-1)/(prop.good + prop.bad + prop.neutral)
    stat[1] = ((prop.good/(prop.good + prop.bad + prop.neutral))*100)
    stat[2] = (prop.good + prop.bad + prop.neutral)
  }
  return (
    <>
    <p>Average: {stat[0]}</p>
    <p>posPercentage: {stat[1]}</p>
    <p>all: {stat[2]}</p>
    </>
  )
}

// const Statistics = (prop) => {
//   const stat = {}
//   if (prop.good + prop.bad + prop.neutral === 0){
//     stat['avg'] = 0
//     stat['posPercentage'] = 0
//     stat['All'] = 0
//   }
//   else {
//     stat['avg'] = (prop.good*1 + prop.bad*-1)/(prop.good + prop.bad + prop.neutral)
//     stat['posPercentage'] = ((prop.good/(prop.good + prop.bad + prop.neutral))*100)
//     stat['All'] = (prop.good + prop.bad + prop.neutral)
//   }
//   return stat
// }


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
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}



export default App