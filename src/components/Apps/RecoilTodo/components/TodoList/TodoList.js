import React from "react";
import "./TodoList.scss";
import { useRecoilValue } from "recoil";
import { todoListAtom } from "../../recoil/atom/todoAtom";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
	const todoListItems = useRecoilValue(todoListAtom);

	return (
		<ul className="recoil-todolist">
			{todoListItems.map((item) => {
				return <TodoListItem key={item.id} item={item} />;
			})}
		</ul>
	);
};

export default TodoList;
