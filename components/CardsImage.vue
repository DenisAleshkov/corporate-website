<template>
	<div class="container offer">
		<div class="row offer-items">
			<div class="col-md-6 offer-image mrg-to-up">
				<img src="/images/tour1.png" alt="tour1" class="img-fluid">
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
				<img src="/images/tour2.png" alt="" class="img-fluid">
				<PopUp/>
			</div>
		</div>
		<div class="row offer-items">
			<div class="col-md-7 offer-image">
				<img src="/images/tour3.png" alt="tour1" class="img-fluid">
				<PopUp/>
			</div>
			<div class="col-md-5 offer-image">
				<img src="/images/tour4.png" alt="tour1" class="img-fluid full-tour">
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
	margin-top: 130px
	margin-bottom: 130px
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