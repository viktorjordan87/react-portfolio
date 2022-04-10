import React from "react";
import "./TodoListItem.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { grey, green } from "@mui/material/colors";

/* Atom */
import { todoListAtom } from "../../recoil/atom/todoAtom";
import { useRecoilState } from "recoil";

function TodoListItem({ item }) {
	const [todoList, setTodoList] = useRecoilState(todoListAtom);
	const index = todoList.findIndex((listItem) => listItem === item);

	/* Helper functions */
	const repeatItemAtIndex = (arr, i, newValue) => {
		return [...arr.slice(0, i), newValue, ...arr.slice(i + 1)];
	};

	const deleteItemAtIndex = (arr, i) => {
		return [...arr.slice(0, i), ...arr.slice(i + 1)];
	};

	/* Functions for editing the list item */
	const editItemText = (event) => {
		const newList = repeatItemAtIndex(todoList, index, {
			...item,
			text: event.target.value,
		});
		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = deleteItemAtIndex(todoList, index);
		setTodoList(newList);
	};

	const finishedItem = () => {
		const newList = repeatItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});
		setTodoList(newList);
	};

	return (
		<li>
			<div className="item-inner">
				<input type="text" className={item.isComplete.toString() === "true" ? "task-is-done" : "task-is-open"} value={item.text} onChange={editItemText} />
				<IconButton aria-label="delete" size="large" onClick={deleteItem}>
					<DeleteIcon color="secondary" sx={{ color: grey[900] }} />
				</IconButton>
				<IconButton
					className={`finish ${item.isComplete.toString() === "true" ? "task-is-done" : "task-is-open"} `}
					aria-label="task is done"
					size="large"
					onClick={finishedItem}
				>
					<CheckCircleOutlineIcon color="secondary" sx={{ color: green[500] }} />
				</IconButton>
			</div>
		</li>
	);
}

export default TodoListItem;
