<script lang="ts">
	import '@fontsource-variable/jetbrains-mono';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Footer from '#lib/components/Footer.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="absolute -top-24 left-4 z-50 bg-fg px-3 py-2 text-bg focus:top-4" href="#main">
	Skip to content
</a>

<div id="top" class="mx-auto flex min-h-screen w-full max-w-[960px] flex-col px-4 sm:px-6">
	<Nav />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
