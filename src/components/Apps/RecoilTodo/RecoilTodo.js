import React from "react";

/* Style */
import "./RecoilTodo.scss";

/* Button and Text Input field */
import Box from "@mui/material/Box";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList.js";

/* https://www.freecodecamp.org/news/how-to-use-recoil-for-state-management-in-your-react-projects/?fbclid=IwAR0kwP5ZEXAJQfkx6MnAfdnVELidTVhCYhERhPoW4uHA2k-NSgxnCRGk3Ks */
const RecoilTodo = () => {
	return (
		<div className="recoil-todo-container">
			<h1 className="recoil-todo-title">Recoil Todo List</h1>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TodoInput />
			</Box>
			<TodoList />
		</div>
	);
};

export default RecoilTodo;
