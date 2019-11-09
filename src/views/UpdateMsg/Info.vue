<template>
  <div class="info">
    <div class="content">
      <div class="left">
        <div class="item">
          <p class="title">關於自己</p>
          <div class="mainContent">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          </div>
        </div>
        <div class="item">
          <p class="title">感情狀態</p>
          <div class="mainContent">
            性取向:
            <el-select v-model="value" placeholder="请选择" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="mainContent">
            感情狀態:
            <el-select v-model="value1" placeholder="请选择" size="small">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="item">
          <p class="title">地理位置</p>
          <div class="mainContent">
            國家:
            <el-input type="text" placeholder="请输入内容" v-model="country" size="small"></el-input>
          </div>
          <div class="mainContent">
            城市:
            <el-input type="text" placeholder="请输入内容" v-model="city" size="small"></el-input>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <p class="title">基本信息</p>
          <div class="mainContent">
            性别:
            <el-select v-model="sex" placeholder="请选择" size="small">
              <el-option
                v-for="item in sexList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select><br>
            生日： <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    size='small'>
                </el-date-picker><br>
            体重：
            <el-select 
                v-model="weight"
                 placeholder="请选择" size="small">
              <el-option
                v-for="item in weightList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select><br>
            身高：
            <el-select 
                v-model="height" 
                placeholder="请选择" size="small">
              <el-option
                v-for="item in heightList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="item">
            <p class="title">
                教育/工作
            </p>
            <div class="mainContent">
                教育： 
                <el-select 
                    v-model="education" 
                    placeholder="请选择" 
                    size="small">
                    <el-option
                        v-for="item in educationList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select><br>
                工作：<el-input type="text" placeholder="请输入内容" v-model="job" size="small"></el-input><br>
                收入：<el-input type="text" placeholder="请输入内容" v-model="income" size="small"></el-input>
            </div>
        </div>
      </div>
    </div>
      <div class="btn">
          <el-button type="success">提交</el-button>
      </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      textarea: "",
      options: [
        {
          value: "选项1",
          label: "異性"
        },
        {
          value: "选项2",
          label: "雙性"
        },
        {
          value: "选项3",
          label: "同性"
        }
      ],
      value: "",
      options1: [
        {
          value: "选项1",
          label: "單身"
        },
        {
          value: "选项2",
          label: "戀愛中"
        },
        {
          value: "选项3",
          label: "訂婚"
        },
        {
          value: "选项4",
          label: "已婚"
        },
        {
          value: "选项5",
          label: "不好說"
        },
        {
          value: "选项6",
          label: "開放式的交往關係"
        },
        {
          value: "选项7",
          label: "喪偶"
        },
        {
          value: "选项8",
          label: "分局"
        },
        {
          value: "选项9",
          label: "離婚"
        },
        {
          value: "选项10",
          label: "同性伴侶"
        }
      ],
      value1: "",
      country: "",
      city: "",
      sexList: [
        {
          value: "选项一",
          label: "男"
        },
        {
          value: "选项二",
          label: "女"
        }
      ],
      sex: "",
      weight:'',
      weightList:[
          {
              value:'选项一',
              label:'不足40kg'
          },
          {
              value:'选项二',
              label:'40kg-60kg'
          },
          {
              value:'选项三',
              label:'60kg-80kg'
          },
          {
              value:'选项四',
              label:'80kg-100kg'
          },
      ],
      heightList:[
          {
              value:'第一项',
              label:'低于150cm'
          },
          {
              value:'第二项',
              label:'150cm-160cm'
          },
          {
              value:'第三项',
              label:'160cm-170cm'
          },
          {
              value:'第四项',
              label:'170cm-180cm'
          },
          {
              value:'第五项',
              label:'180cm以上'
          },
      ],
      height:'',
      educationList:[
          {
              value:'第一项',
              label:'中小学'
          },
          {
              value:'第二项',
              label:'专科/技校'
          },
          {
              value:'第三项',
              label:'学院/大学'
          },
          {
              value:'第四项',
              label:'更高学位'
          },
      ],
      education:'',
      job:'',
      income:''
    };
  },
  components: {}
};
</script>

<style lang='less' scoped>
.info {
  .content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .left {
      .item {
        margin-top: 10px;
        background-color: #fff;
        .title {
          background-color: #eee;
          padding: 5px 10px;
        }
        .mainContent {
          display: flex;
          justify-content: flex-start;
          padding: 5px 10px;
          .el-input {
            width: 200px;
            margin: 2px 10px;
          }
          .el-select {
            margin-left: 10px;
          }
        }
      }
    }
    .right{
        .item {
        margin-top: 10px;
        background-color: #fff;
        .title {
          background-color: #eee;
          padding: 5px 10px;
        }
         .mainContent {
          padding: 5px 10px;
          .el-input {
            width: 200px;
            margin: 10px 10px;
          }
          .el-select {
            margin-left: 10px;
          }
        }
        }
    }
  }
  .btn{
      text-align: center;
  }
}
</style>
