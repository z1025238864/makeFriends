<template>
  <div class="chat">
      <el-header>
        <PersonalNav />
    </el-header>
    <div class="main">
      <div class="content">
        <p class="title">和小A聊天</p>
        <div class="area">
          <div class="left">
           
            <div class="pic">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573405301974&di=19a5ac0036be05429848349d6724dbfd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F19%2F20161119174623_H2Rhm.jpeg" alt="">
            </div>
             <p class="text">
              吃過了
            </p>
          </div>
          <div class="right">
            <p class="text">吃過晚飯了嗎</p>
            <div class="pic">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573404311388&di=62703ccdae399f3665cfd6c3854b8c0f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F537ba184ea074e1eddc38df829e0a96dca3bded496a4-WRLW2A_fw658" alt="">
            </div>
          </div>
        </div>
        <div class="send">
            <Editor />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from "./Editor";
export default {
  name: "chat",
  data() {
    return {};
  },
  components: {
    Editor
  }
};
</script>

<style lang='less' scoped>
 .el-header {
        background-color: #ff8c01;
        height: 55px;
        overflow: hidden;
        }
  .main{
      width: 1000px;
      margin: 0 auto;
      border: 1px solid red;
      .content{
        background-color: #fff;
        text-align: center;
        padding: 10px 15px;
        .title{
          padding: 10px;
          text-align: center;
          font-size: 16px;
        }
        .area{
          width: 800px;
          height: 400px;
          overflow: scroll-y;
          border: 1px solid black;
          border-bottom:none; 
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .right{
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            .text{
              position: relative;
              vertical-align: middle;
              background-color: #76CD76;
              margin: 10px 15px;
              border-radius: 5px;
               padding: 10px;
            }
            .text::after{
              position: absolute;
              right: -15px;
              top: 4px;
              content: '';
              display: inline-block;
              border: 5px solid transparent;
              border-left: 10px solid #76CD76;
            }
            .pic{
              img{
                width: 50px;
                height: 50px;
                border-radius:50%;
              }
            }
          }
          .left{
            display: flex;
            justify-content: flex-start;
            padding: 10px;
            .text{
              position: relative;
              vertical-align: middle;
              background-color: #76CD76;
              margin: 10px 15px;
              border-radius: 5px;
               padding: 10px;
            }
            .text::after{
              position: absolute;
              left: -15px;
              top: 4px;
              content: '';
              display: inline-block;
              border: 5px solid transparent;
              border-right: 10px solid #76CD76;
            }
            .pic{
              img{
                width: 50px;
                height: 50px;
                border-radius:50%;
              }
            }
          }
        }
        .send{
          width: 800px;
          border: 1px solid black;
          margin: 0 auto;
        }
      }
  }
</style>
