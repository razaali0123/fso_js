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
    <Part partnum = {arg.p1.name} exercisenum = {arg.p1.exercises} />
    <Part partnum = {arg.p2.name} exercisenum = {arg.p2.exercises} />
    <Part partnum = {arg.p3.name} exercisenum = {arg.p3.exercises} />
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
    <p>Number of Exercises are {arg.p1.exercises + arg.p2.exercises + arg.p3.exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {course}/>
      <Content p1 = {part1} p2 = {part2} p3 = {part3}/>
      <Total p1 = {part1} p2 = {part2} p3 = {part3} />
    </div>
  )
}


export default App