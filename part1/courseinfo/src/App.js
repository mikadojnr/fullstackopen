const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      {props.part} {props.exercise}
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part 
        part={props.part[0].name} 
        exercise={props.part[0].exercise} 
      /><br/>

      <Part 
        part={props.part[1].name} 
        exercise={props.part[1].exercise} 
      /><br/>

    <Part 
        part={props.part[2].name} 
        exercise={props.part[2].exercise} 
      /><br/>
    </div>
  )
}

const Total = (props) => {
return (
  <>
    <p>Number of exercises {props.part[0].exercise + props.part[1].exercise + props.part[2].exercise}</p>
  </>
)
}

const App = ()=> {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }     
    ]
  }
  
  return (
    <div>
      <Header 
        course = {course.name}
      />
      <Content
        part = {course.parts}
      />
      <Total
        part = {course.parts}
      />
    </div>
  )
}

export default App