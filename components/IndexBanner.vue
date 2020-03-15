<template>
		<div class="container banner">
			<div class="row banner-wrapper">
				<div class="col-md-6 banner-description">
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
				<div class="col-md-6 banner-image">
					<img src="@/assets/images/hero-img.png" class="img-fluid" alt="hero">
				</div>
			</div>
		</div>
</template>
<style lang="sass">
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
.banner-button .home-button
	display: inline-block	
.purple-title
	font-size: 45px
	text-transform: uppercase
	color: #6059f6
	font-weight: 700	
</style>