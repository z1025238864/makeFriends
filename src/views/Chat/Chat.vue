<template>
  <div class="chat">
      <el-header>
        <PersonalNav />
    </el-header>
    <div class="main"></div>
  </div>
</template>
<script>
export default {
  name: "chat",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
 .el-header {
        background-color: #ff8c01;
        height: 55px;
        overflow: hidden;
        .main{
            width: 1000px;
            margin: 0 auto;
            border: 1px solid red;
        }
        }
</style>
