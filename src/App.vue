<template>
    <div class="g-page">
        <div class="nav">
            <div class="nav-out">
                <a>
                    <img src="./assets/logo.png">
                    <span>GLOBAL</span>
                </a>
            </div>
        </div>
        <div class="main">
            <div class="slide-nav">
                <ul class="slide-out">
                    <li class="home"><router-link :to="{ name: 'home' }" exact>Home</router-link></li>
                    <li class="works"><router-link :to="{ name: 'works' }">Works</router-link></li>
                    <li class="about"><router-link :to="{ name: 'about' }">About</router-link></li>
                    <li class="contact"><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                    <li class="us"><router-link :to="{ name: 'us' }">Hire us</router-link></li>
                </ul>
            </div>
            <div class="content">
                <transition name="fade"><router-view></router-view></transition>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    @font-face{
        font-family:'Montserrat';
        src:url("./assets/fonts/Montserrat-Black.eot");
        src:local("☺"),url("./assets/fonts/Montserrat-Black.woff") format("woff"),
        url("./assets/fonts/Montserrat-Black.ttf") format("truetype"),
        url("./assets/fonts/Montserrat-Black.svg") format("svg");
        font-weight:900;
        font-style:normal
    }

    .mid {
        margin-left: auto;
        margin-right: auto;
    }
    .clearfix() {
        &:after, &:before {
            content: '';
            display: block;
            clear: both;
        }
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    body, html {
        margin: 0;
        padding: 0;
        border: 0;
        min-height: 100%;
        height: 100%;
        font-family: "Montserrat",sans-serif;
        background: #0c0c0c;
        color: #fff;
        line-height: 1.6;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    a, button {
        cursor: pointer;
        outline: none;
    }
    .g-page {
        width: 100%;
        min-width: 1364px;
        height: 100%;
        .clearfix();
        position: relative;
        overflow-y: hidden;
        overflow-x: hidden;
    }
    .nav {
        position: absolute;
        width: 100%;
        height: 70px;
        background: #0c0c0c;
        .nav-out {
            position: relative;
            z-index: 2;
            width: 90%;
            min-width: 1228px;
            height: 70px;
            .mid;
            display: flex;
            align-items: center;
            img {
                vertical-align: middle;
            }
            span {
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                height: 28px;
                vertical-align: middle;
            }
        }
    }
    .main {
        position: relative;
        width: 90%;
        max-width: 90%;
        min-width: 1228px;
        height: 100%;
        .mid;
        .clearfix();
        padding-top: 70px;
    }
    .slide-nav {
        .clearfix();
        float: left;
        position: relative;
        width: 10%;
        height: 100%;
        padding-top: 5%;
        z-index: 2;
        .slide-out {
            .clearfix();
            list-style: none;
            li {
                float: left;
                font-size: 17px;
                line-height: 70px;
                border-left: solid 1px #555;
                padding-left: 30px;
                cursor: pointer;
                display: inline;
            }
        }
    }
    .content {
        float: left;
        z-index: 0;
        position: relative;
        width: 90%;
        height: 100%;
    }
    .z-page {
        position: relative;
        height: 100%;
    }
    .router-link-active {
        color: #f1c40f;
        font-size: 22px;
    }
</style>
