<template>
  <div class="headNav">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#FF8C01"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">Logo</el-menu-item>
      <el-menu-item index="/personalHome">
        <i class="el-icon-s-home" style="color:white"></i>
        <span slot="title">首頁</span>
      </el-menu-item>
      <el-menu-item index="/personalDetail">
        <i class="el-icon-user-solid" style="color:white"></i>
        <span slot="title">主頁</span>
      </el-menu-item>
      <el-menu-item index="/chat">
        <i class="el-icon-s-comment" style="color:white"></i>
        <span slot="title">聊天</span>
      </el-menu-item>
    </el-menu>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#FF8C01"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
    >
      <el-menu-item @click="payMoney( 'pay')">儲值</el-menu-item>
      <el-menu-item @click="payMoney('grade')">升級</el-menu-item>
      <el-menu-item>
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="search"></el-input>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">設置</template>
        <el-menu-item>聯繫我們</el-menu-item>
        <el-menu-item @click="jumpPic">頭像設定</el-menu-item>
        <el-menu-item @click="jumpMsg">資料設定</el-menu-item>
        <el-menu-item @click="jumpPwd">修改密碼</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-dialog :visible.sync="dialogFormVisible">
      <div class="title">
        <p class="grade" ref="grade" @click="activeChange( 'grade' )">升級</p>
        <p class="pay active" ref="pay" @click="activeChange( 'pay' )">賬戶充值</p>
      </div>
      <div class="main" ref="balance">
        <p class="balance">
          您的賬戶餘額
          <span class="money">0</span>
        </p>
        <div class="choose">
          <p class="title">選擇充值金額：</p>
        </div>
        <div class="option">
          <el-radio-group v-model="radio1" text-color="#F7C709" fill="#F7C709" @change="checkMoney">
            <el-radio
              v-for="(item, index ) in moneyList"
              :key="index"
              :label="item"
              border
              style="width:200px;height:70px;line-height:50px;margin:10px 10px;"
            ></el-radio>
          </el-radio-group>
          <el-input  v-model="customMon" placeholder="請輸入金額" :disabled="checkMoneyed"></el-input>
        </div>
       
      </div>
      <div class="gradeF" ref="gradeF">
        <div class="title">
          <el-radio-group v-model="who">
            <el-radio :label="1">為自己升級</el-radio>
            <el-radio :label="2">為朋友升級:</el-radio>
          </el-radio-group>
          <p class="search">
            <el-input v-model="friendId" placeholder="用戶名" clearable size="small"></el-input>
            <el-button type="primary" size="small" style="margin-left:10px;">搜索</el-button>
          </p>
        </div>
        <div class="des">
          <div class="leftContent content">
            <div class="desTitle">
              <p class="vip">
                <i class="iconfont icon-zuanshi"></i>藍鑽會員
              </p>
            </div>
            <div class="infoList">
              <p>
                <i class="iconfont icon-duihao"></i>盡情聊天
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>查看誰喜歡你
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>認識更多單身异性
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>讓你倍受矚目
              </p>
            </div>
            <div class="chooseList">
              <el-radio-group v-model="radio">
                <div class="listItem" v-for="( item,index ) in goodsList" :key="index">
                  <el-radio :label="item.val" border >
                    <span>{{item.oldVal}}</span>
                    <span>{{item.newVal}}</span>
                    <span>{{item.save}}</span>
                  </el-radio>
                </div>
              </el-radio-group>
            </div>
          </div>
          <div class="rightContent content">
            <div class="desTitle">
              <p class="vip">
                <i class="iconfont icon-huangguan1" style="color:yellow"></i>皇冠會員
              </p>
            </div>
            <div class="infoList">
              <p>
                <i class="iconfont icon-duihao"></i>查看私密照片
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>盡情聊天
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>查看誰喜歡你
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>認識更多單身异性
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>讓你倍受矚目
              </p>
              <p>
                <i class="iconfont icon-duihao"></i>更多展示機會
              </p>
            </div>
            <div class="chooseList">
              <el-radio-group v-model="radio" >
                <div class="listItem" v-for="( item,index ) in wingList" :key="index">
                  <el-radio :label="item.val" border @change="checkMoney">
                    <span>{{item.oldVal}}</span>
                    <span>{{item.newVal}}</span>
                    <span>{{item.save}}</span>
                  </el-radio>
                </div>
              </el-radio-group>
            </div>
          </div>
        </div>
        
      </div>
       <div slot="footer" class="dialog-footer">
           <el-radio 
            v-model="jinbi" 
            label="1">
              <i class="iconfont icon-jinbi" style="color:orange;cursor:pointer"></i>
            </el-radio>
          <div id="paypal-button-container"></div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import { payMoney } from "../api/payMoney";
