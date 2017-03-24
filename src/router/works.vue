<template>
    <div class="z-page">
        <h1 class="title">Selected Work</h1>
        <div id="slider">
            <div class="left-btn" @click="lSlide">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"></path>
                  </g>
                  </svg>
            </div>
            <div id="slider-box">
                <ul id="sliderUl">
                    <li class="index" v-for="(item, index) in banners" :key="item">
                        <img :src="item.imgUrl">
                        <p>{{ item.name }}</p>
                    </li>
                </ul>
            </div>
            <div class="right-btn" @click="rSlide">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"></path>
                  </g>
                  </svg>
            </div>
        </div>
        <div class="details">
            <p v-if="Wmouse">M-Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
            <p v-if="Wluan">L-Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
            <p v-if="Wyellow">R-Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
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
    .mid {
        margin-left: auto;
        margin-right: auto;
    }
    h1 {
        width: auto;
        text-align: center;
        font-size: 32px;
        .mid;
    }
    #slider {
        .clearfix();
        margin-top: 20px;
        position: relative;
    }
    #slider-box {
        .mid;
        width: 80%;
        height: 350px;
        position: relative;
        overflow: hidden;
    }
    svg {
        width: 20px;
        fill: #fff;
    }
    .left-btn {
        position: absolute;
        top: 125px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #282828;
        border-radius: 50%;
        cursor: pointer;
    }
    .right-btn {
        position: absolute;
        top: 125px;
        right: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #282828;
        border-radius: 50%;
        cursor: pointer;
    }
    ul {
        position: absolute;
        display: flex;
        width: 100%;
        height: 350px;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        left: 0;
        transition: all .8s ease;
        justify-content: space-between;
        li {
            display: block;
            margin-top: auto;
            margin-bottom: auto;
            overflow: hidden;
            opacity: .7;
            img {
                border-radius: 50%;
                height: 150px;
                width: 150px;
            }
            p {
                font-size: 17px;
                font-weight: 700;
                font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
                height: 50px !important;
                width: 100% !important;
                text-align: center;
            }
        }
        :nth-child(2) {
            opacity: 1;
            img {
                height: 300px;
                width: 300px;
            }
            p {
                font-size: 22px;
            }
        }
    }
    .details {
        .mid;
        margin-top: 10px;
        width: 300px;
        text-align: center;
        font-size: 14px;
        font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
        font-weight: 700;
    }
</style>
<script type="text/babel">

    export default{
        data(){
            return{
                banners: [
                    { imgUrl: './static/img/luan.jpg' ,name: 'Alex Nowak' },
                    { imgUrl: './static/img/mouse.jpg' ,name: 'Metiew & Smith' },
                    { imgUrl: './static/img/yellow.jpg' ,name: 'Victory' },
                ],
                Wmouse: true,
                Wluan: false,
                Wyellow: false
            }
        },
        components:{
        },
        methods: {
            smaller(ele,speed) {
                if (!ele) {
                    throw "fade function parameter errer.";
                }
                speed = !speed || speed <= 0 ? 1 : speed;
                        var _w = ele.offsetWidth;
                        var _h = ele.offsetHeight;
                        var _speed = _h / _w * speed;
                clearInterval(ele.timer);
                ele.timer = setInterval(function(){
                    _w -= speed;
                    _h -= _speed;
                    if (_w <= 150 || _h <= 150) {
                        clearInterval(ele.timer);
                    }
                    ele.style.width = _w + "px";
                    ele.style.height = _h + "px";
                }, 0);
            },
            bigger(ele,speed) {
                if (!ele) {
                    throw "fade function parameter errer.";
                }
                speed = !speed || speed <= 0 ? 1 : speed;
                var _w = ele.offsetWidth;
                var _h = ele.offsetHeight;
                var _speed = _h / _w * speed;
                clearInterval(ele.timer);
                ele.timer = setInterval(function(){
                    _w += speed;
                    _h += _speed;
                    if (_w >= 300 || _h >= 300) {
                        clearInterval(ele.timer);
                    }
                    ele.style.width = _w + "px";
                    ele.style.height = _h + "px";
                }, 0);
            },
            move(sp) {
                var oul = document.getElementById('sliderUl');
                oul.style.left = oul.offsetLeft + sp + 'px';
            },
            lSlide () {
                var oul=document.getElementById('sliderUl');
                var oli = oul.getElementsByTagName('li');
                console.log(oul.style.left);
                if (oul.offsetLeft == 0 || oul.offsetLeft == 292) {
                    this.move(-292);
                }
                for (var i = 0;i < oli.length; i++) {
                    if (oul.offsetLeft == 0) {
                        this.bigger(oli[2].firstChild,2);
                        oli[2].lastChild.style.fontSize = '22px';
                        oli[2].style.opacity = '1';
                        this.smaller(oli[1].firstChild,2);
                        oli[1].lastChild.style.fontSize = '17px';
                        oli[1].style.opacity = '.7';
                        this.Wyellow = true;
                        this.Wmouse = false;
                    }
                    else if (oul.offsetLeft == 292) {
                        this.bigger(oli[1].firstChild,2);
                        oli[1].lastChild.style.fontSize = '22px';
                        oli[1].style.opacity = '1';
                        this.smaller(oli[0].firstChild,2);
                        oli[0].lastChild.style.fontSize = '17px';
                        oli[0].style.opacity = '.7';
                        this.Wluan = false;
                        this.Wmouse = true;
                    }
                }
            },
            rSlide () {
                var oul=document.getElementById('sliderUl');
                var oli = oul.getElementsByTagName('li');
                console.log(oul.style.left);
                if (oul.offsetLeft == 0 || oul.offsetLeft == -292) {
                    this.move(292);
                }
                for (var i = 0;i < oli.length; i++) {
                    if (oul.offsetLeft == 0) {
                        this.bigger(oli[0].firstChild,2);
                        oli[0].lastChild.style.fontSize = '22px';
                        oli[0].style.opacity = '1';
                        this.smaller(oli[1].firstChild,2);
                        oli[1].lastChild.style.fontSize = '17px';
                        oli[1].style.opacity = '.7';
                        this.Wluan = true;
                        this.Wmouse = false;
                    }
                    else if (oul.offsetLeft == -292) {
                        this.bigger(oli[1].firstChild,2);
                        oli[1].lastChild.style.fontSize = '22px';
                        oli[1].style.opacity = '1';
                        this.smaller(oli[2].firstChild,2);
                        oli[2].lastChild.style.fontSize = '17px';
                        oli[2].style.opacity = '.7';
                        this.Wyellow = false;
                        this.Wmouse = true;
                    }
                }
            }
        }
    }
</script>
