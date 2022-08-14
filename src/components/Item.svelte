<script>
	export let current;
	const baseUrl = 'https://www.elcomspb.ru/image/';
</script>

<div>
	<p><strong> {current.name} </strong></p>
	<img src={baseUrl + current.image} alt="a product... " />
</div>
