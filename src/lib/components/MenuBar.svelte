<script>
</script>

<nav class={`MenuBar`}>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
	<a href="/contact">Contact</a>
</nav>

<style lang="scss">
	.MenuBar {
		width: 72px;
		display: flex;
		flex-direction: column;
		position: fixed;
		height: 100vh;
		background-color: var(--neutral-100);
		z-index: 2;

		a {
			color: var(--neutral-white);
			text-decoration: none;
			padding: 10px 0;
		}

		@media (max-width: 600px) {
			width: 100%;
			height: min-content;
			position: relative;
		}
	}
</style>
