<script>
	import TodoForm from "./components/TodoForm.svelte";
	import TodoList from "./components/TodoList.svelte";
	import { v4 as uuid } from "uuid";
	let todos = [
		{
			id: 1,
			task: "Buy Milk",
			completed: false,
		},
		{
			id: 2,
			task: "Buy Coriander",
			completed: true,
		},
	];
	function addInTodos(e) {
		todos = [
			...todos,
			{
				id: uuid(),
				task: e.detail,
				completed: false,
			},
		];
	}
	function deleteFromTodos(e) {
		todos = todos.filter((todo) => todo.id !== e.detail);
	}
	function changeTodoState(e) {
		todos = todos.map((todo) => {
			if (todo.id === e.detail) {
				return {
					...todo,
					completed: !todo.completed,
				};
			}
			return todo;
		});
	}
</script>

<main>
	<h2>TO DO LIST</h2>
	<TodoForm on:add-todo={addInTodos} />
	<TodoList
		{todos}
		on:delete-todo={deleteFromTodos}
		on:toggle-complete={changeTodoState}
	/>
</main>

<style>
	main {
		width: 100%;
		max-width: 600px;
		min-height: 50%;
		display: flex;
		border-radius: 0.5rem;
		flex-direction: column;
		padding: 1rem;
		background-color: #10101d;
		color: white;
	}
</style>
