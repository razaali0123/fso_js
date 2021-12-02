import React from 'react'



const Header = (arg) =>
{
return (
  <h1>{arg.obj.name}</h1>
)
}

const Content = (arg) =>
{
  return(
    <>
    <Part partnum = {arg.p1.parts[0].name} exercisenum = {arg.p1.parts[0].exercises} />
    <Part partnum = {arg.p1.parts[1].name} exercisenum = {arg.p1.parts[1].exercises} />
    <Part partnum = {arg.p1.parts[2].name} exercisenum = {arg.p1.parts[2].exercises} />
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
    <p>Number of Exercises are {arg.p1.parts[0].exercises + arg.p1.parts[1].exercises + arg.p1.parts[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header obj = {course}/>
      <Content p1 = {course} />
      <Total p1 = {course} />
    </div>
  )
}



export default App