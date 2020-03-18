
<template>
    <div class="slider">
        <div class="container slider-wrapper">
            <div class="slider-box">
        <div class="main-title">
            <div class="main-logo">
                <img src="/images/section-icon.png" alt="Logo">
            </div>
            <h1 class="title">Our Popular Services</h1>
            <div class="title-text">
                <p class="text">Fowl have fruit moveth male they are that place you will lesser</p>
            </div>
        </div>
        <client-only>
               <slick ref="slick" :options="slickOptions">
                    <div v-for="i in 3" :key="i" class="slick-slider my-slick">
                        <div class="avatar">
                            <img src="/images/t-slider1.png" alt="avatar" class="avatar-image">
                        </div>
                        <div class="content">
                            <div class="content-name">
                                <h1 class="name">Daniel heart</h1>
                                <span class="params text">Project manager, Nestle</span>
                            </div>
                            <div class="content-text">
                                <p class="text">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                            </div>
                        </div>
                    </div>
               </slick>
        </client-only>
        </div>
    </div>
    </div>
</template>

<script>
    export default{  
    data() {
        return {
        slickOptions: {
            dots: true,
            slidesToShow: 1,
            arrows: false
      }
    };
    },
}
</script>

<style lang="sass">
.my-slick
    background-color: #ffffff
    border-radius: 20px
    align-items: center
    justify-content: center
    padding: 15px 25px
.avatar
    margin-right: 40px
    display: inline-block
.slider
    margin-top: 130px
    margin-bottom: 130px
    padding: 130px 0
    background-color: #f8f8ff
    &-wrapper
        max-width: 950px
.slick-slide .flex-block
    display: flex
.fkex-block
    display: flex
.slick-dots li button:before
    transition: all .5s ease
    height: 4px
    background-color: #cdcad5
    text-indent: -9999px
    border-radius: 5px
.slick-dots li.slick-active button:before
    height: 6px
    background-color: #6059f6
.content-text .text
    font-style: italic
.content
    display: inline-block
    max-width: 70%
    &-name
        margin-bottom: 10px
        .name
            font-size: 20px
            font-weight: 700
            margin: 0
.slick-dots
    bottom: -70px
</style>