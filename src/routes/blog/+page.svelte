<script>
	export let data;
</script>

<h1>Blog 📚</h1>

<p>Meus posts aparecerão aqui em breve, por enquanto esses são para teste:</p>

<br />

<ul>
	{#each data.posts as post}
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

<br />
<h2>🚧 Fazendo...</h2>
