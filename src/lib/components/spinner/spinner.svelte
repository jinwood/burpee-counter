<script lang="ts">
	export let size: number = 24;
	export let color: string = 'currentColor';
	export let strokeWidth: number = 4;
</script>

<div class="inline-block animate-spin" style:width="{size}px" style:height="{size}px">
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle class="opacity-25" cx="12" cy="12" r="10" stroke={color} stroke-width={strokeWidth} />
		<path
			class="opacity-75"
			fill="none"
			stroke={color}
			stroke-width={strokeWidth}
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
		/>
	</svg>
</div>
