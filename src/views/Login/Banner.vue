<template>
<div class="banner">
        <div class="bannerTitle">
          <p>JustLoveDay全球最專業的大型交友，戀愛平臺</p>
          <p>數百萬美女在這裡等著你</p>
          <div class="bannerBody">
              <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in bannerList" :key="item">
                  <img :src="item" alt="">
                </el-carousel-item>
              </el-carousel>

          </div>
        </div>
      </div>
</template>
<script>
export default {
name: 'banner',
data(){
return {
     bannerList:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572717866485&di=af9681e2696e5f4ae649bb0b6504c7b1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F11%2F20180411234954_nL2za.thumb.700_0.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572717866485&di=00bd0b761be50663ad6bf61955d76177&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F9813d77fac394f26e2c292b6d04ed622e99dbbd6.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572717866482&di=d32ac16df9176e434ba2a35bb10b892b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180919%2F5cc04a43e9b14460946caf1be6bf1d75.jpg',
      ]
}
}
,
components: {
}
}
</script>

<style lang='less' scoped>
     .banner{
      width: 1000px;
      margin: 0 auto;
      padding: 60px 0;
      p{
        text-align: center;
        font-size: 16px;
      }
      p:nth-child(1){
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
       p:nth-child(2){
         margin-top: 16px;
       }
       .bannerBody{
         margin-top: 30px;
         .el-carousel__item img {
              width: 100%;
              height: 100%;
            }
         .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
          }
  
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
          }
            }
    }

</style>
