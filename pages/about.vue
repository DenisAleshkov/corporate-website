<template>
	<div class="about">
		<ContentBanner/>
		<Carousel/>
	</div>
</template>
<script>
	import Carousel from '@/components/Carousel';
	import ContentBanner from '@/components/ContentBanner'
	export default{
		components:{
			Carousel,
			ContentBanner
		}
	}
</script>