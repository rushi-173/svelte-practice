<script>
	import TodoItem from "./TodoItem.svelte";
	export let todos = [];
</script>

<div class="todolist-container">
	{#each todos as todo (todo.id)}
		<TodoItem {todo} />
	{/each}
</div>

<style>
</style>
