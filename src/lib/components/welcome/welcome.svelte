<script lang="ts">
	import { User } from '$lib';

	let startCount = $state(0);
	let targetCount = $state(0);

	const formSteps = ['SetStart', 'SetTarget', 'SetEnd'] as const;
	let currentStepIndex = $state(0);

	const handleSetTarget = () => {
		startCount = Math.round(targetCount / 10);
		console.log(startCount);
		handleFormStateChange('forward');
	};

	const handleFormStateChange = (direction: 'forward' | 'backward') => {
		if (direction === 'forward' && currentStepIndex < formSteps.length - 1) {
			currentStepIndex++;
		} else if (direction === 'backward' && currentStepIndex > 0) {
			currentStepIndex--;
		}
	};
	const targetOptions = [
		'Choose target ',
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
	<form onsubmit={handleSubmit}>
		<div class="flex flex-col gap-4">
			{#if currentStepIndex >= 0}
				<p>What's your target number of burpees?</p>
				<select
					onchange={() => handleSetTarget()}
					bind:value={targetCount}
					id="targetCount"
					name="targetCount"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
				>
					{#each targetOptions as count}
						<option value={count}>{count} burpees</option>
					{/each}
				</select>

				{#if currentStepIndex >= 1}
					<p class="text-dark-100">I think you should start with</p>
					<input
						id="startCount"
						type="number"
						value={startCount}
						class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
					/>
					{#if currentStepIndex >= 2}
						<p>Placeholder</p>
						<button
							class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
							type="submit">Submit</button
						>
					{/if}
				{/if}
			{/if}
		</div>
	</form>
</div>
