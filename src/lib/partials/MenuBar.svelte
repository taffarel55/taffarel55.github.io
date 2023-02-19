<script>
	export let collapsed;
	const changeCollapsed = () => (collapsed = !collapsed);

	import { page } from '$app/stores';
	let path;
	$: path = '/' + $page.url.pathname.split('/')[1];
</script>

<nav class="MenuBar" class:collapsed>
	<div
		class="MenuBar__button"
		class:collapsed
		on:click={changeCollapsed}
		on:keyup={changeCollapsed}
	/>
	<a href="/" class:active={path === '/'}>
		<img src="$lib/images/MenuBar/house.svg" alt="Início" />
		<div>Início</div>
	</a>
	<a href="/projects" class:active={path === '/projects'}>
		<img src="$lib/images/MenuBar/folder.svg" alt="Projetos" />
		<div>Projetos</div>
	</a>
	<a href="/blog" class:active={path === '/blog'}>
		<img src="$lib/images/MenuBar/book.svg" alt="Blog" />
		<div>Blog</div>
	</a>
	<a href="/contact" class:active={path === '/contact'}>
		<img src="$lib/images/MenuBar/contact.svg" alt="Contato" />
		<div>Contato</div>
	</a>
	<a href="/about" class:active={path === '/about'}>
		<img src="$lib/images/MenuBar/profile.svg" alt="Sobre" />
		<div>Sobre</div>
	</a>
</nav>

<style lang="scss">
	.MenuBar {
		width: 240px;
		display: flex;
		flex-direction: column;
		background-color: var(--background-darkest);
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

			&.active {
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
			width: 100% !important;
			height: min-content;
			max-height: 500px;
			position: relative;
			flex-direction: row;
			justify-content: space-evenly;
			padding-bottom: 40px;

			a {
				display: flex;
				flex-direction: column;
				padding: 8px;
				width: 20%;

				&.active {
					box-shadow: none;
					box-shadow: inset 0 4px 0px var(--neutral-white);
				}
			}

			&.collapsed {
				max-height: 32px;
				a {
					visibility: hidden;
					opacity: 0;
				}
			}
		}
	}

	.MenuBar__button {
		content: url('$lib/images/MenuBar/left-arrow.svg');
		padding: 10px;
		border-radius: 50%;
		background-color: var(--background-lightdark);
		position: absolute;
		top: 50%;
		right: -22px;
		cursor: pointer;
		transition: transform 1s ease-in-out;

		&.collapsed {
			transform: rotate(540deg);
		}

		&:hover {
			background-color: var(--neutral-50);
		}

		@media (max-width: 600px) {
			transform: rotate(90deg);
			padding: 10px;
			border-radius: 50%;
			position: absolute;
			top: calc(100% - 22px);
			right: calc(50% - 22px);
			cursor: pointer;

			&.collapsed {
				transform: rotate(-90deg);
			}
		}
	}
</style>
