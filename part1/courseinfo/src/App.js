import React from 'react'



const Header = (arg) =>
{
return (
  <h1>{arg.name}</h1>
)
}

const Content = (arg) =>
{
  return(
    <>
    <Part partnum = {arg.p1[0].name} exercisenum = {arg.p1[0].exercises} />
    <Part partnum = {arg.p1[1].name} exercisenum = {arg.p1[1].exercises} />
    <Part partnum = {arg.p1[2].name} exercisenum = {arg.p1[2].exercises} />
    </>
  )
}

const Part = (prop) =>
{
  return(
    <>
    <p>{prop.partnum} {prop.exercisenum}</p>
    </>
  )
}

const Total = (arg) =>
{
  return(
    <p>Number of Exercises are {arg.p1[0].exercises + arg.p1[1].exercises + arg.p1[2].exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name = {course}/>
      <Content p1 = {parts} />
      <Total p1 = {parts} />
    </div>
  )
}



export default App