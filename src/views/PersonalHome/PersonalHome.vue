<template>
  <div class="personalHome">
    <el-header>
      <PersonalNav />
    </el-header>
    <ul class="customerService">
      <li class="listItem">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658"
          alt
        />
      </li>
      <li v-for=" (item,index) in picList" :key="index">
        <img :src="item" alt />
      </li>
    </ul>
    <div class="mainContent">
      <div class="leftContent">
        <ul class="msgList">
          <li class="avatar">
            <div class="pic" @click="jump">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658"
                alt
              />
            </div>
            <div class="info">
              <p class="name" @click="active">{{userName}}</p>
              <p class="balance">
                <span>0</span>
                <img src="../..//assets/icon/jinbi.png" alt />
              </p>
            </div>
          </li>
          <li class="infoList">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              text-color="#161415"
              :router="true"
              active-text-color="black"
            >
              <el-menu-item index="/personalHome/newdynamic">
                <i class="iconfont icon-lianggeren"></i>
                <span slot="title">最新動態</span>
              </el-menu-item>
              <el-menu-item index="/personalHome/meet">
                <i class="iconfont icon-like"></i>
                <span slot="title">邂逅</span>
              </el-menu-item>
              <el-menu-item index="/personalHome/friend">
                <i class="iconfont icon-xingxing"></i>
                <span slot="title">好友</span>
              </el-menu-item>
              <el-menu-item index="/personalHome/visiter">
                <i class="iconfont icon-yanjing"></i>
                <span slot="title">來訪</span>
              </el-menu-item>
            </el-menu>
          </li>
          <li class="shopList">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              text-color="#161415"
              :router="true"
              active-text-color="black"
            >
              <el-menu-item index="/personalHome/gift">
                <i class="iconfont icon-icon-test"></i>
                <span slot="title">禮物商店</span>
              </el-menu-item>
              <el-menu-item index="/personalHome/expression">
                <i class="iconfont icon-biaoqing"></i>
                <span slot="title">表情貼商店</span>
              </el-menu-item>
              <el-menu-item index="/personalHome/box">
                <i class="iconfont icon-liwu"></i>
                <span slot="title">禮物盒子</span>
              </el-menu-item>
            </el-menu>
          </li>
          <li class="grade">
            <i class="iconfont icon-huangguan"></i>
            <div class="btn">升級</div>
          </li>
          <li class="updatePic">
            <div class="pic" @click="jump">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572803593752&di=140b4862eaad12bdb1dab1d5453f74fb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658" alt="">
            </div>
            <p class="text">完善頭像</p>
          </li>
        </ul>
      </div>
      <div class="rightContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "../../api/getUserInfo";

export default {
  name: "personalHome",
  data() {
    return {
      userName: "",
      picList: [
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg",
        "http://www.justloveday.com/images/73/2f8a1a66182a4fc19a9f5f4dcc5ffd9e_80.jpg"
      ]
    };
  },
  created() {
    const id = this.$route.query.id;
    this.$store.commit("saveUserId", id);
    getUserInfo("/user/get/" + id).then(res => {
      console.log(res);
      this.userName = res.userName;
    });
  },
  methods: {
    active() {},
    jump() {
      this.$router.push({
        path: "/updateMsg/avatar"
      });
    }
  },
  components: {},
  mounted() {

  }
};
</script>

<style lang='less' scoped>
.el-header {
  background-color: #ff8c01;
  height: 55px;
  overflow: hidden;
}
.customerService {
  width: 1000px;
  margin: 15px auto;
  display: flex;
  justify-content: space-around;
  .listItem {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .listItem:nth-child(1) {
    cursor: pointer;
  }
}
.mainContent {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .leftContent {
    width: 270px;
    .msgList {
      .avatar {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
        background-color: #fff;
        .pic {
          img {
            width: 100px;
            height: 100px;
            cursor: pointer;
          }
        }
        .info {
          margin-left: 10px;
          width: calc(270px - 100px);
          .name {
            margin-top: 15px;
            cursor: pointer;
          }
          .name:hover {
            color: orange;
          }
          .balance {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .infoList {
        .el-menu-vertical-demo {
          .el-menu-item {
            span {
              margin-left: 15px;
            }
            .icon-lianggeren {
              color: blue;
            }
            .icon-like {
              color: red;
            }
            .icon-xingxing {
              color: yellow;
            }
          }
        }
        margin-bottom: 15px;
      }
      .shopList {
        .el-menu-vertical-demo {
          .el-menu-item {
            span {
              margin-left: 15px;
            }
            .icon-icon-test {
              color: red;
            }
            .icon-biaoqing {
              color: #f79709;
            }
            .icon-liwu {
              color: pink;
            }
          }
        }
        margin-bottom: 15px;
      }
      .grade {
        position: relative;
        margin-bottom: 15px;
        i {
          position: absolute;
          top: 10px;
          left: 10px;
        }
        .btn {
          background-color: #f79709;
          text-align: center;
          color: white;
          font-weight: bold;
          font-size: 15px;
          line-height: 40px;
          height: 40px;
          cursor: pointer;
        }
      }
      .updatePic {
        width: 220px;
        height: 200px;
        position: relative;
        .pic{
          text-align: center;
          img{
          cursor: pointer;
            width: 220px;
            height: 200px;
          }
        }
        .text {
          position: absolute;
          text-align: center;
          bottom: 0;
          width: 100%;
          color: #f79709;
          cursor: pointer;
        }
      }
    }
  }
  .rightContent {
    width: calc(1000px - 270px);
    margin-left: 30px;
  }
}
</style>
