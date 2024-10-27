<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-white shadow">
		<div class="mx-auto max-w-4xl px-4 py-4">
			<h1 class="text-2xl font-bold text-gray-800">Burpee Counter</h1>
		</div>
	</header>
	<main class="flex-grow bg-gray-50">
		<!-- Constrained content width -->
		<div class="mx-auto w-full max-w-3xl px-4">
			{@render children()}
		</div>
	</main>
	<footer class="bg-gray-100">
		<div class="mx-auto max-w-4xl px-4 py-4 text-center text-gray-600">
			<p>© 2024 Your Website. All rights reserved.</p>
		</div>
	</footer>
</div>
