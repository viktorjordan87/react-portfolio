import React, { useState } from "react";
import "./Todoinput.scss";

/* Recoil */
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/atom/todoAtom";

/* Button and Text Input field */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

/* UUID */
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
	const [inputValue, setInputValue] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [_, setTodoList] = useRecoilState(todoListAtom);
	const addTodoItem = () => {
		if (inputValue) {
			setTodoList((oldTodoList) => [
				...oldTodoList,
				{
					id: uuidv4(),
					text: inputValue,
					isComplete: false,
				},
			]);
			setInputValue("");
		}
	};

	const onChange = (event) => {
		event.preventDefault();
		setInputValue(event.target.value);
	};

	return (
		<>
			<TextField
				id="outlined-basic"
				label="To-do"
				variant="outlined"
				value={inputValue}
				onChange={onChange}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						addTodoItem();
					}
				}}
			/>
			<Button variant="contained" onClick={addTodoItem}>
				Add task
			</Button>
		</>
	);
};

export default TodoInput;
