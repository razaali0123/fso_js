import logo from './logo.svg';
import './App.css';

const Course = (prop)=>{
  return(
    <>
  <Header headline = {prop.course.name} />
  <Content lst = {prop.course.parts} />
  </>
  )
}

const Header = (prop) =>{
return <h1>{prop.headline}</h1>
}

const Content = (prop) =>{
return (prop.lst.map(x =><Part key = {x.id} partname = {x}/>))
}

const Part = (prop) =>{
return <p>{prop.partname.name} {prop.partname.exercises}</p>
}


function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  let total = 0
  for (let i = 0; i<course.parts.length; i++)
  {
    total += course.parts[i].exercises
  }

  return (
  <>
  <Course course={course} />
    <p>Total: {total}</p>
    </>
    )
}

export default App;
