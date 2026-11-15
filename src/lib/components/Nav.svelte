<script lang="ts">
	import { site } from '#lib/content/site.js';
</script>

<header
	class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line py-4 sm:py-5"
>
	<a
		class="text-base font-bold tracking-tight text-fg transition-colors hover:text-accent sm:text-lg"
		href="#top"
		aria-label="Back to top"
	>
		{site.handle}
	</a>

	<nav aria-label="Primary">
		<ul class="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] sm:gap-x-5 sm:text-sm">
			<li>
				<a class="text-muted transition-colors hover:text-accent" href="#work">Work</a>
			</li>
			<li>
				<a class="text-muted transition-colors hover:text-accent" href="#about">About</a>
			</li>
			<li>
				<a class="text-muted transition-colors hover:text-accent" href="#contact">Contact</a>
			</li>
			<li>
				<a
					class="text-muted transition-colors hover:text-accent"
					href={site.github}
					target="_blank"
					rel="external me noopener noreferrer"
				>
					GitHub <span aria-hidden="true">↗</span>
				</a>
			</li>
		</ul>
	</nav>
</header>
