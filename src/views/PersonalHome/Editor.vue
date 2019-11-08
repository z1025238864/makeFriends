<template>
<div class="editor">
    <div ref="editor"  style="text-align:left"></div>
    <div id="content"  class="text"></div>
    <el-button 
        type="warning"
        class="send"
        v-on:click="getContent"  
        round>發佈</el-button>
</div>
</template>
<script>
 import E from 'wangeditor'
export default {
      name: 'editor',
      data () {
        return {
          editorContent: '',
          info:''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        },
        setEditor(){

        }
      },
      mounted() {
        var editor = new E(this.$refs.editor,'#content')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.customConfig.pasteIgnoreImg = false
        // 隐藏“网络图片”tab
        editor.customConfig.showLinkImg = false
        editor.customConfig.uploadImgShowBase64 = true //圖片上傳
        editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024 // 将图片大小限制为 3M
        // 限制一次最多上传 5 张图片
        editor.customConfig.uploadImgMaxLength = 3
        editor.customConfig.customUploadImg = function (files, insert) {
            // files 是 input 中选中的文件列表
            // insert 是获取图片 url 后，插入到编辑器的方法
            console.log(files  )
            // 上传代码返回结果之后，将图片插入到编辑器中
            insert(imgUrl)
        }
        // 自定义菜单配置
            editor.customConfig.menus = [
                    'emoticon',  // 表情
                    'image',  // 插入图片
            ]
        editor.create()
      }
    }
</script>

<style lang='less' scoped>
    #editor{
        position: relative;
        height: 110px;
        .text {
            border: 1px solid #ccc;
            height: 50px;
            }
        .w-e-toolbar{
            position: absolute;
            bottom: 405px;;
        }
        .send{
            position: absolute;
            left: 80%;
            margin-top: 10px;
        }

    }
    #content{
      background-color: #fff;
    }
  
</style>
