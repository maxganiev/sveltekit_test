<script context="module">
	export async function load({ fetch }) {
		const req = await fetch('/api/getItems');
		const res = await req.json();

		return { props: { fetchedData: res } };
	}
</script>

<script>
	import Items from '../components/Items.svelte';
	import { items } from '../stores/items';

	export let fetchedData;

	$: {
		items.setList(fetchedData);
	}
</script>

<main>
	<Items list={fetchedData} />
</main>
