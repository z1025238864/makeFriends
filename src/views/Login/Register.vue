<template>
 <div class="contentTop">
        <div class="userinfo">
          <p class="title">歡迎加入</p>
          <ul class="infobox">
            <li>
              郵箱 
              <el-input
                class="iptbox"
                v-model="email"
                clearable
                size='mini'
                @blur="checkEmail">
              </el-input>
            </li>
            <li>
              用戶名 
              <el-input
                class="iptbox"
                v-model="userName"
                clearable
                size='mini'>
              </el-input>
            </li>
            <li>
              密碼 
              <el-input
                class="iptbox"
                type="password"
                placeholder="密码最少六位"
                v-model="userPwd"
                @blur='checkPwd'
                clearable
                size='mini'>
              </el-input>
            </li>
            <li>
              重复密碼
              <el-input
                class="iptbox"
                type="password"
                placeholder="密码最少六位"
                v-model="repPassword"
                clearable
                size='mini'>
              </el-input>
            </li>
            <li>
              生日
              <div class="date">
                <el-date-picker
                  type="dates"
                  v-model="birthday"
                  placeholder="选择出生日期"
                  value-format="yyyy-MM-dd"
                  @change="chooseDate"
                  >
                </el-date-picker>
              </div>
             
            </li>
            <li>
              性別
               <el-radio-group 
                v-model="sex" 
                style="margin-right:115px"
                >
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
            </el-radio-group>
            </li>
          </ul>
          <div class="register">
            <el-button 
              type="success" 
              round 
              size='medium'
              @click="registerFn">註冊</el-button>
          </div>
        </div>
      </div>
</template>
<script>
import { register } from '../../api/register'
export default {
name: '',
data(){
return {
    email:'',
    userName:'',
    userPwd:'',
    repPassword:'',
    sex:1,
    birthday:''
}
}
,
methods:{
  checkEmail(){
    const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if( !reg.test( this.email ) ){
      alert('请输入正确格式的邮箱')
    }
  },
  chooseDate(){
    this.birthday = this.birthday[0] 
  },
  checkPwd(){
    if( this.userPwd.length < 6 ){
      alert( "密码最少六位" )
    }
  },
  registerFn(){
    if( this.userPwd === this.repPassword && this.userPwd.length>= 6){
      this.Axios({
        method: 'post',
        url: "http://203.195.140.253/user/register",
        data:{
          email:this.email,
          userName:this.userName,
          userPwd:this.userPwd,
          sex:this.sex,
          birthday:this.birthday
          },
          headers: {
        'Content-Type': 'application/json'
  }
      }).then( res=>console.log( res ) )
    }else{
      alert('两次密码不一致,或者长度不够')
    }
   
  }
},
components: {
}
}
</script>

<style lang='less' scoped>
     .contentTop{
      height: 805px;
      border: 1px solid black;
      background: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3977080363,1823912887&fm=26&gp=0.jpg')center/cover;
      .userinfo{
        width: 340px;
        float: right;
        margin-right: 18%;
        margin-top: 6%;
        text-align: center;
        .title{
          text-align: center;
          font-size: 18px;
          margin-bottom: 30px;
        }
        .infobox{
          li{
            display: flex;
            justify-content: space-between;
            .el-input--mini {
              width: 220px!important;
              margin-bottom:30px;
            }
            .date{
              margin-bottom: 15px;
            }
          }
        }
        .register{
          margin-top: 35px;
          .el-button{
            width: 300px;
            font-weight:bold;

          }
        }
      }
    }
  
 

</style>
