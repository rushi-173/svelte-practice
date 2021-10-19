import { writable } from "svelte/store";

export const TodoListStore = writable([
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
]);
