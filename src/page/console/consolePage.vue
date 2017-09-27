<template>
  <div id="console-page">
    <div class="console-main">
      <el-card class="box-card">
        <div slot="header">
          <span>我的信息</span>
        </div>
        <div  class="card-body">
          <div class="loginUser">
            <img src="../../assets/console/user.png">
            <p class="info"><span>用户名：</span><span>admin</span></p>
            <p class="info"><span>用户角色：</span><span>管理员</span></p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>待办事项</span>
        </div>
        <div class="card-body clearfix">
            <chart :options="todoData"></chart>              
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>公用</span>
        </div>
        <div class="clearfix">
          
          <div class="pull-left" style="width:68%;position:relative;top:10px">
             <ul>
               <li class="common-txt">2017年10月虎踞云正式上线了</li>
               <li class="common-txt">问：虎踞云功能有多强大？</li>
               <li class="common-txt">虎踞云功能介绍的文档</li>
               <li class="common-txt">关于虎踞云（docker，k8s）</li>
             </ul>
          </div>
          <div class="pull-right" style="width:30%;position:relative;top:40px">
             <img src="../../assets/console/common.png" height="93" width="80">
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>告警</span>
        </div>
        <div  class="card-body" style="position:relative">
          <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)">
              <img src="../../assets/console/icons-pro-ser.png" height="76" width="76" /><br/>
              <span style="font-size:13px">暂时无系统告警</span>
           </div>
        </div>
      </el-card>
      <el-card class="box-card" v-for="(item,key) in centerData" :key="key">
        <div slot="header">
          <span>数据中心-{{item.title}}</span>
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
<style scoped>
#console-page{background-color: #f4f5f6;padding-bottom:20px;}
.console-main{width: 1200px;margin: 0 auto;display: flex;justify-content:flex-start; flex-wrap:wrap;}
.box-card{width:calc((100% - 70px) / 3);margin:0 10px;margin-top:20px;}
.echarts {height:180px;width:100%;}
.card-body{height: 200px;text-align: center;}
.info{margin-top:15px;}
.box-card{transition: all 0.2s;}
.box-card:hover{box-shadow: 1px 1px 1px 0px #666;}
.common-txt{font-size: 13px;text-decoration: underline;color:#777;margin:10px 0;cursor: pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.center-item{height:40px;line-height: 40px;background-color: #f5f5f6;margin:10px 0;text-align: left;padding:0 15px;font-size: 14px;color:#555;}
.center-icon{margin-right: 15px;transition:transform 1s;color:#46b3f8;}
.center-item-num{font-weight: 700;display: inline-block;}
.center-item:hover{background-color: #46b3f8;color:#fff;cursor: pointer}
.center-item:hover .center-icon{animation: iconMove 1s;animation-iteration-count:infinite;color:#fff;}
.center-item:hover .center-item-num{text-decoration: underline;}
@keyframes iconMove{
  from {transform: rotateY(0deg);}
  to {transform: rotateY(360deg);}
}
</style>



