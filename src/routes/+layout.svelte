<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import '$lib/styles/prism-vsc-dark-plus.css';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';
	export let data;
</script>

<div class="App">
	<MenuBar />

	<main class={`Page`}>
		<Header />
		{#key data.currentRoute}
			<div class="content" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</div>
		{/key}
		<Footer />
	</main>
</div>

<style lang="scss">
	// TODO: Remover isso
	.content {
		padding: 20px;
	}

	.App {
		display: flex;
		height: 100vh;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.Page {
		width: calc(100% - 72px);
		height: 100vh;
		margin-left: 72px;
		background: var(--neutral-90);
		transition: all 1s ease-in-out;
		display: flex;
		flex-direction: column;
		align-items: stretch;

		@media (max-width: 600px) {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
