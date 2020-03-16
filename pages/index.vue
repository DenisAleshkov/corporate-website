<template>
	<div class="main">
		<IndexBanner/>	
		<Services/>
		<ContentBanner/>
		<Carousel/>
		<CardsImage/>
	</div>
</template>

<script>
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';
import IndexBanner from '@/components/IndexBanner';
import ContentBanner from '@/components/ContentBanner';
import CardsImage from '@/components/CardsImage'
export default{
	components:{
		Services,
		Carousel,
		IndexBanner,
		ContentBanner,
		CardsImage
	}
}
</script>

<style lang="sass">
body

</style>

