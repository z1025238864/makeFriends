<template>
  <div class="chat">
      <el-header>
        <PersonalNav />
    </el-header>
    <div class="main">
      <div class="page2">
        <button @click="togglepage2">点击切换</button>
      </div>
      <div class="friendList">
          <div class="main">
            <ul class="list">
              <li class="item">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573492102792&di=d449a964f95379451afbaec0380d4b5b&imgtype=0&src=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F40500000%2Fnewclubimage-despicable-me-minions-40532353-5038-4325.jpg" alt="">
                <p class="name"> 小黄人 </p>
                <span class="status"></span>
                <span class="delete" @click="remove">删除</span>
              </li>
            </ul>
          </div>
      </div>
      <div class="content">
        <p class="title">和小A聊天</p>
        <div class="area" id="area">
          <div v-for="(item,i) in messageList" :class="item.receiverId==$store.state.userId?'left':'right'" v-html="item.message">

          </div>
<!--          <div class="left">-->
<!--            <div class="pic">-->
<!--              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573405301974&di=19a5ac0036be05429848349d6724dbfd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F19%2F20161119174623_H2Rhm.jpeg" alt="">-->
<!--            </div>-->
<!--             <p class="text">-->
<!--              吃過了-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="right">-->
<!--            <p class="text">吃過晚飯了嗎</p>-->
<!--            <div class="pic">-->
<!--              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573404311388&di=62703ccdae399f3665cfd6c3854b8c0f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F537ba184ea074e1eddc38df829e0a96dca3bded496a4-WRLW2A_fw658" alt="">-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <div class="send">
            <Editor/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getmessage, readMessgae, getUserList,  deleteFriend } from '../../api/chat';
import Editor from "./Editor";
export default {
  name: "chat",
  data() {
    return {
      isRun:false,
      messageList:[],
      friendList:[],
      // messagenumber:this.$store.messagenumber
    };
  },
  components: {
    Editor
  },
  methods:{
    togglepage2:function(){
      this.$store.commit('test',1);
    },
    getmessage(curVal,oldVal){
      while (this.isRun){
        sleep(100)
      }
      this.isRun=true;
      var a=this.$store.state.messagenumber;
      if (a>0){
      }
      let params={
        //这里获取当前登录用户id，我这里没写好,出现undefined你检查下
        // recieveId:this.$store.state.userId!=null?this.$store.state.userId!=undefined?this.$store.state.userId:0:5,
        recieveId:this.$store.state.userId,
        // senderId:this.chatTo!=null?this.chatTo:''
        senderId:6
      }
      let that=this;
      if (params.senderId!=null&&params.senderId!=''&&params.recieveId!=null&&params.recieveId!=''){
        getmessage(params).then(res =>{
          // this.messageList.add(res.data)
          // this.messageList=res.data
          var dom = document.querySelector("#area");
          console.log(this.$store.state.userId)
          for (var i=0;i<res.data.length;i++){
            that.messageList.push(res.data[i])
            res.data[i].isRead=1;
            readMessgae(res.data[i]).then(res =>{
              console.log("readmessage"+res)
            })
            //   var div=document.createElement("div");
            //   if (res.data[i].recieveId==this.$store.state.userId){
            //     div.className="left"
            //   }
            //   div.innerHTML=res.data[i].message;
            //   dom.appendChild(div);
          }
          this.isRun=false
        }).catch(erro =>{
          this.isRun=false
        })
    }
  },
  remove( item,index ){
    console.log( 1 )
    //删除功能
    // friendList.splice(index,1 )
    // const id = item.id
     deleteFriend( { id} ).then(
       res=>{
         if( res.code ===200  ){
           alert('删除成功')
         }
       }
     )
  }

  },
  created(){
    getUserList({
      page:1,
      pageSize:10,
      userId:this.$store.state.userId
    }).then( res=>{
      console.log( res )
      if( res.code === 200 ){
        this.friendList = res.data
      }
    } )
  },
  mounted() {
    this.getmessage()
  },
  props:['chatTo'],
  computed: {
    listenshowpage1() {
      return this.$store.state.messagenumber;
    }
  },
    watch:{
      listenshowpage1:function (a,b) {
        this.getmessage()
      }
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
       background-color: #fff;
       display: flex;
       justify-content: space-between;
       
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
      .friendList{
        .main{
          margin-top: 50px;
          margin-left: 20px;
          width: 260px;
          height: 540px;
          border: 1px solid black;
          overflow: scroll-y;
          .list{
            width: 100%;
            padding: 5px;
            .item{
              display: flex;
              justify-content: center;
              padding: 10px;
              border-bottom: 1px solid #eee;
              img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              .name{
                height: 40px;
                line-height: 40px;
                margin-left: 15px;
              }
              .status{
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #76CD76;
                margin-top: 15px;
                margin-left: 10px;
              }
              .delete{
                 display: inline-block;
                 font-size: 13px;
                 height: 40px;
                 line-height: 40px;
                 margin-left: 35px;
                 cursor: pointer;
              }
            }
          }
        }
      }
  }
</style>
