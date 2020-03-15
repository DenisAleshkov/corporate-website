<template>
  <div>
  	<Navbar/>
    <div class="main-content">
    	<nuxt/>
    </div>
	<Footer/>
  </div>
</template>
<script>
	import Navbar from  '@/components/Header/Navbar';
	import Footer from '@/components/Footer';
	export default{
		components:{
			Navbar,
			Footer,
		}
	}
</script>
<style lang="sass">
body
	font-family: 'Roboto', sans-serif
	&::before
		@include addBgShape('./../assets/images/bg-shape-left.png', 595px, 660px, left)
	&::after
		@include addBgShape('./../assets/images/bg-shape-right.png', 755px, 860px, right)
a, a:hover
	text-decoration: none
ul
	margin-left: 0
	padding-left: 0
li
	list-style-type: none 
p
	margin: 0
	padding: 0
.title
	font-size: 34px
	color: #2a2a2a
	line-height: 1.25
	font-weight: 700
.text
	color: #888888
	font-size: 15px
	line-height: 1.667
.main-title
	margin-bottom: 80px
	text-align: center
</style>