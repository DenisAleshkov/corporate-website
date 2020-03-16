<template>
	<div class="container offer">
		<div class="row offer-items">
			<div class="col-md-6 offer-image">
				<img src="@/assets/images/tour1.png" alt="tour1" class="img-fluid">
				<PopUp/>
			</div>
			<div class="col-md-6 offer-image">
				<div class="offer-title">
					<div class="banner-title">
						<h1 class="title">
							We offer worldwise tour plan recently
						</h1>
					</div>
					<div class="banner-text">
						<p class="text offer-text">
							Make she'd moved divided air. Whose tree that hath own upon them it multiply was blessed
						</p>
					</div>
				</div>
				<img src="@/assets/images/tour2.png" alt="" class="img-fluid">
				<PopUp/>
			</div>
		</div>
		<div class="row offer-items">
			<div class="col-md-7 offer-image">
				<img src="@/assets/images/tour3.png" alt="tour1" class="img-fluid">
				<PopUp/>
			</div>
			<div class="col-md-5 offer-image">
				<img src="@/assets/images/tour4.png" alt="tour1" class="img-fluid">
				<PopUp/>
			</div>
		</div>
	</div>
</template>
<script>
	import PopUp from '@/components/PopUp'
	export default{
		components:{
			PopUp
		}
	}
</script>
<style lang="sass">
.offer
	&-title
		padding: 10px 50px
	&-text
		font-size: 16px
	&-image
		position: relative
		&:hover .pop-up
			opacity: 1
	&-items
		align-items: flex-end
		&:last-child
			margin-top: 30px
.cost
	color: #007bff
	font-size: 25px
	font-weight: 700
</style>