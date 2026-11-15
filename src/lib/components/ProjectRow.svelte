<script lang="ts">
	import type { Project } from '#lib/content/projects.js';

	let { project }: { project: Project } = $props();
</script>

<article class="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-b border-line py-4">
	<div
		class="mt-0.5 flex size-8 items-center justify-center border border-line text-[11px] font-bold tracking-tight text-accent"
		aria-hidden="true"
	>
		{project.monogram}
	</div>

	<div>
		<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
			<h3 class="text-base font-normal">{project.name}</h3>
			<span class="text-xs text-muted">{project.status}</span>
		</div>

		<p class="mt-1 max-w-[720px] text-sm text-body">{project.summary}</p>

		<p class="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
			<span>{project.role}</span>
			<span aria-hidden="true">·</span>
			<span>{project.tags.join(' · ')}</span>
			{#if project.links.length > 0}
				<span aria-hidden="true">·</span>
				{#each project.links as link (link.href)}
					<a
						class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label} <span aria-hidden="true">↗</span>
					</a>
				{/each}
			{/if}
		</p>
	</div>
</article>
