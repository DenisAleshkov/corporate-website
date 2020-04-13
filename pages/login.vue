<template>
	<div class="container auth-form">
		<div v-if="$route.query.message" class="alert alert-danger" role="alert">
  			Need login
		</div>
		<div class="auth-form__header">
			<h1 class="auth-form__title">Login</h1>
		</div>
		<form @submit.prevent="onSubmit">
  			<div class="form-group">
    			<label for="exampleInputEmail1 text">Email address</label>
    			<input type="email" class="form-control" aria-describedby="emailHelp" v-model="login.email">
  			</div>
  			<div class="form-group">
    			<label for="exampleInputPassword1 text">Password</label>
    			<input type="password" class="form-control" v-model="login.password">
  			</div>
  			<div class="form-group auth-form__btn">
  				<button type="submit" class="btn btn-primary main-button">Submit</button>
  			</div>
			<div class="auth-form__home-link">
				<nuxt-link class="badge badge-info" to="/">go to home</nuxt-link>
			</div>
		</form>
	</div>
</template>

<script>
export default{
	layout: 'empty',
	data() {
		return {
			login: {
				email: 'aleshkov592@gmail.com',
				password: '123456'
			}
		}
	},
	methods: {
		onSubmit() {
			this.$store.dispatch('login');
			this.$router.push('/');
		}
	}
}
</script>
<style lang="sass" >
.auth-form
	background-color: #f8f8ff
	width: 450px
	padding: 30px 50px
	&__header
		display: flex
	&__title
		font-size: 34px
		color: #2a2a2a
		line-height: 1.25
		font-weight: 700
	&__btn button
		width: 100%
	&__home-link
		text-align: center
</style>