<script lang="ts">
	import { User } from '$lib';
	import Slider from '../slider/slider.svelte';

	let experience = $state(0);
	let startCount = $state(0);
	let selectedTarget = $state(0);

	const formSteps = ['SetStart', 'SetTarget', 'SetEnd'] as const;
	let currentStepIndex = $state(0);

	const handleExperienceChange = (event: CustomEvent) => {
		console.log('handle');
		experience = event.detail.value;
		handleFormStateChange('forward');
	};

	const handleStartCountChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		startCount = Number(input.value);
	};

	const handleFormStateChange = (direction: 'forward' | 'backward') => {
		console.log(currentStepIndex, direction);
		if (direction === 'forward' && currentStepIndex < formSteps.length - 1) {
			currentStepIndex++;
		} else if (direction === 'backward' && currentStepIndex > 0) {
			currentStepIndex--;
		}
	};

	const targetOptions = $state([
		'Choose target ',
		...Array.from({ length: (200 - 50) / 25 + 1 }, (_, i) => 50 + i * 25),
		999
	]);

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
	<h2 class="font-semibold">Lets get you started...</h2>
	{currentStepIndex}
	{selectedTarget}
	<form onsubmit={handleSubmit}>
		<div class="flex flex-col gap-4">
			{#if currentStepIndex >= 0}
				<p>What's your target number of burpees?</p>
				<select
					onchange={() => handleFormStateChange('forward')}
					bind:value={selectedTarget}
					id="targetCount"
					name="targetCount"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
				>
					{#each targetOptions as target}
						<option value={target}>{target} burpees</option>
					{/each}
				</select>
				{#if currentStepIndex >= 1}
					<p>What's your fitness level?</p>
					<Slider value={experience} on:change={handleExperienceChange} />

					{#if currentStepIndex >= 2}
						<p class="text-dark-100">I think you should start with</p>
						<input
							id="startCount"
							type="number"
							value={startCount}
							class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
						/>
						{#if currentStepIndex >= 3}
							<p>Placeholder</p>
							<button
								class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
								type="submit">Submit</button
							>
						{/if}
					{/if}
				{/if}
			{/if}
		</div>
	</form>
</div>
