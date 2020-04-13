<template>
	<div class="container banner search-banner">
		<div class="row banner-wrapper">
			<div class="col-md-6 banner-description">
				<div class="banner-title">
					<h1 class="title">
						Search suitable
						and affordable plan
						for your tour
					</h1>
				</div>
				<div class="banner-text">
					<p class="text">
						Make she'd moved divided air. Whose tree that replenish tone hath own upon them it multiply was blessed is lights make gathering so day dominion so creeping
					</p>
				</div>
				<div class="banner-button">
					<nuxt-link active-class="active" class="main-button" to="/">Learn More</nuxt-link>
				</div>
			</div>
			<div class="col-md-6 search">
				<div class="form-title">
					<h1 class="item-title">
						Search Package
					</h1>
				</div>
				<form name="search" action="" method="post" netlify>
					  <div class="input-group mb-3">
						  <input type="text" class="form-control input-search" placeholder="Recipient's username"  aria-describedby="basic-addon1">
					  </div>
					  <div class="input-group mb-3">
						  <input type="text" class="form-control input-search" placeholder="дд.мм.гггг" aria-label="Username" aria-describedby="basic-addon1">
					  </div>
					  <div class="form-group">
					    <select class="form-control select-search">
					      <option value="disabled" disabled selected>Category</option>
					      <option class="option-control">8 AM</option>
					      <option class="option-control">12 PM</option>
					    </select>
					  </div>
 					  <div class="form-group select-search">
					    <select class="form-control select-search">
					      <option value="disabled" disabled selected>Tour duration</option>
					      <option class="option-control">8 AM</option>
					      <option class="option-control">12 PM</option>
					    </select>
					  </div>
 					  <div class="form-group">
					    <select class="form-control select-search">
					      <option value="disabled" disabled selected>Price range</option>
					      <option class="option-control">8 AM</option>
					      <option class="option-control">12 PM</option>
					    </select>
					  </div>	
						<div class="form-group search-button">
						 	<button type="submit" class="main-button">Search Package</button>
						 </div>
					</form>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
@include contactsForm()
.search-button
	display: flex
	justify-content: center
	.main-button
		border: none
.search
	padding: 60px
	background-color: #f8f8ff
	.item-title
		text-align: center
	&-banner
		margin-bottom: 130px
</style>