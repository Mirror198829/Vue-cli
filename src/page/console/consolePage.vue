<template>


  <div>
<div>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</div>


    <div class="index" style="float: left" >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 26px;">用户信息</span>
        </div>
        <div class="costInfo">
          <div class="loginUser">
            <img src="../../assets/images/consolePage/user.png">test001&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="primary" :disabled="true">个人用户</el-button>

          </div>
          <div>
            <div class="userCost" style="margin-top: 5px;margin-left: 40px">
              <div >
                我的余额:
                <span class="costNum">
            <span>¥ 0
            </span>
            </span>
                <a href="">
                  <el-button type="primary" >去充值</el-button>
                </a>

              </div>

            </div>
            <br/>

            <div class="userCost" style="margin-top: 5px;margin-left: 40px">
              <div>今日消费:
                <span class="costNum" ><span>¥ 0
           </span><i class="anticon anticon-question-circle-o"></i></span><a href="">
                  <el-button type="primary" >去查看</el-button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 26px;">应用</span>
        </div>

      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 26px;">服务</span>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 26px;">健康状态</span>
        </div>
        <div v-for="o in 2" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>



    </div>













  </div>

</template>

<script>


/*
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 90 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 }
        ]
      }
      this.ringSettings = {
        dimension: '成本',
        metrics: '利润'
      }
    }
  }*/








</script>


<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>
  .index{
    width:100%;
    background-color: #fff;
    margin-top: 25px;
    margin-left: 100px;

  }
</style>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 359px;
    height: 251px;
    padding-right: 8px;
    margin: 8px;
    float: left;
  }
</style>

