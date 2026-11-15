<script lang="ts">
	let { id, title }: { id: string; title: string } = $props();
</script>

<h2 {id} class="text-[17px] font-bold">{title}</h2>
