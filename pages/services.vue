<template>
	<div class="package">
		<Header/>
		<Services/>
		<CardsImage />
	</div>
</template>
<script>
	import Services from '@/components/Services';
	import CardsImage from '@/components/CardsImage';
	import Header from '@/components/Header/ServicesHeader';
	export default{
		components:{
			Services,
			CardsImage,
			Header
		}
	} 
</script>
<style lang="sass">
</style>