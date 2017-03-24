<template>
    <div class="z-page">
        <div class="banner">
            <div class="title">
                <h1>We<br>believe in<br>passionate<br>people</h1>
                <div class="square"></div>
                <div class="circle"></div>
                <div class="diamond"></div>
                <div class="triangle"></div>
                <a href="#/about"><span>CAREER</span><span class="arrow">&#10140</span></a>
            </div>
            <div class="bg">
            </div>
        </div>
        <div class="album">
            <div class="left">
                <p>WINNERS</p>
            </div>
            <div class="mid">
                <p>PHILOSOPHY</p>
            </div>
            <div class="right">
                <p>HISTORY</p>
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
        width: 100%;
        .clearfix();
    }
    .title {
        position: relative;
        float: left;
        padding-left: 70px;
        font-size: 35px;
        line-height: 70px;
        .circle {
            position: absolute;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: #f1c40f;
            top: 63px;
            left: 337px;
        }
        .diamond {
            position: absolute;
            height: 12px;
            width: 12px;
            background: #f1c40f;
            transform: rotate(45deg);
            top: 20px;
            right: -5px;
        }
        .triangle {
            position: absolute;
            height: 0;
            width: 0;
            border-top: 12px solid #f1c40f;
            border-right: 12px solid transparent;
            top: -17px;
            left: 250px;
            transform: rotate(-30deg);
        }
        .square {
            position: absolute;
            height: 12px;
            width: 12px;
            background: #f1c40f;
            right: 120px;
            bottom: 82px;
        }
        a {
            padding-top: 60px;
            font-size: 15px;
            font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
            font-weight: 600;
            .arrow {
                padding-left: 8px;
            }
            &:hover {
                .arrow {
                    transition: all .3s ease;
                    padding-left: 15px;
                }
            }
        }
    }
    .bg {
        position: absolute;
        width: 392px;
        height: 631px;
        background: url("./../assets/hack.png");
        top: -100px;
        right: 100px;
        z-index: -2;
    }
    .album {
        padding-left: 50px;
        div {
            float: left;
            margin: 20px;
            height: 95px;
            width: 170px;
            border: solid 4px #f1c40f;
            cursor: pointer;
            &:hover {
                p {
                    margin-top: 100px;
                }
            }
        }
        .left {
            background: url("../assets/left.jpg") center;
        }
        .mid {
            background: url("../assets/mid.jpg") center;
        }
        .right {
            background: url("../assets/right.jpg") center;
        }
        p {
            margin-top: 80px;
            margin-left: 15px;
            font-size: 18px;
            transition: all .3s ease;
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
        },
        methods: {

        }
    }
</script>
