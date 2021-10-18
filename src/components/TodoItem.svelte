<script>
	export let todo = {};
</script>

<div class="todo-item">
	<div>
		<input
			type="checkbox"
			class="checkbox"
			checked={todo.completed ? true : false}
			on:change={() => {
				console.log("toggle-complete");
			}}
		/>
		<p class={todo.completed ? "completed" : ""}>{todo.task}</p>
	</div>
	<button
		on:click={() => {
			console.log("delete");
		}}>X</button
	>
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
		color: #b0bec5;
		text-decoration-color: #b0bec5;
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
		color: #ef5350;
		background: white;
	}
	.checkbox:checked {
		background-color: turquoise;
	}
</style>
