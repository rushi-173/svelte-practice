<script>
	import { TodoListStore } from "../stores";
	import { v4 as uuid } from "uuid";
	let currTask = "";
	function inputChangeHandler(e) {
		currTask = e.target.value;
	}
	function addTodo() {
		const newTodo = {
			id: uuid(),
			task: currTask,
			completed: false,
		};
		TodoListStore.update((todos) => [newTodo, ...todos]);
		currTask = "";
	}
</script>

<form class="form">
	<input type="text" on:input={inputChangeHandler} bind:value={currTask} />
	<button disabled={currTask.length > 0 ? false : true} on:click={addTodo}
		>+</button
	>
</form>

<style>
	.form {
		display: flex;
		justify-content: space-between;
		margin: 0.5rem 0rem;
	}
	input {
		border: none;
		outline: none;
		padding: 0.2rem;
		border-bottom: 2px solid white;
		width: 100%;
	}
	button {
		width: 50px;
		background-color: white;
		border: none;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		font-weight: 700;
		margin-left: 0.2rem;
		color: #191933;
	}
	button:disabled {
		background-color: #ccc;
		color: #888;
	}
</style>
