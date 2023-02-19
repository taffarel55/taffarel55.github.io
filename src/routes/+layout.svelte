<script>
	import Footer from '$lib/partials/Footer.svelte';
	import Header from '$lib/partials/Header.svelte';
	import MenuBar from '$lib/partials/MenuBar.svelte';
	import '$lib/styles/content.scss';
	import '$lib/styles/prism-vsc-dark-plus.css';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';

	import { pageData } from '$lib/stores/pageData.js';
	let title;
	pageData.subscribe((value) => {
		title = value.title;
	});

	export let data;

	let collapsed = false;
</script>

<div class="App">
	<MenuBar bind:collapsed />

	<main class={`Page ${collapsed ? 'collapsed' : ''}`}>
		<Header bind:title />
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
		padding: 3rem 5rem;

		@media (max-width: 600px) {
			padding: 4.2rem;
		}
	}

	.App {
		display: flex;
		height: 100vh;

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.Page {
		width: calc(100% - 240px);
		height: max-content;
		margin-left: 240px;
		background: var(--background-dark);
		transition: all 1s ease-in-out;
		display: flex;
		flex-direction: column;
		align-items: stretch;

		&.collapsed {
			width: calc(100% - 72px);
			margin-left: 72px;
		}

		@media (max-width: 600px) {
			margin-left: 0 !important;
			width: 100% !important;
		}
	}
</style>
