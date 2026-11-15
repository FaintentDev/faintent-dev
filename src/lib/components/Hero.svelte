<script lang="ts">
	import { intro, site } from '#lib/content/site.js';
</script>

<section class="pt-8 pb-7 sm:pt-10" aria-labelledby="intro-heading">
	<p
		class="flex flex-col gap-1 text-[13px] text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2"
	>
		<span>{site.location} · {site.timezone}</span>
		<span class="hidden sm:inline" aria-hidden="true">·</span>
		<span class="inline-flex items-center gap-2 text-accent">
			{site.availability}
		</span>
	</p>

	<h1
		id="intro-heading"
		class="mt-4 text-[24px] leading-[1.3] font-normal tracking-[-0.04em] sm:text-[28px]"
	>
		{site.name}
	</h1>
	<p class="mt-1 text-sm text-muted sm:text-[15px]">{site.role}</p>

	<p class="mt-4 max-w-180 text-body">{intro}</p>

	<ul class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
		<li>
			<a
				class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
				href={site.github}
				target="_blank"
				rel="external me noopener noreferrer"
			>
				GitHub <span aria-hidden="true">↗</span>
			</a>
		</li>
		<li>
			<a
				class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
				href={`mailto:${site.email}`}
			>
				Email <span aria-hidden="true">↗</span>
			</a>
		</li>
	</ul>
</section>
