<script>
	import TodoForm from "./components/TodoForm.svelte";
	import TodoList from "./components/TodoList.svelte";
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
</script>

<main>
	<h2>TO DO LIST</h2>
	<TodoForm {todos} />
	<TodoList {todos} />
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
