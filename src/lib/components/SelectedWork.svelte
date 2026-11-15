<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import ProjectRow from '#lib/components/ProjectRow.svelte';
	import { projects } from '#lib/content/projects.js';
</script>

<section id="work" class="mb-8" aria-labelledby="work-heading">
	<SectionHeading id="work-heading" title="Selected work" />

	<div class="mt-2 border-t border-line">
		{#each projects as project (project.name)}
			<ProjectRow {project} />
		{/each}
	</div>
</section>
