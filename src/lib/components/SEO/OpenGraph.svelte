<script>
	export let title;
	export let description;
	export let url;
	export let article;
	export let siteName;
	export let language;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={language} />

	<!-- {#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}

	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />
		<meta property="og:image:width" content="400" />
		<meta property="og:image:height" content="400" />
		<meta property="og:image:alt" content={image.alt} />
	{/if} -->

	<!-- {#if article}
		<meta property="article:publisher" content={facebookPage} />
		<meta property="article:author" content={facebookAuthorPage} />
		<meta property="article:published_time" content={datePublished} />
		<meta property="article:modified_time" content={lastUpdated} />
	{/if} -->
</svelte:head>
