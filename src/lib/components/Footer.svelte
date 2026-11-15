<script lang="ts">
	import { site } from '#lib/content/site.js';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line py-4 text-xs text-muted">
	<ul class="flex flex-wrap items-center gap-x-4 gap-y-1">
		<li>© {year} {site.name}</li>
		<li>
			<a
				class="transition-colors hover:text-accent"
				href={site.github}
				target="_blank"
				rel="me noopener noreferrer"
			>
				GitHub <span aria-hidden="true">↗</span>
			</a>
		</li>
		<li>Built with SvelteKit</li>
	</ul>
</footer>
