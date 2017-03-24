<template>
    <div class="z-page">
        <div class="banner">
            <div class="title">
                <h1>Your next<br>interactive<br>experience</h1>
                <button><router-link :to="{ name: 'us' }">HIRE US &#10140<span class="btn-bg"></span></router-link></button>
            </div>
            <div class="astro"></div>
        </div>
        <div class="options">
            <div class="item">
                <router-link :to="{ name: 'home'}">
                    <h4>Metiew & Smith</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </router-link>
            </div>
            <div class="item">
                <router-link :to="{ name: 'home'}">
                    <h4>Fantasy interactive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </router-link>
            </div>
            <div class="item">
                <router-link :to="{ name: 'home'}">
                    <h4>Paul & shark</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .clearfix() {
        &:after, &:before {
            content: '';
            display: block;
            clear: both;
        }
    }
    .banner {
        .clearfix();
        padding-left: 5%;
        padding-top: 2%;
        position: relative;
        height: 400px;
        border-bottom: solid 2px #333;
    }
    .title {
        float: left;
        margin-top: 30px;
        h1 {
            position: relative;
            font-size: 68px;
            font-weight: 900;
            line-height: 1;
        }
        button {
            position: relative;
            margin-top: 50px;
            margin-left: 25px;
            padding: 8px 15px;
            background: none;
            color: #fff;
            font-size: 17px;
            font-weight: 700;
            .btn-bg {
                position: absolute;
                top: 0;
                left: 30px;
                right: 0;
                height: 100%;
                background-color: #f1c40f;
                z-index: -1;
                -webkit-transition: left .2s ease-in-out;
                transition: left .2s ease-in-out;
            }
            &:hover {
                background: #f1c40f;
            }
        }
    }
    .astro {
        position: absolute;
        height: 460px;
        width: 509px;
        display: block;
        background: url("./../assets/astronaut.png");
        right: -10px;
        top: -38px;
        z-index: 1000;
    }
    .options {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        top: 15px;
        .clearfix();
        .item {
            float: left;
            width: 250px;
            a {
                color: #333 !important;
                &:hover {
                    color: #fff !important;
                }
            }
            h4 {
                line-height: 45px;
            }
            p {
                font-size: 14px;
                font-weight: 100;
            }
        }
    }
</style>
<script type="text/babel">

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
