<template>
  <div class="container header">
  <nav class="navbar navbar-expand-lg navbar-light header-navbar">
  <Logo class="navbar-brand"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-wrapper" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link exact active-class="active" class="header-link" to="/">Home</nuxt-link>  
      </li>
      <li class="nav-item">
        <nuxt-link active-class="active" class="header-link" to="/about">About</nuxt-link> 
      </li>
      <li class="nav-item">
        <nuxt-link active-class="active" class="header-link" to="/services">Services</nuxt-link>  
      </li>
      <li class="nav-item">
        <nuxt-link active-class="active" class="header-link" to="/contacts">Contacts</nuxt-link>  
      </li>
       <li class="nav-item">
        <nuxt-link active-class="active" class="main-button" to="/">Get Started</nuxt-link> 
      </li>
    </ul>
  </div>
</nav>
</div>
</template>
<script>
  import Logo from '@/components/Navbar/Logo'
  export default{
    components:{
      Logo
    }
  }
</script>

<style lang="sass">
.header-link
  font-family: "Roboto", sans-serif
  color: #2a2a2a
  font-weight: 600
  font-size: 15px
  transition: all .5s ease
  &:hover
    color: #6059f6
.active
  color: #6059f6
.nav-item:not(:last-child)
  margin-right: 15px
.main-button
  @include mainButton()
</style>