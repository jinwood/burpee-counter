<script lang="ts">
	import { User, Welcome } from '$lib';

	const newUser = $User.targetCount === undefined;
</script>

<div class="pt-8">
	{#if newUser}
		<Welcome />
	{:else}
		<p class="text-dark-100">Youre not new</p>
	{/if}
</div>
