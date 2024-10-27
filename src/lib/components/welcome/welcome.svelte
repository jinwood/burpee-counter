<script lang="ts">
</script>

<div class="rounded-md bg-dark-800 p-8 text-dark-100">
	<h2 class="font-semibold">Lets get you started</h2>
	<form method="POST" action="welcome">
		<div class="flex flex-col gap-4">
			<p>What's your target number of burpees?</p>
			<input
				id="targetCount"
				name="targetCount"
				type="number"
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none sm:w-1/2"
			/>
			<button
				class="focus:shadow-outline rounded bg-accent-700 px-4 py-2 font-bold text-white hover:bg-accent-500 focus:outline-none"
				type="submit">Submit</button
			>
		</div>
	</form>
</div>
