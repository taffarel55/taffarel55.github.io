<script>
	export let data;
	const { title, date, content } = data;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

{#if content}
	<article>
		<h1>{title}</h1>
		<p>Published: {date}</p>
		<svelte:component this={content} />
	</article>
{:else}
	404 - Post não encontrado
{/if}
