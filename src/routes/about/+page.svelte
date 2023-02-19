<script>
	export let data;
	const { title, date, description, content } = data;

	import { pageData } from '$lib/stores/pageData.js';
	$: pageData.update(() => data);

	import SEO from '$lib/components/SEO/index.svelte';

	const SEO_DATA = {
		title,
		description,
	};
</script>

<SEO {...SEO_DATA} />

{#if content}
	<article>
		<h1>{title}</h1>
		<p>Publicado em: {date}</p>
		<svelte:component this={content} />
	</article>
{:else}
	404 - Página não encontrada
{/if}
