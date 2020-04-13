<template>
	<div class="about">
		<Header/>
		<ContentBanner/>
		<Carousel/>
		<SearchForm/>
	</div>
</template>
<script>
	import Carousel from '@/components/Carousel';
	import ContentBanner from '@/components/ContentBanner';
	import Header from '@/components/Header/AboutHeader';
	import SearchForm from '@/components/Forms/SearchForm'
	export default{
		components:{
			Carousel,
			ContentBanner,
			Header,
			SearchForm
		},
		middleware: 'authenticated'
	}
</script>