<template>
		<div class="container banner bg-shape index-banner">
			<div class="row banner-wrapper">
				<div class="col-md-5 banner-description banner-respons">
					<div class="banner-title">
						<h1 class="purple-title">
							Travel More To Discover Yourself
						</h1>
					</div>
					<div class="banner-text">
						<p class="text">
							Air seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there is seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there 
						</p>
					</div>
					<div class="banner-button">
						<nuxt-link active-class="active" class="main-button" to="/">Get Started</nuxt-link>
					</div>
				</div>
				<div class="col-md-7 banner-image">
					<img src="/images/hero-img.png" class="img-fluid" alt="hero">
				</div>
			</div>
		</div>
</template>
<style lang="sass">
.index-banner
	margin-top: 50px
	margin-bottom: 280px
.banner
	&-wrapper
		display: flex
	&-description
		display: flex
		flex-direction: column
		justify-content: center
	&-title
		margin-bottom: 15px
	&-text
		margin-bottom: 40px
	&-image
		text-align: center
.banner-button .home-button
	display: inline-block	
.purple-title
	font-family: 'Roboto Condensed', sans-serif
	font-size: 45px
	text-transform: uppercase
	color: #6059f6
	font-weight: 900
.bg-shape
	&::before
		@include addBgShape('/images/bg-shape-left.png', 595px, 660px, left)
	&::after
		@include addBgShape('/images/bg-shape-right.png', 755px, 860px, right)
</style>