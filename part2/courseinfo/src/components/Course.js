const Header = ({name}) => {
  
  return (
    <div>
          <h2>{name}</h2>
    </div>
  )
}

// the props {parts} will read data from Course module
// it data is from course.parts that's defined in the App module
const Content = ({parts}) => (
  <>
    {parts.map( part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
  </>
)

// the props {name, exercise} will read data from the Content module
// they will be part.name and part.exercises respectively
const Part  = ({name, exercises}) => (
  <>
    <p> {name} {exercises}</p>
  </>
)

const Total = ({parts}) => 
  {
    const total = parts.reduce(
      (sum, part) => { return sum + part.exercises}, 
      0)
      
    return (
      <>
        <p><b>Total of {total} exercises</b></p>
      </>
    )
  }


// course props here is a mapped array from the courses array defined in the App component
const Course = ({course}) => (
    <>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )

  export default Course;