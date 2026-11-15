<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { about, site } from '#lib/content/site.js';
</script>

<section id="about" class="mb-8" aria-labelledby="about-heading">
	<SectionHeading id="about-heading" title="About" />

	<div class="mt-2 max-w-180 space-y-3 text-sm text-body">
		{#each about as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
		<p>
			Most of my work is private, but you can see some of my open-source things (like this
			portfolio) on
			<a
				class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
				href={site.github}
				target="_blank"
				rel="external me noopener noreferrer"
			>
				GitHub <span aria-hidden="true">↗</span>
			</a>.
		</p>
	</div>
</section>
