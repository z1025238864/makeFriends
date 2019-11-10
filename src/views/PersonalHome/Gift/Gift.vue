<template>
  <div class="gift">
      <p class="title">
          <span>虛擬禮物</span>
      </p>
      <div class="content">
          <div class="btn">
              <p class="send">送給:</p>
              <el-input 
                v-model="input" 
                placeholder="请输入内容"
                size='small'></el-input>
               <el-button >search</el-button>
          </div>
          <div class="mainContent">
              <div class="picItem" v-for="item in 5">
                  <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3792839023,3376902974&fm=26&gp=0.jpg" alt="">
                  <p class="price">33</p>
              </div>
          </div>
          <div class="msg">
              <p class="send">贈言</p>
                <el-input 
                v-model="msg" 
                placeholder=""
                size='small'></el-input>
          </div>
          <div class="sendBtn">
              <el-button style="background:orange;color:white">發送</el-button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "gift",
  data() {
    return {
        input:'',
        msg:''
    };
  },
  components: {}
};
</script>

<style lang='less' scoped>
    .gift{
        background-color: #fff;
        padding: 5px 1px;
        .title {
            background-color: #f0f0f0;
            padding: 5px;
            span{
                display: inline-block;
                padding: 3px 10px;
                background-color: orange;
                color: white;
                font-size: 14px;
                border-radius: 10px;
                border-right: 1px solid #aaa;       
            }
            
        }
        .content{
           .btn{
               display: flex;
               justify-content: center;
               padding: 10px 5px;
               .el-input{
                   width: 350px;
                  margin-top: 5px;
               }
               .send{
                   width: 126px;
                   text-align: center;
                   background-color: #76CD76;
                   color: white;
                   line-height: 40px;
                   font-size: 16px;
                   font-weight: bold;
               }
               .el-button{
                   margin-left: 10px;}
           }
           .mainContent{
               margin-left: 15px;
               border: 1px solid #eee;
               padding: 10px 15px;
               display: flex;
               justify-content: flex-start;
               flex-wrap: wrap;
               .picItem{
                   width: 150px;
                   img{
                       width: 145px;
                       height: 145px;
                   }
                   .price{
                       text-align: center;
                   }
               }
               }
        }
        .msg{
              margin-left: 25px;
              display: flex;
               justify-content: center;
               padding: 10px 5px;
                .send{
                   width: 126px;
                   text-align: center;
                   background-color: orange;
                   color: white;
                   line-height: 40px;
                   font-size: 16px;
                   font-weight: bold;
               }
               .el-input{
                   margin-left: 10px;}
        }
        .sendBtn{
            display: flex;
            justify-content: flex-end;
            .el-button{
                margin-right: 15px;
            }
            }
    }
</style>
