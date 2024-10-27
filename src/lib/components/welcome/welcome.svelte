<script lang="ts">
	import { User } from '$lib';

	const targetOptions = [
		...Array.from({ length: (200 - 50) / 25 + 1 }, (_, i) => 50 + i * 25),
		999
	];

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const targetCount = Number(formData.get('targetCount'));

		if (targetCount < 1) {
			//error state
		}

		User.update((user) => ({
			...user,
			targetCount: targetCount
		}));
	}
</script>

<div class="rounded-md bg-dark-800 p-8 text-dark-100">
	<h2 class="font-semibold">Lets get you started</h2>
	<form on:submit={handleSubmit}>
		<div class="flex flex-col gap-4">
			<p>What's your target number of burpees?</p>
			<select
				id="targetCount"
				name="targetCount"
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
			>
				{#each targetOptions as count}
					<option value={count}>{count} burpees</option>
				{/each}
			</select>
			<button
				class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
				type="submit">Submit</button
			>
		</div>
	</form>
</div>
