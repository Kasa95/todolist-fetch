import React, { useState, useEffect } from "react";

const NewTask = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const [isShown, setIsShown] = useState(false);

	function handleTask(event) {
		setTask(event.target.value);
	}

	const addTask = (task) => {
		setList(list.push({ label: task, done: false }));

		const requestOptionsInsertarTarea = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(list),
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/Kasa95",
			requestOptionsInsertarTarea
		).then((response) => response.json);
	};

	// const updateList = fetch(
	// 	"https://assets.breatheco.de/apis/fake/todos/user/Kasa95",
	// 	{
	// 		method: "PUT",
	// 		body: JSON.stringify(list),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	}
	// )
	// 	.then((resp) => {
	// 		console.log(resp.ok); // will be true if the response is successfull
	// 		console.log(resp.status); // the status code = 200 or code = 400 etc.
	// 		console.log(resp.text()); // will try return the exact result as string
	// 		return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	// 	})
	// 	.then((data) => {
	// 		//here is were your code should start after the fetch finishes
	// 		console.log(data); //this will print on the console the exact object received from the server
	// 	})
	// 	.catch((error) => {
	// 		//error handling
	// 		console.log(error);
	// 	});

	function handleRemove(id) {
		const newList = list.filter((item, index) => index !== id);

		setList(newList);
	}

	const listaTodo = list.map((item, index) => (
		<div key={index} className="row">
			<div className="col-10">{item.label} </div>
			<div className="col-2">
				{isShown && (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-trash doneTask"
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
		</div>
	));
	console.log(list);

	useEffect(() => {
		const getList = () => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/Kasa95")
				.then((response) => response.json())
				.then((data) => setList(data));
		};
		getList();
	}, []);

	return (
		<div className="container w-30 py-3 border mt-5">
			<h1 className="text-center py-3 display-4">ToDo List</h1>
			<form action="#" onSubmit={addTask} className="container">
				<input
					type="text"
					onChange={handleTask}
					placeholder="What will you do next?"
				/>
				<input type="submit" value="Submit"></input>
			</form>
			{list.length > 0 ? (
				<div
					className="row"
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}>
					{listaTodo}
				</div>
			) : (
				<div>
					<p>You have no tasks, time to relax!</p>
				</div>
			)}
			<hr></hr>

			{list.length > 0 ? (
				<div className="font-weight-light">
					{list.length} tasks left
				</div>
			) : (
				<div>No tasks left</div>
			)}
		</div>
	);
};

export default NewTask;
