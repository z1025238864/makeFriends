<template>
  <div class="newDynamic">
    <div class="release">
      <p class="titile">
        <i class="iconfont icon-bi"></i>
        更新動態
      </p>
      <div id="editor">
        <Editor />
      </div>
      <div class="recommend">
        <el-tabs type="card" style=" ">
          <el-tab-pane label="推薦用戶">
            <ul class="userList">
              <li class="userItem" v-for="i in 6">
                <div class="userMsg">
                  <div class="pic">
                    <img
                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572891052218&di=6d93c7c4d0ac184ca735589fd08ca7f2&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2017%2F04%2F03%2FB2412.jpg"
                      alt
                    />
                  </div>
                  <div class="detail">
                    <p class="userDetail">
                        <span class="name">aaa</span><br>
                        <span class="sex">男</span>
                        <span class="age">23</span>
                    </p>
                    <div class="btn">
                      <i class="iconfont icon-ziyuan"></i>
                      <i class="iconfont icon-like"></i>
                      <i class="iconfont icon-xinxi"></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
                <el-pagination
              layout="prev, pager, next"
              :total="50">
        </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="最新動態">
            <ul class="infoList">
              <li class="listItem" v-for="i in 5">
                <div class="personal">
                  <div class="avatar">
                    <img
                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572874083044&di=d8ffd981cca12aaac6713c5471654c8d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658"
                      alt
                    />
                  </div>
                  <div class="message">
                    <p class="title">
                      <span class="username msg" @click="jumpHome">zdd</span>
                      <span class="time msg">{{time}}</span>
                    </p>
                    <div class="pic">
                      <img
                        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3994497691,3165886670&fm=26&gp=0.jpg"
                        alt
                      />
                    </div>
                    <div class="report">
                      <p>舉報</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <el-pagination
              layout="prev, pager, next"
              :total="50"
              >
        </el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-backtop target=".newDynamic>.release>.titile"></el-backtop>
    </div>
  </div>
</template>
<script>
import Editor from "./Editor";
import formatTime from "../../until/formatDate";
export default {
  name: "newdynamic",
  data() {
    return {
      time: formatTime(new Date())
    };
  },
  methods: {
    jumpHome() {}
  },
  components: {
    Editor
  }
};
</script>

<style lang='less' scoped>
.release {
  .titile {
    background-color: #f0f0f0;
    padding: 5px;
    .icon-bi {
      color: red;
    }
  }
  #editor {
    height: 110px;
  }
  .recommend {
    .infoList {
      border: 1px solid red;
      padding: 15px;
      background-color: #f0f0f0;
      .listItem {
          margin-top: 20px;
        .personal {
          display: flex;
          justify-content: space-between;
          .avatar {
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
          }
          .message {
            width: calc(100% - 60px);
            margin-left: 15px;
            background-color: #fff;
            text-align: center;
            position: relative;
            .title {
              display: flex;
              justify-content: space-between;
              padding: 15px 10px;
              .username {
                color: orange;
                cursor: pointer;
              }
              .time {
                color: #ccc;
              }
            }
            .pic {
              padding: 15px;
            }
            .report {
              background-color: #f0f0f0;
              border: 1px solid #ccc;
              padding: 10px;
              p {
                text-align: right;
                cursor: pointer;
                height: 25px;
                line-height: 25px;
              }
            }
          }
          .message::before {
            display: inline-block;
            position: absolute;
            left: -24px;
            top: 10px;
            content: "";
            border-top: 12px solid transparent;
            border-left: 12px solid transparent;
            border-right: 12px solid #fff;
            border-bottom: 12px solid transparent;
          }
        }
      }
    }
    .userList{
         display: flex;
         justify-content: space-around;
         padding: 10px 5px;
         flex-wrap: wrap;
         width: 720px;
        background-color: #fff;
        .userItem{
            background-color: #fff;
            display: flex;
            justify-content: center;
            margin: 10px;
            .userMsg{
                border: 1px solid #ddd;
                height: 137px;
                display: flex;
                justify-content: space-between;
                .pic{
                    img{
                        width: 130px;
                        height: 130px;
                    }
                }
                .detail{
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .userDetail{
                        text-align: left;
                        .name{
                            font-weight: bold;
                            font-size: 20px;
                             margin-bottom: 15px;
                        }

                        span{
                            margin-right:  10px;
                            display: inline-block;
                        }
                       
                    }
                    .btn{
                        display: flex;
                        justify-content: space-around;
                        background-color: #f0f0f0;
                        border: 1px solid #ddd;
                        height: 35px;
                        line-height: 35px;
                        .iconfont{
                            cursor: pointer;
                        }
                        .icon-ziyuan{
                            color: greenyellow;
                        }
                        .icon-like{
                            color: red;
                        }
                    }
                }
               
            }
        }
    }
  }
}
</style>
