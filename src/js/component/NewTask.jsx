import React, { useState } from "react";

const NewTask = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([
		"Wake Up",
		"Grab a Brush",
		"Put a little make-up",
	]);

	function handleTask(event) {
		setTask(event.target.value);
	}

	const addTask = () => {
		setList([...list, task]);
	};

	return (
		<div>
			<form onSubmit={addTask}>
				<input type="text" onChange={handleTask} />
				<input type="submit" value="Submit"></input>
			</form>
			<div>
				<p>{list[0]}</p>
				<p>{list[1]}</p>
				<p>{list[2]}</p>
				<p>{list[3]}</p>
			</div>
		</div>
	);
};

export default NewTask;