import {getUnReadMessage} from '../api/chat';
export default {
  name: "headNav",
  created() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      "https://www.paypal.com/sdk/js?client-id=AVRBAey09wozHSMiPC3Uzj7ggez3SfDWhp3Na9YCc99NKHZ2PjCrUo00LWiBwL1m1MGlNgcqaP6IYiO-";
    document.body.appendChild(s);
  },
  mounted() {},
  data() {
    return {
      checkMoneyed:true,
      userId: this.$store.state.userId,
      search: "",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "220px",
      customMon: "",
      radio1: "100",
      moneyList: ["100", "200", "500", "50", "20","自定义"],
      who: 1,
      friendId: "",
      radio: 1,
      goodsList: [
        {
          val: 1,
          oldVal: "749USD/12月",
          newVal: "62.4USD/月",
          save: "節省37.5%"
        },
        {
          val: 2,
          oldVal: "449USD/6月",
          newVal: "74.8USD/月",
          save: "節省25%"
        },
        {
          val: 3,
          oldVal: "249USD/3月",
          newVal: "83USD/月",
          save: "節省16.7%"
        },
        {
          val: 4,
          oldVal: "99USD/月",
          newVal: "",
          save: ""
        }
      ],
      wingList: [
        {
          val: 5,
          oldVal: "1299USD/12月",
          newVal: "108.25USD/月",
          save: "節省36.9%"
        },
        {
          val: 6,
          oldVal: "899USD/6月",
          newVal: "149.83USD/月",
          save: "節省24.4%"
        },
        {
          val: 7,
          oldVal: "499USD/3月",
          newVal: "166.3USD/月",
          save: "節省16.2%"
        },
        {
          val: 8,
          oldVal: "199USD/1月   ",
          newVal: "",
          save: ""
        }
      ],
      jinbi: "1"
    };
  },
  methods: {
    checkMoney(){
      if (this.radio1=="自定义"){
        this.checkMoneyed=false
      }else {
        this.checkMoneyed=true
      }
    },
    pay() {},
    chat() {
      alert(1);
    },
    jumpPic() {
      this.$router.push({
        path: "/updateMsg/avatar"
      });
    },
    jumpMsg() {
      this.$router.push({
        path: "/updateMsg/info"
      });
    },
    jumpPwd() {
      this.$router.push({
        path: "/updateMsg/pwd"
      });
    },
    payMoney(ref) {
      let that=this
      this.dialogFormVisible = true;
      const userId = this.userId;
      setTimeout(function() {
        paypal
          .Buttons({
            createOrder: function(data, actions) {
              console.log("create");
              // This function sets up the details of the transaction, including the amount and line item details.
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: that.radio1!="自定义"?that.radio1:that.customMon
                    }
                  }
                ]
              });
            },
            onApprove: function(data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function(details) {
                // This function shows a transaction success message to your buyer.
                console.log(details);
                //这里是成功了的回调，在此处调用我们自己后台接口，暂定为getOrderStatus
                const orderId = data.orderID;
                payMoney({ orderId, userId }).then(res =>{
                  console.log(res)
                  if( res.code==200 ){
                    alert('交易成功')
                  }else{
                    alert("请联系管理员")
                  }
                });
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              });
            }
          })
          .render("#paypal-button-container");
      }, 300);
      setTimeout(() => {
        if (ref === "pay") {
          this.$refs["pay"] && this.$refs["pay"].classList.add("active");
          this.$refs["grade"] && this.$refs["grade"].classList.remove("active");
          this.$refs["gradeF"] && (this.$refs["gradeF"].style.display = "none");
          this.$refs["balance"] &&
            (this.$refs["balance"].style.display = "block");
        }
      }, 1500);

      if (ref === "grade") {
        this.$refs["grade"] && this.$refs["grade"].classList.add("active");
        this.$refs["pay"] && this.$refs["pay"].classList.remove("active");
        this.$refs["balance"] && (this.$refs["balance"].style.display = "none");
        this.$refs["gradeF"] && (this.$refs["gradeF"].style.display = "block");
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    activeChange(ref) {
      if (ref === "grade") {
        this.$refs["grade"].classList.add("active");
        this.$refs["pay"].classList.remove("active");
        this.$refs["balance"].style.display = "none";
        this.$refs["gradeF"].style.display = "block";
      } else {
        this.$refs["pay"].classList.add("active");
        this.$refs["grade"].classList.remove("active");
        this.$refs["balance"].style.display = "block";
        this.$refs["gradeF"].style.display = "none";
      }
    }
  },
  mounted(){
    let that=this;
    let Params={
      recieveId:that.$store.state.userId
    }
    getUnReadMessage(Params).then(res =>{
      console.log(res)
      for (var i=0;i<res.data.length;i++){
        if (res.data[i].sender_id=="all"){
          that.$store.state.messagenumber=res.data[i].unRead;
        } else {
          var usermessage=localStorage.getItem(that.$store.state.userId);
          if (usermessage!=null){
            var a=JSON.parse(usermessage);
            var key=res.data[i].sender_id
            var value=res.data[i].unRead
            a[key]=value;
            localStorage.setItem(that.$store.state.userId,JSON.stringify(a));
          } else {
            var a={}
            var key=res.data[i].sender_id
            var value=res.data[i].unRead
            a[key]=value;
            localStorage.setItem(that.$store.state.userId,JSON.stringify(a));
          }
        }
      }
      console.log(that.$store.state.userId)
      console.log(localStorage.getItem(that.$store.state.userId))
      console.log(that.$store.state.messagenumber)
      console.log(that.$store.message)
      console.log(res)
    }).catch(erro =>{

    })
    var socket;
    if(!window.WebSocket){
      window.WebSocket = window.MozWebSocket;
    }
    if(window.WebSocket){
      socket = new WebSocket("ws://127.0.0.1:8400/ws?userId="+that.$store.state.userId);
      socket.onmessage = function(event){
        var usermessage=localStorage.getItem(that.$store.state.userId);
        if (usermessage!=null){
          var a=JSON.parse(usermessage);
          var key=res.data[i].sender_id
          var value=res.data[i].unRead
          a[key]=value;
          localStorage.setItem(that.$store.state.userId,JSON.stringify(a));
        } else {
          var a={}
          var key=res.data[i].sender_id
          var value=res.data[i].unRead
          a[key]=value;
          localStorage.setItem(that.$store.state.userId,JSON.stringify(a));
        }
        // var ta = document.getElementById('responseText');
        // eslint-disable-next-line no-console
        that.$store.state.messagenumber=that.$store.state.messagenumber+1
        console.log(event,event.data)
        // ta.value += event.data+"\r\n";
      };
      socket.onopen = function(event){
        var ta = document.getElementById('responseText');
        console.log(event,"active")
        console.log("Netty-WebSocket服务器。。。。。。连接  \r\n")
        // ta.value = "Netty-WebSocket服务器。。。。。。连接  \r\n";
      };
      socket.onclose = function(event){
        // var ta = document.getElementById('responseText');
        console.log("Netty-WebSocket服务器。。。。。。关闭 \r\n")
        // ta.value = "Netty-WebSocket服务器。。。。。。关闭 \r\n";
      };
    }else{
      alert("您的浏览器不支持WebSocket协议！");
    }
    this.$store.websocket=socket;
  },
  components: {}
};
</script>

