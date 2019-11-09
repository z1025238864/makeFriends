<template>
<div class="avatar">
   <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
 <div class="btn">
          <el-button type="success">提交</el-button>
    </div>
</div>
</template>
<script>
export default {
name: 'avatar',
data(){
return {
      dialogImageUrl: '',
        dialogVisible: false
}
}
,
 methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
components: {
}
}
</script>

<style lang='less'scoped>
    .avatar{
        text-align: center;
        div{
            margin-top: 10px;
            }
    }

</style>
