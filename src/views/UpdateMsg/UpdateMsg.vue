<template>
  <div class="updateMsg">
       <el-header>
        <PersonalNav />
    </el-header>
    <div class="title">
        <p 
            @click="jump('info')"
            class="info active"
            ref="info"
            >資料設定</p>
        <p 
            @click="jump('avatar')"
            class="avatar "
            ref="avatar"
            >頭像設定</p>
        <p 
            @click="jump('pwd')"
            class="pwd"
            ref="pwd"
            >修改密碼</p>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
 
</template>
<script>
export default {
  name: "updateMsg",
  data() {
    return {
    };
  },
  methods:{
      jump( rou ){
          if( rou === 'info' ){
              this.$refs[rou].classList.add( 'active' )
              this.$refs['avatar'].classList.remove( 'active' )
              this.$refs['pwd'].classList.remove( 'active' )
          }else if( rou === 'avatar' ){
              this.$refs[rou].classList.add( 'active' )
              this.$refs['info'].classList.remove( 'active' )
              this.$refs['pwd'].classList.remove( 'active' )
          }else if( rou === 'pwd' ){
              this.$refs[rou].classList.add( 'active' )
              this.$refs['avatar'].classList.remove( 'active' )
              this.$refs['info'].classList.remove( 'active' )
          }
         const name = rou
          this.$router.push({
              name
          })
      }
  },
  components: {}
};
</script>

<style  lang='less' scoped>
    .el-header {
        background-color: #ff8c01;
        height: 55px;
        overflow: hidden;
        }
        .title{
            display: flex;
            width: 1000px;
            margin: 0 auto;
            justify-content: space-around;
            background-color: #fff;
            p{
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
            p.active{
                color: orange
            }
        }
        .content{
             width: 1000px;
            margin: 0 auto;
        }
</style>