<style lang='less' scoped>
.headNav {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .el-dialog__wrapper {
    z-index: 99999999 !important;
    .title {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid #ccc;
      background: #f0f0f0;
      padding: 10px 0;
      p {
        width: 80px;
        text-align: center;
        padding: 5px;
        border-radius: 20px;
        cursor: pointer;
      }
      .active {
        background-color: orange;
        color: white;
      }
    }
    .main {
      .balance {
        line-height: 25px;
        font-weight: bold;
        padding: 20px 40px;
        border-bottom: 1px solid #ddd;
        display: block;
        .money {
          color: orange;
          margin-left: 15px;
        }
      }
      .choose {
        .title {
          padding: 20px 40px;
          background-color: #fff;
          border: none;
        }
        .option {
          .custom {
            width: 200px;
            height: 70px;
          }
        }
      }
    }
    .gradeF {
      display: block;
      .title {
        display: flex;
        padding: 10px;
        background-color: #fff;
        border: none;
        .el-radio-group {
          margin-top: 12px;
        }
        .search {
          display: flex;
          width: 220px;
        }
      }
      .des {
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        .content {
          border: 1px solid #eee;
        }
        .desTitle {
          display: flex;
          justify-content: flex-start;
          padding: 10px;
          .vip {
            font-weight: bold;
            margin-left: 10px;
            .iconfont {
              color: #37a2ed;
              font-size: 30px;
            }
          }
        }
        .infoList {
          margin-top: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 280px;
          p {
            margin: 10px 5px;
            font-size: 12px;
            .iconfont {
              color: #37a2ed;
            }
          }
        }
        .chooseList {
          margin-top: 15px;
          .listItem {
            display: flex;
            font-size: 13px;
            padding: 10px 10px;
            .el-radio {
              span {
                margin: 0 5px;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      .payBtn {
        display: flex;
        justify-content: space-around;
        line-height: 60px;
        margin-left: 15px;
        .el-radio {
          display: flex;
          justify-content: center;
          .el-radio__input {
            margin-top: 15px !important;
          }
        }
      }
    }
  }
}
</style>
