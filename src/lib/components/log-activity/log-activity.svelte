<script lang="ts">
	import { User } from '$lib';

	console.log($User);
	$: user = $User;
</script>

<div class="flex flex-col rounded-lg bg-dark-600 p-6 text-dark-100">
	<div>
		<h2>Today you should do...</h2>
	</div>
	<div>
		<p>
			<span>{user.currentCount}</span>
			<span>burpees</span>
		</p>
	</div>
</div>
