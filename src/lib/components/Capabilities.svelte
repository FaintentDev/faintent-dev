<script lang="ts">
	import { capabilities } from '#lib/content/site.js';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
</script>

<section class="mb-8" aria-labelledby="capabilities-heading">
	<SectionHeading id="capabilities-heading" title="What I build" />

	<ul class="mt-2 border-t border-line">
		{#each capabilities as capability (capability.title)}
			<li class="grid gap-1 border-b border-line py-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-4">
				<h3 class="text-sm font-bold">{capability.title}</h3>
				<p class="text-sm text-body">{capability.description}</p>
			</li>
		{/each}
	</ul>
</section>
