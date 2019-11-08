<template>
  <div class="login">
   <el-container>
    <HeadNav />
    <el-main>
      <Register />
      <Banner />
      <div class="encounter">
        <div class="encounterTitle">
          <p>神奇邂逅助手</p>
          <p>智慧匹配有緣人一鍵邂逅超便捷</p>
        </div>
        <div class="pic"></div>
      </div>
      <div class="info">
        <div class="infoTitle">
          <p>終於等到你緣來在這裡</p>
          <p>在這裡，我遇見了你，你遇見了我</p>
          <div class="cardList">
              <el-card 
                class="box-card" 
                v-for="(item,index) in contentList"
                :key="index"
                >
                <div  class="text item">
                  {{item.content}}
                </div>
              </el-card>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <p>Copyright © 2019 UAB Glocash Payment(T.Narbuto str. 5,Vilnius LT 08105,Lithuania) All Rights Reserved </p>
      <ul>
        <li 
          v-for="( item,index ) in  phoneList"
          :key="index">{{item.text}} </li>
      </ul>
      </el-footer>
  </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from './Register'
import Banner from './Banner'
export default {
  name: "login",
  data(){
    return {
     contentList:[
       {
         content:'在这里，我找到了一群真诚的朋友，提高了自己的外语水平。你也可以像我一样，遇到更多精彩的人哦'
       },
       {
         content:'最开始他只是说了一句你好，而现在他已经成了我的全世界。在这里，一切都将成为可能，包括你的爱情'
       },
       {
         content:'幸福永遠不會拜訪心門緊閉的人，給自己一個機會，找到你命中註定的那個TA'
       },
     ],
     phoneList:[
       {
         text:'關於我們'
       },
       {
         text:'使用條款'
       },
       {
         text:'隱私政策'
       },
       {
         text:'交友安全'
       },
       {
         text:'幫助中心'
       },
       {
         text:'聯繫我們'
       },
       {
         text:'退款声明'
       },
     ]
    }
  },
  methods:{
  },
  components: {
    Register,
    Banner
  }
};
</script>
<style lang="less" scoped>
.el-container{
  flex-wrap: wrap;
  .el-main{
    padding: 0;
   .encounter{
     width: 1000px;
     margin: 0 auto;
     .encounterTitle{
        p{
        text-align: center;
        font-size: 16px;
      }
        p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
      }
        p:nth-child(2){
         margin-top: 16px;
       }
      }
       .pic{
         margin-top: 30px;
         background: url('http://www.justloveday.com/images/backimg3.jpg')no-repeat #fff;
         height: 300px;
       }
     }
  }
  .info{
    width: 1000px;
    margin:60px auto;
    .infoTitle{
       p{
        text-align: center;
        font-size: 16px;
      }
        p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
      }
        p:nth-child(2){
         margin-top: 16px;
       }
    }
    .cardList{
      margin: 0 auto;
      margin-top: 16%;
      display: flex;
      justify-content: space-around;
      .el-card{
        width: 260px !important;
        height: 220px! important;
        color: white;
        font-size: 13px;
        .text{
          margin-top: 35%;
        }
      }
      .el-card:nth-child(1){
        background: #F3775F
      }
      .el-card:nth-child(2){
        background: #95CE33
      }
      .el-card:nth-child(3){
        background:#53ACFF
      }
    }
  }
  .el-footer{
    background:#444546;
    color: #808181;
    display: flex;
    justify-content: space-center;
    line-height: 20px;
    text-align: center;
    padding: 30px 0 30px 20px;;
    font-size: 13px;
    p{
       vertical-align:middle;
    }
    ul{
      display: flex;
      justify-content: space-between;
      margin-top: 3px;
      margin-left: 20px;
      li{
        border-right: 1px solid #808181;
        padding:0 5px;
        height: 15px;
        line-height: 15px;
        vertical-align:middle;
      }
      li:nth-child(7){
        border: none;
      }

    }
    }
}
</style>
