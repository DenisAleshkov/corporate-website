<template>
	<div class="main">
		<IndexHeader/>	
		<Services/>
		<ContentBanner/>
		<CardsImage/>
		<Carousel/>
		<SearchForm/>
		<OurBlog/>
	</div>
</template>

<script>
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';
import IndexHeader from '@/components/Header/IndexHeader';
import ContentBanner from '@/components/ContentBanner';
import CardsImage from '@/components/CardsImage';
import SearchForm from '@/components/Forms/SearchForm';
import OurBlog from '@/components/OurBlog';
export default{
	components:{
		Services,
		Carousel,
		IndexHeader,
		ContentBanner,
		CardsImage,
		SearchForm,
		OurBlog
	}
}
</script>
