<template>
    <div class="z-page">
        <h1 class="title">You want us to do</h1>
        <div class="options">
            <div class="lineOne">
                <button @click="checked" value="app">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    App Design
                </button>
                <button @click="checked" value="craphic">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    Craphic Design
                </button>
                <button @click="checked"  value="motion">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    Motion Design
                </button>
            </div>
            <div class="lineTwo">
                <button @click="checked" value="ux">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    UX Design
                </button>
                <button @click="checked"  value="web">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    Web Design
                </button>
            </div>
            <div class="lineThree">
                <button @click="checked"  value="marketing">
                    <svg class="get" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"></path>
                      </g>
                    </svg>
                    Marketing
                </button>
            </div>
        </div>
        <div class="inform">
            <form autocomplete="off">
                <label for="name">Name</label>
                <input id="name" type="text" @click="upup" @blur="back">
            </form>
            <form autocomplete="off">
                <label for="email">Email</label>
                <input id="email" type="email" @click="upup" @blur="back">
            </form>


        </div>
        <button class="send">Send Request</button>
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
    .z-page {
        text-align: center;
    }
    h1 {
        letter-spacing: 2px;
        font-size: 30px;
    }
    .options {
        margin-top: 2%;
        height: 45%;
        div {
            height: 33.3%;
        }
        button {
            width: 205px;
            height: 54px;
            margin: 5px 20px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            background: none;
            border: solid 2px #fff;
        }
        .get {
            padding-right: 5px;
            position: relative;
            top: 1px;
            width: 15px;
            fill: #fff;
            display: none;
        }

        .active {
            border: solid 2px #f1c40f ;
            background: #f1c40f;
        }
    }
    .inform {
        position: relative;
        margin-top: 1%;
        height: 12%;
    }
    form {
        height: 50px;
        width: 315px;
        margin: 0 20px;
        display: inline;
        input {
            position: relative;
            height: 50px;
            width: 315px;
            color: #fff;
            font-size: 20px;
            outline: none;
            border: none;
            border-bottom: solid 1px #fff;
            background: none;
        }
        label {
            transition: all .3s ease;
            position: absolute;
            top: 2px;
            font-size: 30px;
            font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
            font-weight: 600;
        }
    }
    .send {
        margin-top: 2%;
        width: 400px;
        height: 50px;
        background: #f1c40f;
        color: #fff;
        font-size: 20px;
        font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
        font-weight: 600;
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
          checked() {
            let e = event.target;
            let classname = e.className;
            let tagname = e.tagName;
            if (tagname == 'BUTTON') {
                if (classname != 'active')
                {
                    e.className = 'active';
                    e.firstChild.style.display = 'inline-block';
                }
                else if (classname == 'active'){
                    e.className = e.className.replace(classname, ' ');
                    e.firstChild.style.display = 'none';
                }
            }
            else if (tagname == 'svg') {
                e.parentNode.className = '';
                e.style.display = 'none';
            }
            else if (tagname = 'path') {
                let o = e.parentNode;
                o.parentNode.parentNode.className = '';
                o.parentNode.style.display = 'none';
            }
          },
          upup() {
              let e = event.target;
              let labels = e.previousSibling.previousSibling;
              labels.style.top = '-25px';
              labels.style.fontSize = '17px';
              labels.style.fontWeight = '500';
          },
          back() {
              let e = event.target;
              if (e.value == ''){
                  let e = event.target;
                  let labels = e.previousSibling.previousSibling;
                  labels.style.top = '2px';
                  labels.style.fontSize = '30px';
              }
          },
        elseUp() {
            console.log(11111);
            let m = document.getElementsByName(input);
            if (m.value != '') {
                let e = event.target;
                let labels = e.previousSibling.previousSibling;
                labels.style.top = '-25px';
                labels.style.fontSize = '17px';
                labels.style.fontWeight = '500';
            }
          }
        }
    }
</script>
