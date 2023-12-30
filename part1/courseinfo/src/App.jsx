const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	);
};
const Part = (props) => {
	return (
		<div>
			{props.part} {props.exercise}
		</div>
	);
};
const Content = (props) => {
	return (
		<div>
			<Part
				part={props.parts[0].name}
				exercise={props.parts[0].exercises}
			/>
			<Part
				part={props.parts[1].name}
				exercise={props.parts[1].exercises}
			/>
			<Part
				part={props.parts[2].name}
				exercise={props.parts[2].exercises}
			/>
		</div>
	);
};
const Total = (props) => {
	let total = 0;
	props.parts.forEach((part) => {
		total += part.exercises;
	});
	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = 'Half Stack application development';
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10,
		},
		{
			name: 'Using props to pass data',
			exercises: 7,
		},
		{
			name: 'State of a component',
			exercises: 14,
		},
	];

	return (
		<div>
			<div>
				<Header course={course} />
				<Content parts={parts} />
				<Total parts={parts} />
			</div>
		</div>
	);
};

export default App;
