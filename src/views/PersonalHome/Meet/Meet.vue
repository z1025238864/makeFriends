<template>
  <div class="meet">
    <div class="title">
      <el-tabs type="border-card">
        <el-tab-pane label="我喜欢的人">
          <ul class="userList">
            <li class="listItem" v-for="(item,index)  in 5" :key="index">
              <div class="info">
                <div class="userInfo">
                  <div class="avatar">
                    <img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3994497691,3165886670&fm=26&gp=0.jpg"
                      alt
                    />
                  </div>
                  <div class="userName">
                    <p>candy,</p>
                    <p>22,</p>
                    <p>2019-11-23</p>
                  </div>
                </div>
                <div class="btn">
                  <el-dropdown size="medium" split-button>
                    發送消息
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>禮物</el-dropdown-item>
                      <el-dropdown-item>刪除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="喜欢我的人">
               <ul class="userList">
            <li class="listItem" v-for="(item,index)  in 5" :key="index">
              <div class="info">
                <div class="userInfo">
                  <div class="avatar">
                    <img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3994497691,3165886670&fm=26&gp=0.jpg"
                      alt
                    />
                  </div>
                  <div class="userName">
                    <p>candy,</p>
                    <p>22,</p>
                    <p>2019-11-23</p>
                  </div>
                </div>
                <div class="btn">
                  <el-dropdown size="medium" split-button>
                    發送消息
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>禮物</el-dropdown-item>
                      <el-dropdown-item>刪除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="相互喜欢的">
               <ul class="userList">
            <li class="listItem" v-for="(item,index)  in 5" :key="index">
              <div class="info">
                <div class="userInfo">
                  <div class="avatar">
                    <img
                      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3994497691,3165886670&fm=26&gp=0.jpg"
                      alt
                    />
                  </div>
                  <div class="userName">
                    <p>candy,</p>
                    <p>22,</p>
                    <p>2019-11-23</p>
                  </div>
                </div>
                <div class="btn">
                  <el-dropdown size="medium" split-button>
                    發送消息
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>禮物</el-dropdown-item>
                      <el-dropdown-item>刪除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "meet",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
.meet {
  .title {
    .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
      color: orange !important;
    }
  }
  .userList {
    .listItem {
      padding: 10px 15px;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      .info {
        display: flex;
        justify-content: space-between;
        .userInfo {
          display: flex;
          justify-content: space-between;
          .avatar {
            cursor: pointer;
            img {
              width: 60px;
              height: 60px;
            }
          }
          .userName {
            margin-left: 20px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            font-size: 13px;
            p {
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
}
</style>
