<script>
	import TodoForm from "./components/TodoForm.svelte";
	import TodoList from "./components/TodoList.svelte";
	let todos = [
		{
			id: 1,
			task: "Buy Milk",
			completed: false,
		},
	];
</script>

<main>
	<TodoForm {todos} />
	<TodoList {todos} />
</main>

<style>
</style>
