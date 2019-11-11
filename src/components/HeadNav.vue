<template>
<div class="headnav">
    <el-header class="header">
      <div class="main">
        <div class="logo">
          <p>logo</p>
        </div>
        <div class="ipt">
          <el-input
            class="iptbox"
            placeholder="郵箱/用戶名"
            v-model="userName"
            clearable
            size='mini'>
          </el-input>
          <el-input
            class="iptbox"
            placeholder="密碼"
            v-model="userPwd"
            :show-password='true'
            size='mini'
            clearable>
          </el-input>
          <el-button 
            type="danger"
            size='mini'
            @click="loginOn">登入</el-button>
        </div>
      </div>
    </el-header>
</div>
</template>
<script>
import {login} from '../api/login'
export default {
name: 'headnav',
 data(){
    return {
      userName:'',
      userPwd:'',
    }
  },
  methods:{
    loginOn(){
      login( {
      userName:this.userName,
      userPwd:this.userPwd
      } ).then( res=>{
        if( res.code > 0 ){
          const token = res.data.token
          const id = res.data.id
          this.$store.commit('setToken',token);
          this.$store.commit('saveUserId',id);
          this.$router.push({
            path:'/personalHome/newdynamic',
            query:{
              id
            }
          })
        }
      } ).catch(err=>console.log(err))
    }
    
  },
components: {
}
}
</script>

<style lang='less' scoped>
  @marin-left:15px;
  .headnav{
    width: 100%;
  }
.header{
  background-color: #FF8C01;
  height: 55px;
  overflow: hidden;
  .main{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 55px;
    line-height: 55px;
    .logo{
      line-height: 55px;
      height: 55px;
      overflow: hidden;
    }
    .ipt{
      display: flex;
      justify-content: space-around;
      .iptbox {
        margin-left: @marin-left;
      }
      .el-button{
        height: 35px;
        margin-top: 10px;
        margin-left: @marin-left;
      }

    }
      
    
   
  }
}

</style>
