<script>
	export let data;
	const { title, date, content } = data;

	import { pageData } from '$lib/stores/pageData.js';
	$: pageData.update(() => data);
</script>

<svelte:head>
	<title>{title} - Meu blog</title>
	<meta property="og:title" content={title} />
</svelte:head>

{#if content}
	<article>
		<h1>{title}</h1>
		<p>Publicado em: {date}</p>
		<svelte:component this={content} />
	</article>
{:else}
	404 - Post não encontrado
{/if}
