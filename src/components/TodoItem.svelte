<script>
	import { scale, fade } from "svelte/transition";
	import { TodoListStore } from "../stores";
	export let todo = {};
	function deleteTodo() {
		TodoListStore.update((todos) =>
			todos.filter((item) => item.id !== todo.id)
		);
	}
	function toggleComplete() {
		TodoListStore.update((todos) =>
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	}
</script>

<div class="todo-item" in:scale out:fade={{ duration: 500 }}>
	<div>
		<input
			type="checkbox"
			class="checkbox"
			checked={todo.completed ? true : false}
			on:change={toggleComplete}
		/>
		<p class={todo.completed ? "completed" : ""}>{todo.task}</p>
	</div>
	<button on:click={deleteTodo}>X</button>
</div>

<style>
	.todo-item {
		padding: 0.5rem;
		margin: 0.5rem 0rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #191933;
	}
	.todo-item div {
		width: 100%;
		display: flex;
		height: 100%;
		align-items: center;
	}
	p {
		margin: 0rem 1rem;
	}
	.completed {
		text-decoration: line-through;
		color: #b3e5fc;
		text-decoration-color: #b3e5fc;
	}
	button {
		border: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;

		font-weight: 700;
		color: #ef5350;
		background: transparent;
	}
	.checkbox {
		border: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		font-weight: 700;
		color: #191933;
		background: #fff;
	}
	.checkbox:checked {
		background-color: #b3e5fc;
	}
</style>
