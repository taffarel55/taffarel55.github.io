<script>
	export let data;
	const { title, date, description, content } = data;

	import { pageData } from '$lib/stores/pageData.js';
	$: pageData.update(() => data);
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:url" content={import.meta.env.VITE_CLIENT_URL} />
	<meta property="og:type" content="website" />
	<!-- article -->
</svelte:head>

{#if content}
	<article>
		<h1>{title}</h1>
		<p>Publicado em: {date}</p>
		<svelte:component this={content} />
	</article>
{:else}
	404 - Página não encontrada
{/if}
