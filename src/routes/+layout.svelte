<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import bootstrapJs from 'bootstrap/dist/js/bootstrap.bundle.js?url';

	let { children } = $props();

	// Dark mode setup
	type Theme = 'light'|'dark';
	let theme: Theme = $state('light');
	$effect(() => {
		const storedTheme = window.localStorage.getItem('theme');
		if (storedTheme === 'light' || storedTheme === 'dark') {
			setTheme(storedTheme);
			window.document.body.setAttribute('data-bs-theme', theme);
		} else {
			const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
			if (darkModeMql && darkModeMql.matches) {
				setTheme('dark');
			}
		}
	});
	function setTheme(newTheme: Theme) {
		theme = newTheme;
		window.document.body.setAttribute('data-bs-theme', newTheme);
		window.localStorage.setItem('theme', newTheme);
	}
	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src="{bootstrapJs}"></script>
</svelte:head>

<main class="container" style="position: relative;">
	<ul class="nav">
		<li class="nav-item"><span class="nav-link brand-link disabled">Guild Wars JDR</span></li>
		<li class="nav-item"><a class="nav-link" aria-current="page" href="/">Accueil</a></li>
		<li class="nav-item"><a class="nav-link" aria-current="page" href="/Preambule">Préambule</a></li>
		<li class="nav-item"><a class="nav-link" aria-current="page" href="/Histoire/Chronologie">Chronologie</a></li>
		<li class="nav-item"><a class="nav-link" aria-current="page" href="/Histoire/Carte">Carte</a></li>
		<li class="nav-item"><a class="nav-link" aria-current="page" href="/Scenario/Propheties-Pre-fournaise">Scénario : prologue</a></li>
		<li class="nav-item">
			<button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Professions</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="/Professions/Elementaliste/">Élémentaliste</a></li>
				<li><a class="dropdown-item" href="/Professions/Envouteur/">Envoûteur</a></li>
				<li><a class="dropdown-item" href="/Professions/Guerrier/">Guerrier</a></li>
				<li><a class="dropdown-item" href="/Professions/Moine/">Moine</a></li>
				<li><a class="dropdown-item" href="/Professions/Necromant/">Nécromant</a></li>
				<li><a class="dropdown-item" href="/Professions/Rodeur/">Rôdeur</a></li>
			</ul>
		</li>
		<li class="nav-item">
			<button class="nav-link" onclick={toggleTheme}>
				{theme === 'light' ? '🌙' : '☀'}
			</button>
		</li>
	</ul>

	{@render children()}
</main>

<style>

</style>
