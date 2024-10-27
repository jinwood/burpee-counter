<script lang="ts">
	import { User, Welcome } from '$lib';
	import LogActivity from '$lib/components/log-activity/log-activity.svelte';
	import Spinner from '$lib/components/spinner/spinner.svelte';

	$: user = $User;
	$: newUser = $User.targetCount === undefined;
	$: loading = $User.loading;
	$: hasLoggedToday = $User.history.find(
		(h) => h.date.toDateString() === new Date().toDateString()
	);
</script>

<div class="pt-8">
	{#if loading}
		<Spinner color="#F0DFFB" />
	{:else if newUser}
		<Welcome />
	{:else if !hasLoggedToday}
		<LogActivity />
	{:else}
		<div>
			<p class="text-dark-100">You've already worked out today. Come back tomorrow</p>
			<p class="mt-6 text-dark-300">History:</p>
			<div class="flex flex-col gap-2 text-dark-100">
				{#each user.history as item}
					<div class="rounded-s bg-dark-600 p-4">
						<h3 class="text-lg font-semibold">{item.date.toDateString()}</h3>
						<p>
							<span class="font-semibold">Count: </span>{item.count}
							<span class="font-semibold">Difficulty:</span>
							{item.difficulty}
						</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
