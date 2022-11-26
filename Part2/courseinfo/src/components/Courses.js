import React from "react"

const Header = ({course}) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  
  const Part = ({course}) => {
    return(
      <div>
        { course.parts.map(part => {return (<div key={part.id}>{part.name}, {part.exercises}</div>)})}
      </div>
    )
  }
  const Content = ({course}) => {
    return (
      <div>
        <Part  course={course}  />
      </div>
      )
  }
    
    
    const Total = ({course}) => {
      let sum = course.parts.reduce((acc,val) => acc + val.exercises, 0)
      return (
      <div>
        <h4>Total of exercises {sum}</h4>
      </div>
        
      )
    }
  
  const Courses = ({courses}) => {
    return (
      <div>
        <h1>Web Development Curriculum</h1> 
      {courses.map((course) => {
        return(
              <div key={course.id}>
                <Header  course={course} />
                <Content course={course} />
                <Total course={course}/>
              </div>
              )
      })}
      </div>
    )
  }


export default Courses
        
   