<script>
	export let title;
</script>

<header>
	<div>{title}</div>
	<div>A B C</div>
</header>

<style lang="scss">
	header {
		padding: 1rem 5rem;
		background-color: var(--background-dark);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);

		@media (max-width: 600px) {
			padding: 5vw;
		}
	}
</style>
