<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-dark-900">
	<header class="bg-dark-800 text-accent-100 shadow">
		<div class="mx-auto max-w-4xl px-4 py-4">
			<h1 class="text-2xl font-bold text-accent-100">Burpee Counter</h1>
		</div>
	</header>
	<main class="flex-grow">
		<!-- Constrained content width -->
		<div class="mx-auto w-full max-w-3xl px-4">
			{@render children()}
		</div>
	</main>
	<footer class="">
		<div class="mx-auto max-w-4xl px-4 py-4 text-center text-gray-600">
			<p>© 2024 Cool Website. All rights reserved.</p>
		</div>
	</footer>
</div>
