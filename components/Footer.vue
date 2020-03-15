<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="row footer-content">
                <div class="col-md-4 footer-about">
                    <h1 class="footer-title">About agensy</h1>
                    <div class="footer-text">
                        <p>The world has become so fast paced that people don’t want to stand by reading a page of information to be they would much rather look at a presentation and understand</p>
                    </div>
                </div>  
                <div class="col-md-4 footer-nav">
                    <h1 class="footer-title">Navigation links</h1>
                    <div class="column">
                        <ul class="column-list">
                            <li class="column-item">
                                <nuxt-link class="column-link" to="/">Home</nuxt-link>
                            </li>
                            <li class="list-item">
                                <nuxt-link class="column-link" to="/about">About</nuxt-link>
                            </li>
                            <li class="list-item">
                                <nuxt-link class="column-link" to="/services">Services</nuxt-link>
                            </li>
                            <li class="list-item">
                                <nuxt-link class="column-link" to="/contacts">Contacts</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 footer-letter">
                    <h1 class="footer-title">Newsletter</h1>
                    <div class="footer-text"><p>For business professionals caught between high OEM price and mediocre print and graphic output.</p></div>
                        <div class="input-group mb-2 mr-sm-2 send-form">
                            <input type="text" class="form-control send-input" id="inlineFormInputGroupUsername2" placeholder="Email adress">
                            <div class="input-group-prepend">
                                <div class="input-group-text send-btn">@</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="footer-basement">
                <p class="basement-text">Copyright ©2020 All rights reserved | This template is made with <span class="heart">&#10084;</span> by <nuxt-link class="basement-link" to="/">Colorlib</nuxt-link></p>
            </div>
        </div>
    </footer>
</template>
<style lang="sass">
.footer
    background-color: #04091e
    &-container
        padding-top: 110px
    &-title
        color: #ffffff
        font-size: 20px
        text-transform: uppercase
        font-weight: 700
    &-content
        padding-bottom: 40px
        border-bottom: 1px solid rgba(255, 255, 255, 0.1)
    p
        color: #777777
        font-size: 15px
    &-basement
        display: flex
        padding-top: 18px
        padding-bottom: 18px
    &-nav
        text-align: center
.column
    &-link 
        color: #777777
        font-size: 15px
.heart
    color: #6059f6
.send
    &-form
        padding-top: 15px
    &-input
        border-radius: 0
        background-color: #04091e
        color: #999999
        padding-left: 20px
        width: 80%
        font-size: 14px
        border: 1px solid #333333
        &:focus
            outline: none
            background-color: #04091e
            border-color: #333333
            color: #999999
    &-btn
        background-color: #6059f6
        color: #ffffff
        cursor: pointer
        border: none
.basement-link
    color: #6059f6
    &:hover
        color: #6059f6
</style>