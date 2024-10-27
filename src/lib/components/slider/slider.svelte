<script>
	import Range from './range.svelte';
	let value = 0;
</script>

<div>
	<Range on:change={(e) => (value = e.detail.value)} />
</div>

<h3 class="text-center">
	{value}
</h3>

<style>
	:global(.purple-theme) {
		--track-focus: #c368ff;
		--track-highlight-bgcolor: #c368ff;
		--track-highlight-bg: linear-gradient(90deg, #c368ff, #c965ff);
		--thumb-holding-outline: rgba(191, 102, 251, 0.3);
		--tooltip-bgcolor: #c368ff;
		--tooltip-bg: linear-gradient(45deg, #c368ff, #c965ff);
	}
</style>
