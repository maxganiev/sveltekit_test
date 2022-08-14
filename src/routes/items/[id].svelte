<script context="module">
	import { items } from '../../stores/items';
	export async function load({ url, params }) {
		let products;
		items.list.subscribe((val) => (products = val));
		let id = params.id;
		let product = products.find((item) => item.category_id == id);
		return { props: { id, product } };
	}
</script>

<script>
	import Item from '../../components/Item.svelte';
	export let product;
</script>

<Item current={product} />
