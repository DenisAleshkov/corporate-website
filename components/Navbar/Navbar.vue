<template>
  <div class="header-navbar">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <Logo/>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar navbar-list">
                <li class="navbar-item">
                  <nuxt-link to="/"  exact active-class="active" class="nav-link" >Home</nuxt-link>
                </li>
                <li class="navbar-item">
                  <nuxt-link to="/about" active-class="active" class="nav-link">About</nuxt-link>
                </li>
                <li class="navbar-item">
                  <nuxt-link to="/services" active-class="active" class="nav-link">Services</nuxt-link>
                </li>
                <li class="navbar-item">
                  <nuxt-link to="/contacts" active-class="active" class="nav-link">Contacts</nuxt-link>
                </li>
              </ul>
            <div class="navbar-button">
              <nuxt-link to="/" active-class="active" class="main-button">Get Started</nuxt-link> 
            </div>
          </div>
        </nav>
      </div>
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
.navbar
  padding: 20px 0
  flex-grow: 1
  &-button
    display: flex
    flex-grow: 1
    justify-content: flex-end
.nav-link
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
.header-logo
  flex-grow: 1
.main-button
  @include mainButton()
</style>