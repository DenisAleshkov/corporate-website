<template>
	<div class="pop-up">
		<div class="left-part">
			<h1 class="item-title pop-up-title">Paris tour offer</h1>
			<span class="item-add">5 days offer</span>
			<div class="item-text">
				<p class="text">We proper guided out tourist</p>
			</div>
		</div>
		<div class="right-part">
			<span class="cost">&#36;65/day</span>
		</div>
	</div>
</template>
<style lang="sass">
.left-part
	margin-right: 70px
.item-add
	font-size: 15px
    color: #555555
.pop-up
	display: flex
	justify-content: space-between
	align-items: baseline
	position: absolute
	bottom: 0
	background-color: #ffffff
	padding: 40px
	transition: all .6s ease 
	opacity: 0
	&-title
		font-size: 1.5rem
		margin-bottom: 5px
</style>