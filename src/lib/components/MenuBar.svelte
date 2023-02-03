<script>
	export let collapsed;
	const changeCollapsed = () => {
		collapsed = !collapsed;
	};
</script>

<nav class={`MenuBar ${collapsed ? 'collapsed' : ''}`}>
	<div
		class={`MenuBar__button ${collapsed ? 'rotated' : ''}`}
		on:click={changeCollapsed}
		on:keyup={changeCollapsed}
	/>
	<a href="/">
		<img src="./images/house.svg" alt="Início" />
		<div>Início</div>
	</a>
	<a href="/projects">
		<img src="./images/folder.svg" alt="Projetos" />
		<div>Projetos</div>
	</a>
	<a href="/blog"
		><img src="./images/book.svg" alt="Blog" />
		<div>Blog</div>
	</a>
	<a href="/contact"
		><img src="./images/contact.svg" alt="Contato" />
		<div>Contato</div>
	</a>
	<a href="/about"
		><img src="./images/profile.svg" alt="Sobre" />
		<div>Sobre</div>
	</a>
</nav>

<style lang="scss">
	.MenuBar {
		width: 240px;
		display: flex;
		flex-direction: column;
		background-color: var(--neutral-100);
		color: var(--neutral-white);
		position: fixed;
		height: 100vh;
		transition: all 1s ease-in-out;
		z-index: 2;

		a {
			color: var(--neutral-white);
			text-decoration: none;
			padding: 10px 0;
			height: 64px;
			padding-left: 24px;
			display: flex;
			gap: 16px;
			align-items: center;
			cursor: pointer;

			.active {
				box-shadow: inset 8px 0 0px var(--neutral-white);
			}

			&:last-child {
				margin-top: auto;
			}

			img {
				filter: invert(1);
				opacity: 0.9;
			}

			div {
				color: var(--neutral-white);
				transition: all 0.6s ease-in-out;
			}
		}

		&.collapsed {
			width: 72px;
			a > div {
				visibility: hidden;
				opacity: 0;
			}
		}

		@media (max-width: 600px) {
			width: 100%;
			height: min-content;
			position: relative;
		}
	}

	.MenuBar__button {
		content: url('images/left-arrow.svg');
		padding: 10px;
		border-radius: 50%;
		background-color: var(--neutral-80);
		position: absolute;
		top: 50%;
		right: -22px;
		cursor: pointer;
		transition: transform 1s ease-in-out;

		&.rotated {
			transform: rotate(540deg);
		}

		&:hover {
			background-color: var(--neutral-50);
		}
	}
</style>
