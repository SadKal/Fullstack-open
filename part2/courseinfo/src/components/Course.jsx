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

export default Course