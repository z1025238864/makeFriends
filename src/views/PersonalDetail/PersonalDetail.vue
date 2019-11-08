<template>
<div class="personalDetail">
     <el-header>
      <PersonalNav />
    </el-header>
    <div class="mainContent">
        <div class="top">
            <div class="avatar">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658" alt="">
                <p>zdd</p>
            </div>
        </div>
        <div class="tab">
            <div class="title">
                <p class="main active"  style='text-align: center;' ref="main" @click="jumpPage( 'main' )">主頁</p>
                <p class="photo" style='text-align: center;' ref="photo" @click="jumpPage('photo')">相冊</p>
            </div>
                <div  ref="left" class="detail conactive">
                    <div class="left">
                        <p class="title">相冊</p>
                        <div class="pic">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658  " alt="">
                        </div>
                        <div class="info">
                            <p class="title">個人檔案</p>
                            <ul class="infoList">
                                <li class="infoItem">簡介：</li>
                                <li class="infoItem">性取向：</li>
                                <li class="infoItem">感情狀態：</li>
                                <li class="infoItem">國家：</li>
                                <li class="infoItem">城市：</li>
                                <li class="infoItem">工作：</li>
                                <li class="infoItem">收入：</li>
                                <li class="infoItem">年齡：</li>
                                <li class="infoItem">體重：</li>
                                <li class="infoItem">身高：</li>
                                <li class="infoItem">教育：</li>
                            </ul>
                        </div>
                    </div>
                    <div  class="right">
                        <div class="title">
                            <p style="color:orange;font-size:16px;font-weight:bold">zdd</p>
                            <p>2019-11-3</p>
                        </div>
                        <div class="pic">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658" alt="">
                        </div>
                        <p class="btn"><i class="iconfont icon-shanchu"></i><span>刪除</span></p>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
name: 'personalDetail',
data(){
return {
    infoList:[
        {
            Introduce:'111'
        }
    ]
}
}
,
methods:{
    addActive(ref,ac){
        ref.classList.add(ac)
    },
    removeActive(ref,ac){
        ref.classList.remove(ac)
    },
    jumpPage( ref ){
        if( ref === 'photo' ){
             this.addActive( this.$refs.photo,'active' )
            //  this.addActive( this.$refs.right )
             this.removeActive(  this.$refs.main,'active' )
             this.removeActive(  this.$refs.left,'conactive' )
        }
       if( ref === 'main' ){
           this.addActive( this.$refs.main,'active' )
           this.addActive( this.$refs.left,'conactive' )
            this.removeActive( this.$refs.photo,'active' )
            // this.removeActive( this.$refs.right )
       }
        
    }
},
components: {
}
}
</script>

<style lang='less' scoped>
 .el-header {
        background-color: #ff8c01;
        height: 55px;
        overflow: hidden;
        }
 .mainContent{
     width: 1000px;
     margin: 0 auto;
     border: 1px solid;
     background-color: #F2F2F1;
     .top{
        position: relative;
         height: 314px;
         background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1435134136,2595984248&fm=26&gp=0.jpg)center/cover;
        .avatar{
            position: absolute;
            bottom: -40px;
            left: 10px;
            width:192px;
            height: 220px;
            padding: 5px;
            background-color: #fff;
            text-align: center;
            img{
                width:180px;
                height: 180px;
            }
            p{
                color: #ff8c01;
                text-align: left;
                padding-left:10px;
                font-weight: bold;
                font-size: 16px; 
            }
        }
     }
     .tab{
         position: relative;
         margin-left: 22%;
         height: 100vh;
         .title{
             height: 40px;
             .main,.photo{
                 float: left;
                 text-align: center;
                line-height: 42px;
                width: 100px;
                cursor: pointer;
                
             }
             .active{
                 color: orange;
                 background-color: #fff;
                 text-align: center;
             }
         }
         .detail{
             background-color: #F2F2F1;
             display: none;
             position: absolute;
             left: -220px;
             width: 1000px;
             padding-top: 15px;
            
             .left{
                 width: 344px;
                 .title{
                     font-size: 12px;
                     font-weight: bold;
                     background-color: #F2F2F1;
                     padding-left: 10px;
                     line-height: 35px;
                 }
                 .pic {
                     padding: 10px;
                     background-color: #fff;
                     img{
                         width: 76px;
                         height: 70px;
                     }
                 }
                 .info{
                     .infoList{
                         background-color: #fff;
                         .infoItem{
                             font-size: 12px;
                             padding: 10px 5px;
                             border: 1px solid #eee;
                         }
                     }
                 }
             }
            }
            .right{
                background-color: #fff;
                text-align: center;
                .title{
                    display: flex;
                    justify-content: space-between;
                    width: 600px;
                }
                .btn{
                    background-color: #F2F2F1;
                    height: 35px;
                    border: 1px solid #eee;
                    line-height: 35px;
                    padding: 5px 10px;
                    color: #aaa;
                    margin-top: 10px;
                    span,i{
                        float: right;
                        cursor: pointer;
                    }
                }
            }
            .conactive{
                display: block;
                display: flex;
                justify-content: space-between;
            }
     }
 }
</style>
