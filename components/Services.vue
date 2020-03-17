<template>
    <div class="container services">
        <div class="main-title">
            <div class="main-logo">
                <img src="/images/section-icon.png" alt="Logo">
            </div>
            <h1 class="title">Our Popular Services</h1>
            <div class="title-text">
                <p class="text">Fowl have fruit moveth male they are that place you will lesser</p>
            </div>
        </div>
          <div class="row services-items">
              <div class="col-sm-4 col-md-4  item">
                  <div class="item-image">
                      <img src="/images/service1.png"  class="img-fluid" alt="service">
                  </div>
                 <h1 class="item-title">
                     Hotel Booking
                 </h1>
                 <div class="item-text">
                     <p class="text">Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                 </div>
              </div>
               <div class="col-sm-4 col-md-4  item">
                  <div class="item-image">
                      <img src="/images/service2.png"  class="img-fluid" alt="service">
                  </div>
                 <h1 class="item-title">
                    Flight Booking
                 </h1>
                 <div class="item-text">
                     <p class="text">Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                 </div>
              </div>
              <div class="col-sm-4 col-md-4  item">
                  <div class="item-image">
                      <img src="/images/service3.png"  class="img-fluid" alt="service">
                  </div>
                 <h1 class="item-title">
                    Destination Booking
                 </h1>
                 <div class="item-text">
                     <p class="text">Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                 </div>
              </div>
          </div>
    </div>
</template>
<script>
</script>
<style lang="sass">
.services
    &-items
        flex-wrap: nowrap
.item
    background-color: #f8f8ff
    display: flex
    flex-direction: column
    align-items: center
    transition: all .5s ease
    text-align: center
    padding: 60px  40px
    &:not(:last-child)
        margin-right: 25px
    &-image
        min-height: 190px
    &-title
        font-family: 'Roboto Condensed', sans-serif
        font-size: 20px
        font-weight: 700
        margin-top: 20px
        margin-bottom: 20px 
    &:hover
        background-color: #ffffff
</style>