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
                size='mini'>
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
                v-model="userPwd"
                clearable
                size='mini'>
              </el-input>
            </li>
            <li>
              新密碼
              <el-input
                class="iptbox"
                v-model="newpassword"
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
                  placeholder="选择出生日期">
                </el-date-picker>
              </div>
             
            </li>
            <li>
              性別
               <el-radio-group v-model="sex" style="margin-right:115px">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
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
    newpassword:'',
    sex:1,
}
}
,
methods:{
  registerFn(){
    register({

    })
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
