const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {

	const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0);

	return (
	<h4>
		Number of exercises {total}
	</h4>
	)
}
	

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
	{parts.map( curr_part =>
	 <Part key={curr_part.id} part={curr_part}/>
	  )} 
  </>

const Course = ({ course }) =>{

	return (
		<div>
			<Header course={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)

}

const App = () => {
	const courses = [
		{
		name: 'Half Stack application development',
		id: 1,
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
			},
			{
			name: 'Redux',
			exercises: 11,
			id: 4
			}
		]
		}, 
		{
		name: 'Node.js',
		id: 2,
		parts: [
			{
			name: 'Routing',
			exercises: 3,
			id: 1
			},
			{
			name: 'Middlewares',
			exercises: 7,
			id: 2
			}
		]
		}
	]

	return <>{courses.map( course => <Course key={course.id} course={course}/>)}</>
  }
  
  export default App