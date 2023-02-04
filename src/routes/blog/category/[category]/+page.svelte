<script>
	export let data;
</script>

{#if data.posts?.length}
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
			Categories {post.meta.categories}
		</li>
	{/each}
{:else}
	404 - Não tem posts com essa categoria
{/if}
