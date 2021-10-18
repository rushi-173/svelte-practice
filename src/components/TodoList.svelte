<script>
	import TodoItem from "./TodoItem.svelte";
	export let todos = [];
</script>

<div class="todolist-container">
	{#each todos as todo (todo.id)}
		<TodoItem {todo} on:delete-todo on:toggle-complete />
	{/each}
</div>

<style>
</style>
