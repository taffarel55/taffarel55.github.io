<script>
	export let data;
	const { title, date, content, posts } = data;

	import { pageData } from '$lib/stores/pageData.js';
	$: pageData.update(() => data);
</script>

<svelte:head>
	<title>My Personal Webpage</title>
	<meta property="og:title" content={title} />
</svelte:head>

{#if content}
	<article>
		<h1>{title}</h1>
		<p>Publicado em: {date}</p>
		<svelte:component this={content} />
		{#if posts}
			<ul>
				{#each posts as post}
					<li>
						<h2>
							<a href={post.path}>
								{post.meta.title}
							</a>
						</h2>
						Publicado em {post.meta.date}
					</li>
				{/each}
			</ul>
		{:else}
			Não há posts para serem lidos
		{/if}
	</article>
{:else}
	404 - Página não encontrada
{/if}
