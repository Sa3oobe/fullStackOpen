//import logo from './logo.svg';
//import './App.css';
// eslint-disable-next-line
import react from 'react'


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>
      {props.name} {props.noOfExe}
    </p>
  )
}
const Content = (props) => {
  console.log('Content props' + props)
  return (
    <>
      <Part name = {props.parts[0].name} noOfExe ={props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} noOfExe ={props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} noOfExe ={props.parts[2].exercises}/>

    </>
    )
  }
  const Total = (props) => {
    return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
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
      <Header course = {course.name} /> { /*Two hourse searching for error and it is (.name) remamber that dumpass */}
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/> 
    </div>
  )
}
export default App;