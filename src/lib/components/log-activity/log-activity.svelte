<script lang="ts">
	import { User } from '$lib';
	import Slider from '../slider/slider.svelte';

	$: user = $User;
	$: showFeedback = false;
	$: difficulty = 0;

	function saveHistory() {
		User.saveHistory({ difficulty, count: user.currentCount, date: new Date() });
	}
</script>

<div class="flex flex-col gap-4 rounded-lg bg-dark-600 p-6 text-dark-100">
	{#if !showFeedback}
		<div>
			<h2 class="text-lg font-semibold">Today you should do...</h2>
		</div>
		<div>
			<p>
				<span>{user.currentCount}</span>
				<span>burpees</span>
			</p>
		</div>
		<div>
			<button
				class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
				onclick={() => (showFeedback = true)}>I did them!</button
			>
		</div>
	{/if}
	{#if showFeedback}
		<div>
			<h2 class="text-lg font-semibold">How was it?</h2>
			<p>1 - easy, 10 - hard</p>
			<Slider bind:difficulty />
			<button
				class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
				onclick={saveHistory}>Finish</button
			>
		</div>
	{/if}
	{#each user.history as item}
		<div>
			{item.difficulty}
			{item.count}
		</div>
	{/each}
</div>
