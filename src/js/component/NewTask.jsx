import React, { useState } from "react";

const NewTask = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([
		"Wake Up",
		"Brush teeth",
		"Take a Shower",
	]);
	const [tachado, setTachado] = useState("");
	const [isShown, setIsShown] = useState(false);

	function handleTask(event) {
		setTask(event.target.value);
	}

	const addTask = () => {
		setList([...list, task]);
	};

	function handleRemove(id) {
		const newList = list.filter((item, index) => index !== id);

		setList(newList);
	}

	const listaTodo = list.map((item, index) => (
		<li key={index} className={"row " + tachado}>
			<div className="col-10">{item} </div>
			<div className="col-2">
				{isShown && (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-trash doneTask col-1"
							viewBox="0 0 16 16"
							onClick={() => handleRemove(index)}>
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
							<path
								fillRule="evenodd"
								d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
							/>
						</svg>
					</>
				)}
			</div>
		</li>
	));
	console.log(list);
	return (
		<div className="container w-50 py-3 border mt-5">
			<h1 className="text-center py-3">ToDo List</h1>
			<form action="#" onSubmit={addTask} className="container">
				<input
					type="text"
					onChange={handleTask}
					placeholder="What will you do next?"
				/>
				<input type="submit" value="Submit"></input>
			</form>
			{list.length > 0 ? (
				<ul
					className="row no-bullets"
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}>
					{listaTodo}
				</ul>
			) : (
				<p>No tasks</p>
			)}
			<p>{list.length} items left</p>
		</div>
	);
};

export default NewTask;
