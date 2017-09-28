<template>
  <div id="console-page" class="clearfix">
    <div class="left-bar">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-menu-item index="2"><i class="el-icon-menu"></i>概览</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-message"></i>服务管理
            </template>
            <el-menu-item-group>
              <template slot="title">中间件服务</template>
              <el-menu-item index="1-1">批处理引擎</el-menu-item>
              <el-menu-item index="1-2">数据挖掘</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="数据库服务">
              <el-menu-item index="1-3">分布式缓存</el-menu-item>
              <el-menu-item index="1-4">分布式数据库</el-menu-item>
            </el-menu-item-group>
          </el-submenu>         
          <el-menu-item index="3"><i class="el-icon-setting"></i>应用管理</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-share"></i>API管理</el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="right-bar">
        <div class="userInfo clearfix">
            <div class="pull-left">
              <img src="../../assets/console/usericon.png" height="71" width="73">
            </div>
            <div class="pull-left">
               <p class="user-detail">登陆账号：admin</p>
               <p class="user-detail">账号ID ： 1232006396865568</p>
               <p class="user-detail">注册时间：2017-09-28 11:34:00</p>
            </div>
            <ul class="pull-right clearfix">
              <li class="pull-left user-card">
                  <h5>0</h5>
                  <p>我的应用</p>
              </li>
              <li class="pull-left user-card">
                  <h5>15</h5>
                  <p>我的工单</p>
              </li>
              <li class="pull-left user-card">
                  <h5>7</h5>
                  <p>我的服务</p>
              </li>
            </ul>
        </div>
       <div class="console-main clearfix">
          
          <div class="console-main-left pull-left">
            <div class="card-division">
              <h3 class="card-division-title">个人中心</h3>
              <div class="card-division-area clearfix">
                  <el-card class="box-card-left">
                  <div slot="header">
                    <span>待办事项</span>
                  </div>
                  <div class="card-body clearfix">
                      <ul>
                        <li class="todo-item clearfix">工单：<span class="todo-item-num"><strong>12</strong>件</span></li>
                        <li class="todo-item clearfix">应用：<span class="todo-item-num"><strong>27</strong>件</span></li>
                        <li class="todo-item clearfix">服务：<span class="todo-item-num"><strong>26</strong>件</span></li>
                      </ul>      
                  </div>
                </el-card>
                <el-card class="box-card-left">
                  <div slot="header">
                    <span>告警</span>
                  </div>
                  <div  class="card-body" style="position:relative">
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
                        <p><i class="fa fa-check-circle-o" style="font-size:50px;color:#20a0ff"></i></p>                    
                        <!-- <img src="../../assets/console/icons-pro-ser.png" height="76" width="76" /><br/> -->
                        <p style="margin-top:10px;"><span style="font-size:13px;color:#666;">暂无系统告警</span></p>
                     </div>
                  </div>
                </el-card>
                <el-card class="box-card-left">
                  <div slot="header">
                    <span>健康状态</span>
                  </div>
                  <div  class="card-body" style="position:relative">
  
                  </div>
                </el-card>
              </div>
            </div>
            <div class="card-division">
              <h3 class="card-division-title">数据中心</h3>
              <div class="card-division-area clearfix">               
                <el-card class="box-card-left" v-for="(item,key) in centerData" :key="key">
                  <div slot="header">
                    <span>{{item.title}}</span>
                  </div>
                  <div  class="card-body">
                    <ul>
                      <li class="center-item" v-for="(val,key) in item.centers" :key="key" @click="goToPage(val.route,item.title)">
                        <i class="fa center-icon" :class="val.icon"></i>
                        <span>{{val.name}}：</span>
                        <span class="center-item-num">{{val.num}}</span>
                        <span>个</span>
                      </li>
                    </ul>
                  </div>
                </el-card>
              </div>
            </div>
          </div>
          <div class="division"></div>
          <div class="console-main-right pull-right">
            <div class="card-division">
              <h3 class="card-division-title">公告栏</h3>
              <div class="card-division-area">
                <el-card class="box-card">
                  <div slot="header">
                    <span>公告</span>
                  </div>
                  <div class="clearfix">
                    
                    <div class="pull-left" style="width:68%;position:relative;">
                       <ul>
                         <li class="common-txt">2017年10月虎踞云正式上线了</li>
                         <li class="common-txt">问：虎踞云功能有多强大？</li>
                         <li class="common-txt">虎踞云功能介绍的文档</li>
                       </ul>
                    </div>
                    <div class="pull-right" style="width:30%;position:relative;top:15px">
                       <img src="../../assets/console/common.png" height="93" width="80" id="notice-board-img">
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
            <div class="card-division">
              <h3 class="card-division-title">重要提醒</h3>
              <div class="card-division-area">
               <div>
                <div style="padding:20px 15px;background-color:#F2FFEA;border:1px solid #C7DDB9;font-size:12px;">
                  <i class="fa fa-warning" style="color:red"></i>&nbsp阅读ECS控制台使用小贴士，让操作简单一点！查看详情
                </div>
                </div>
              </div>
            </div>
            <div class="card-division">
              <h3 class="card-division-title">常用操作</h3>
              <div class="card-division-area">
                  <div style="background-color:#fff;padding:15px;" class="clearfix">
                    <li class="common-use">设置</li>
                    <li class="common-use">查看事项</li>
                    <li class="common-use">创建应用</li>
                    <li class="common-use">停止应用</li>
                  </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
    
  </div>

