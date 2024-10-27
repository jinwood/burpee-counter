<script lang="ts">
	import { User, Welcome } from '$lib';
	import LogActivity from '$lib/components/log-activity/log-activity.svelte';
	import Spinner from '$lib/components/spinner/spinner.svelte';

	console.log($User);
	$: newUser = $User.targetCount === undefined;
	$: loading = $User.loading;
</script>

<div class="pt-8">
	{#if loading}
		<Spinner color="#F0DFFB" />
	{:else if newUser}
		<Welcome />
	{:else}
		<LogActivity />
	{/if}
</div>
