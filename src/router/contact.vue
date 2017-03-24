<template>
    <div class="z-page">
        <div class="showBox">
            <div class="card">
                <div class="information">
                    <p>Pawia 5, 31-154 Kraków, Poland</p>
                    <p>ouremail@gmail.com</p>
                    <p>+86 12 345 67 89</p>
                </div>
                <div class="btn">
                    <button class="fir">Bēhance</button>
                    <button class="sec">dribbble</button>
                    <button class="thi">Contact Us</button>
                </div>
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
    .z-page {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url("../assets/map.png") center;
    }
    .showBox {
        width: 70%;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: 70px;
        .clearfix();
    }
    .card {
        float: right;
        margin-right: 30px;
        padding: 15px;
        width: 30%;
        height: 350px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
        background: #0c0c0c;
        box-shadow: 0 0 20px rgba(0,0,0,0.8);
        .information {
            margin-top: 15px;
        }
        p {
            padding: 6px;
        }
    }
    .btn {
        margin: auto;
        button {
            height: 38px;
            width: 130px;
            margin: 13px;
            font-family: Arial,Helvetica Neue,Helvetica,Microsoft YaHei, sans-serif;
            font-weight: 700;
            font-size: 16px;
            color: #fff;
        }
        .fir {
            background: #1769ff;
        }
        .sec {
            background: #ea4c89;
        }
        .thi {
            background: #0f33ff;
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
