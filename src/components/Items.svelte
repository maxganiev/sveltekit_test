<script>
	export let list;
	const baseUrl = 'https://www.elcomspb.ru/image/';
</script>

<section class="sections-items">
	{#each list as item}
		<a style="background: #eee" href="/items/{item.category_id}">
			<img src={baseUrl + item.image} alt="a product..." />
			<p>{item.name}</p>
		</a>
	{/each}
</section>

<style lang="scss">
	section {
		display: grid;
		justify-content: center;
		align-items: flex-end;
		grid-template-columns: (repeat(2, 1fr));
		column-gap: 1rem;
		row-gap: 1rem;
		text-align: center;

		a {
			display: block;

			img {
				width: 200px;
				height: 200px;
				object-fit: contain;
			}
		}
	}
</style>
