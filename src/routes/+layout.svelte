<script lang="ts">
	import '@fontsource-variable/jetbrains-mono';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Footer from '#lib/components/Footer.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import { site } from '#lib/content/site.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="author" content={site.name} />
	<link rel="canonical" href={`${site.url}/`} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={`${site.url}/`} />
	<meta property="og:image" content={`${site.url}/og.png`} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Jeremiah Earl, independent software engineer" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={`${site.url}/og.png`} />
	<meta name="twitter:image:alt" content="Jeremiah Earl, independent software engineer" />

	<link rel="icon" href={favicon} />
</svelte:head>

<a class="absolute -top-24 left-4 z-50 bg-fg px-3 py-2 text-bg focus:top-4" href="#main">
	Skip to content
</a>

<div id="top" class="mx-auto flex min-h-screen w-full max-w-[960px] flex-col px-4 sm:px-6">
	<Nav />
	<main id="main" tabindex="-1" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
