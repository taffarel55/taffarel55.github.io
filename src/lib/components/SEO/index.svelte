<script>
	import { page } from '$app/stores';
	import config from '$lib/config/generalConfig.js';
	import OpenGraph from './OpenGraph.svelte';
	let url = $page.url.href;

	export let title;
	export let description;

	const language = 'pt_BR';

	const openGraphProps = {
		title,
		description,
		url,
		article: $page.url.pathname.includes('/blog'),
		siteName: config.siteName,
		language
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<!-- <html lang={language.replace('_', '-').toLowerCase()} /> -->
</svelte:head>
<OpenGraph {...openGraphProps} />
<!-- TODO: Add twitter and/or facebook -->
