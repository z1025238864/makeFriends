<template>
<div class="pwd">
    <div class="mainContent">
        <div class="item">
            原始密碼:<el-input v-model="oldPwd" placeholder="请输入内容"></el-input><br>
        </div>
        <div class="item">
             新密碼：<el-input v-model="newPwd" placeholder="请输入内容"></el-input><br>
        </div>
       <div class="item">
           重複密碼:<el-input v-model="copPwd" placeholder="请输入内容"></el-input><br>
       </div>
        
    </div>
    <div class="btn">
          <el-button type="success">提交</el-button>
    </div>
</div>
</template>
<script>
export default {
name: 'pwd',
data(){
return {
    oldPwd:'',
    newPwd:'',
    copPwd:''
}
}
,
components: {
}
}
</script>

<style lang='less' scoped>
    .pwd{
         text-align: center;
        .mainContent{
            margin-top: 15px;
            text-align: center;
            .item{
                 margin-top: 15px;
                .el-input{
                    width: 200px;
                    margin-left: 10px;
                }
            }
        }
        .btn{
            margin-top: 10px;
        }
    }   

</style>
