<template>
	<div class="main">
		<IndexBanner/>	
		<Services/>
		<ContentBanner/>
		<Carousel/>
	</div>
</template>

<script>
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';
import IndexBanner from '@/components/IndexBanner';
import ContentBanner from '@/components/ContentBanner';
export default{
	components:{
		Services,
		Carousel,
		IndexBanner,
		ContentBanner
	}
}
</script>

<style lang="sass">

</style>

