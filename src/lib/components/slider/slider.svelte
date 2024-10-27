<script>
	import Range from './range.svelte';
	let value = 42;
	let theme = 'default';
</script>

<div class={theme === 'purple' ? 'purple-theme' : ''}>
	<label for="basic-range" class="mx-2 my-2 block text-base font-semibold"> Range Label </label>
	<Range on:change={(e) => (value = e.detail.value)} id="basic-slider" />
</div>

<h3 class="text-center">
	{value}
</h3>

<h3 class="text-center">
	Theme: {theme}
</h3>

<div class="flex justify-center">
	<button on:click={() => (theme = 'default')} class="mx-1"> Default </button>
	<button on:click={() => (theme = 'purple')} class="mx-1"> Purple </button>
</div>

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
