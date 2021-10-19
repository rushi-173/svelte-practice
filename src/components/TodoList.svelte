<script>
	import { TodoListStore } from "../stores";
	import TodoItem from "./TodoItem.svelte";
</script>

<div class="todolist-container">
	{#each $TodoListStore as todo (todo.id)}
		<TodoItem {todo} />
	{/each}
</div>

<style>
</style>