</template>
<script>
  export default {
    data() {
      //待办事项echarts图
      let todoData={
        color:[' #46b3f8','#f6575e'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c}个 ({d}%)"
        },
        legend: {
           orient: 'vertical',
           x: 'right',              
           data:['已完成事项','待办事项']
        },
        series: [
           {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            legend:{
              right:0
            },
            data:[
              {value:56, name:'已完成事项'},
              {value:6, name:'待办事项'}
            ]
           }
        ]
      }
      return {
        isCollapse: true,
        todoData:todoData,
        centerData:[
          {'title':'江浦',"centers":[
            {'name':'集群','icon':'fa-database','num':127,'route':'ColonyInfo'},
            {'name':'业务中心','icon':'fa-cube','num':59,'route':'BusinessCenterInfo'},
            {'name':'应用','icon':'fa-puzzle-piece','num':36,'route':'ApplicationInfo'},
            {'name':'服务','icon':'fa-recycle','num':89,'route':'ServiceInfo'}
           ]
          },
          {'title':'浦口',"centers":[
            {'name':'集群','icon':'fa-database','num':6,'route':'ColonyInfo'},
            {'name':'业务中心','icon':'fa-cube','num':18,'route':'BusinessCenterInfo'},
            {'name':'应用','icon':'fa-puzzle-piece','num':96,'route':'ApplicationInfo'},
            {'name':'服务','icon':'fa-recycle','num':42,'route':'ServiceInfo'}
           ]
          },
          {'title':'建邺',"centers":[
            {'name':'集群','icon':'fa-database','num':6,'route':'ColonyInfo'},
            {'name':'业务中心','icon':'fa-cube','num':18,'route':'BusinessCenterInfo'},
            {'name':'应用','icon':'fa-puzzle-piece','num':96,'route':'ApplicationInfo'},
            {'name':'服务','icon':'fa-recycle','num':42,'route':'ServiceInfo'}
           ]
          }
        ]
        
      };
    },
    methods: {
      goToPage(route,centerName){
        this.$router.push({name: route,params:{centerName:centerName}});
      },
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
  .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{color:#fff;}
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{color:#20a0ff;}
  .el-card__header{padding:8px 20px;font-weight:400;color:#666;}
  .el-card__body{padding:15px;}
  .console-main-left .el-card__body{height: 130px}
</style>
<style scoped>
/*公告*/
/*#notice-board-img{animation: moveImg 5s;animation-iteration-count:infinite;}*/
/*待办*/
.todo-item{text-align: left;padding:5px 15px;background-color: #f5f5f6;margin:10px 0;font-size: 14px;color:#666;}
.todo-item-num{float: right;margin-right: 30px;}
.todo-item-num>strong{margin-right: 15px;}
.todo-item:hover{background-color: #46b3f8;color:#fff;cursor: pointer}
/*主页*/
#console-page{width: 100%;min-width:1200px;}
.box-card{width:320px;}
.echarts {height:140px;width:100%;}
.card-body{height: 130px;}
.box-card-left .card-body{height:130px;text-align: center;box-sizing: border-box;}
.info{margin-top:15px;}
.box-card{transition: all 0.2s;}
.box-card:hover{box-shadow: 1px 1px 1px 0px #666;}
.common-txt{font-size: 13px;text-decoration: underline;color:#777;margin:10px 0;cursor: pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.center-item{background-color: #f5f5f6;margin-bottom:10px;text-align: left;padding:5px 15px;font-size: 13px;color:#555;}
.center-icon{margin-right: 15px;transition:transform 1s;color:#46b3f8;}
.center-item-num{font-weight: 700;display: inline-block;}
.center-item:hover{background-color: #46b3f8;color:#fff;cursor: pointer}
.center-item:hover .center-icon{animation: iconMove 1s;animation-iteration-count:infinite;color:#fff;}
.center-item:hover .center-item-num{text-decoration: underline;}
.left-bar{height: 670px;width:200px;float: left;box-sizing: border-box;background-color: #324157}
.right-bar{height: 670px;width: calc(100% - 200px);background-color: #eaedf1;float: right;box-sizing: border-box;padding:15px;}
.userInfo{background-color: #fff;padding:10px;margin-bottom:30px;}
.user-detail{font-size: 14px;margin:3px;margin-left: 20px;color:#555;}
.user-card{padding:5px 25px;background-color:#20a0ff;margin:0 10px;color:#fff;}
.user-card>h5{font-size:35px;text-align: center;}
.console-main{margin-top:15px;}
.console-main-right{width: 320px; box-sizing: border-box;}
.console-main-left{width: calc(100% - 342px);box-sizing: border-box;}
.division{width:2px;height:480px;float:left;margin-right:15px;margin-left: 5px;background-color: #ccc}
.card-division-title{padding-left:10px;border-left:3px solid #46b2fa;margin-bottom: 8px;font-size: 13px;font-weight: 400}
.card-division{margin-bottom:25px;}
.box-card-left{width:calc((100% - 30px) / 3);float: left;margin-right: 10px;box-sizing: border-box;}
.card-division-area{width: 100%;}
.common-use{width:calc((100% - 12px) / 2);float: left;text-align: center;border:1px solid #ccc;padding:8px 0;font-size: 12px;margin:5px 3px;box-sizing: border-box;background-color: #f7f7f7;transition: all .2s;color:#666;}
.common-use:hover{background-color: #46b3f8;color:#fff;cursor: pointer;border-color:#46b3f8;}

@keyframes iconMove{
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}
@keyframes moveImg{
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}
</style>



