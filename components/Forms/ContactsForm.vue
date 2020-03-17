<template>
	<div class="contacts-form">
		<div class="container">
			<div class="form-title">
				<h1 class="item-title">
					Get in Touch
				</h1>
			</div>
			<div class="row">
				<div class="col-md-8">
					<form name="contact" action="" method="post" netlify>
						<div class="form-group">
					    	<textarea class="form-control textarea-contacts" id="exampleFormControlTextarea" placeholder="Enter Message" rows="10"></textarea>
					  	</div>
					  	<div class="form-row">
						    <div class="form-group col-md-6">
						      <input type="text" class="form-control input-contacts" id="inputText" placeholder="Enter your name">
						    </div>
						    <div class="form-group col-md-6">
						      <input type="email" class="form-control input-contacts" id="inputEmail" placeholder="Enter email address">
						    </div>
					  	</div>
						 <div class="form-group">
						    <input type="text" class="form-control input-contacts" id="inputAddress" placeholder="Enter Subject">
						 </div>
						 <div class="form-group">
						 	<button type="submit" class="main-button send-btn">Send Message</button>
						 </div>
					</form>
				</div>
				<div class="col-md-4">
					<div class="contacts-list">
						<ul class="contacts-items">
							<li class="contacts-info">
								<span class="contacts-info__icons">
									&#10084;
								</span>
								<div class="contacts-info__body">
									<h1 class="item-title">Buttonwood, California.</h1>
									<div class="item-text">
										<p class="text">
											Rosemead, CA 91770
										</p>
									</div>
								</div>
							</li>
							<li class="contacts-info">
								<span class="contacts-info__icons">
									&#9742;
								</span>
								<div class="contacts-info__body">
									<h1 class="item-title">00 (440) 9865 562</h1>
									<div class="item-text">
										<p class="text">
											Mon to Fri 9am to 6pm
										</p>
									</div>
								</div>
							</li>
							<li class="contacts-info">
								<span class="contacts-info__icons">
									&#9993;
								</span>
								<div class="contacts-info__body">
									<h1 class="item-title">support@colorlib.com</h1>
									<div class="item-text">
										<p class="text">
											Send us your query anytime!
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
@include contactsForm()
.form-title .item-title
	font-size: 27px
.contacts
	&-info
		display: flex
		align-items: center
		&__icons
			color: #888888
			font-size: 35px
			font-weight: 400
			margin-right: 15px
		&__body
			.item-title
				font-size: 16px
				margin-bottom: 5px
.send-btn
	padding: 10px 40px
	border-radius: 5px
</style>