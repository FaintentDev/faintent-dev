<script lang="ts">
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import { contactCopy, site } from '#lib/content/site.js';
</script>

<section id="contact" class="mb-8" aria-labelledby="contact-heading">
	<SectionHeading id="contact-heading" title="Contact" />

	<p class="mt-2 max-w-180 text-sm text-body">{contactCopy}</p>

	<ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
		<li>
			<a
				class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
				href={`mailto:${site.email}`}
			>
				{site.email}
			</a>
		</li>
		<li>
			<a
				class="text-accent underline decoration-accent/40 transition-colors hover:text-accent-bright"
				href={`mailto:${site.email}`}
			>
				{site.companyEmail}
			</a>
		</li>
	</ul>
</section>
