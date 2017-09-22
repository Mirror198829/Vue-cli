<template>
   <div>
   	<div class="topNav">
      <div class="nav clearfix">
        <div class="logoName">
          <img src="../assets/cloud.png" height="45" width="74" title="PAAS云平台" alt="PAAS云平台">
          <span>虎踞云</span>
        </div>
        <div class="menu">
          <ul class="productList clearfix">
            <li class="subList">
              <router-link :to="{name: 'Home'}">首页</router-link>
            </li>
            <li class="subList">
              <router-link :to="{name: 'CloudCompute'}">云计算</router-link>
              <div class="subMenu2" style="display: none;">
                <div class="subnav clearfix">
                  <ul>
                    <li class="clearfix listIcon1">
                      <span class="leftIcon firstIcon"></span>
                      <span>计算</span>
                    </li>
                    <li class="clearfix listIcon2">
                      <span class="leftIcon" style="visibility:hidden;"></span>
                      <span>存储</span>
                    </li>
                    <li class="clearfix listIcon3">
                      <span class="leftIcon" style="visibility:hidden;"></span>
                      <span><router-link :to="{name: 'Network'}">网络</router-link></span>
                    </li>
                  </ul>
                  <div class="sidenav sidenav1">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'PhysicaMachineEnv'}">物理机环境</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                         <router-link :to="{name: 'VirtualMachineEnv'}">虚拟机</router-link>
                         <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'K8SContainerEnv'}">k8s容器环境</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'MessosEnv'}">messo环境</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'YarnEnv'}">YARN环境</router-link> <br/>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div class="sidenav sidenav2" style="display:none;">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ObjectStorage'}">对象存储</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'BlockStorage'}">块存储</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">共享存储</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!--<li class="subList">
              <a>服务管理</a>
              <div class="subMenu1 menuService" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'RelationDatabase'}">关系数据库</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Zookeeper'}">Zookeeper</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Redis'}">redis</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Nginx'}">nginx</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Kafka'}">kafka</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Flume'}">flume</router-link>
                  </li>
                </ul>
              </div>
            </li>-->
            <li class="subList">
              <router-link :to="{name: 'RelationDatabase'}">服务管理</router-link>
              <div class="subMenu2" style="display: none;">
                <div class="subnav clearfix">
                  <ul>
                    <li class="clearfix listIcon1">
                      <span class="leftIcon firstIcon"></span>
                      <span>中间件服务</span>
                    </li>
                    <li class="clearfix listIcon2">
                      <span class="leftIcon" style="visibility:hidden;"></span>
                      <span>数据库服务</span>
                    </li>
                    <li class="clearfix listIcon3">
                      <span class="leftIcon" style="visibility:hidden;"></span>
                      <span><router-link :to="{name: 'Network'}">大数据服务</router-link></span>
                    </li>
                  </ul>
                  <div class="sidenav sidenav1">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'PhysicaMachineEnv'}">应用中间件</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                         <router-link :to="{name: 'VirtualMachineEnv'}">消息中间件</router-link>
                         <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'K8SContainerEnv'}">负载均衡</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'MessosEnv'}">规则引擎</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'YarnEnv'}">流程引擎</router-link> <br/>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'YarnEnv'}">分布式协调中心</router-link> <br/>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div class="sidenav sidenav2" style="display:none;">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ObjectStorage'}">分布式缓存</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'RelationDatabase'}">关系数据库</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">分布式内存库</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">NOSQL</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">时序数据库</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div class="sidenav sidenav3" style="display:none;">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ObjectStorage'}">批处理引擎</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'BlockStorage'}">流处理引擎</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">数据挖掘</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'ShareStorage'}">机器学习</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="subList">
              <a>应用管理</a>
              <div class="subMenu1 menuApply" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'MicroServiceApply'}">微服务应用</router-link>
                  </li>
                  <li>
                    <a>流程调度应用</a>
                  </li>
                  <li>
                    <a>批处理应用</a>
                  </li>
                  <li>
                    <a>普通应用</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="subList">
              <a>API管理</a>
              <div class="subMenu1 menuApi" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'ApiRegister'}">API注册</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'ApiTest'}">API测试</router-link>
                  </li>
                  <li>
                    <a>API</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="subList">
              <a>解决方案</a>
              <div class="subMenu2 subMenuEx" style="display: none;">
                <div class="subnav clearfix">
                  <ul>
                    <li class="clearfix listIcon1">
                      <span class="leftIcon firstIcon"></span>
                      <span>大数据解决方案</span>
                    </li>
                    <li class="clearfix listIcon2">
                      <span class="leftIcon" style="visibility:hidden;"></span>
                      <span>BOSS解决方案</span>
                    </li>
                  </ul>
                  <div class="sidenav sidenav1 sidenavEx">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'PoliceSecurity'}">公安安防</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious " aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <span>医疗</span>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <router-link :to="{name: 'Traffic'}">交通</router-link>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div class="sidenav sidenav2 sidenavEx" style="display:none;">
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <span>物联网计费</span>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                    <div class="sideContent clearfix">
                      <p class="introInfo">
                        <span>在线计费</span>
                        <span class="infoDetail">是一种随时获取、弹性可扩展的计算服务</span>
                      </p>
                      <span class="fa fa-delicious" aria-hidden="true"></span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="subList">
              <a>镜像与资产市场</a>
              <div class="subMenu1 menuMirror" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'BaseMirror'}">基础镜像</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'DatabaseMirror'}">数据库镜像</router-link>
                  </li>
                  <li>
                    <a>缓存镜像</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="subList">
              <a>管理与监控</a>
              <div class="subMenu1 menuManage" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'Log'}">日志</router-link>
                  </li>
                  <li>
                    <a>配置</a>
                  </li>
                  <li>
                    <a>监控</a>
                  </li>
                  <li>
                    <a>调用链</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="subList">
              <a>帮助与支持</a>
              <div class="subMenu1 menuManage" style="display:none;">
                <ul>
                  <li>
                    <router-link :to="{name: 'IntroductionGuid'}">入门指南</router-link>
                  </li>
                  <li>
                    <a>产品文档</a>
                  </li>
                  <li>
                    <a>开发者资源</a>
                  </li>
                  <li>
                    <a>常见问题</a>
                  </li>
                  <li>
                    <a>技术支持</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="login">
          <router-link :to="{name: 'Login'}">登录</router-link>
        </div>
      </div>
    </div>
    <router-view style="min-height:650px"></router-view>
   </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },

  mounted:function(){
    $(".productList>li").mouseover(function(){
	    $(".productList>li").css("border","none");
	    /*$(this).css("border-bottom","3px solid #2883D6");*/
    });
    $(".productList>li").mouseleave(function(){
      $(".productList>li").css("border","none");
    });
    /*二级菜单显示与隐藏*/
    $("li.subList").mouseover(function(){
      if($(".subMenu2")){
        $(".subMenu2").hide();
        $(this).children("a").siblings(".subMenu2").show();
        $(this).children("a").siblings(".subMenu2").children(".sidenav1").show();
        /*$(this).children("a").siblings(".subMenu2").find(".firstIcon").css("visibility","visible");*/
      }
      if($(".subMenu1")){
        $(".subMenu1").hide();
        $(this).children("a").siblings(".subMenu1").show();
      }
    });
    $("li.subList").mouseleave(function(){
      $(".subMenu1,.subMenu2").hide();
    });
    $(".subMenu1,.subMenu2").mouseleave(function(event){
      event.preventDefault();
      event.stopPropagation();
      $(this).hide();
      $(".productList>li").css("border","none");
    });
    /*三级菜单的显示与隐藏*/
    $(".subnav>ul>li").mouseover(function(){
      /*event.preventDefault();
      event.stopPropagation();*/
      $(".subnav>ul>li").children(".leftIcon").css("visibility","hidden");
      $(this).children(".leftIcon").css("visibility","visible");
    });
    $(".listIcon1").mouseover(function(){
      $(".sidenav").hide();
      $(".sidenav1").show();
    });
    $(".listIcon2").mouseover(function(){
      $(".sidenav").hide();
      $(".sidenav2").show();
    });
    $(".listIcon3").mouseover(function(){
      $(".sidenav").hide();
      $(".sidenav3").show();
    });
  }
}
</script>


<style scoped>
a,span{
	cursor: default;
}
.topNav{
  /*position:fixed;
  top:0;*/
  width:100%;
  min-width: 1200px;
  height:66px;
  background-color: #333333;
  /*background-color: #FEFEFE;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to bottom, #FEFEFE, #F4F6F8);
  background-repeat: repeat;*/
}
.topNav .nav{
  width:1200px;
  margin:0 auto;
  color:#fff;
}
.nav .logoName img{
  display:block;
  float:left;
  margin-top:10px;
  width:45px;
}
.nav .logoName span{
  display:block;
  float:left;
  margin-top: 20px;
  margin-left: 7px;
  font-size: 20px;
  font-weight:bolder;
}
.nav .logoName,.nav .menu{
  float:left;
}
.nav .menu{
  margin-left:50px;
}
.menu .productList li{
  float:left;
  list-style:none;
  padding: 24px 18px 20px 18px;
}
.menu .productList>li a{
  cursor: pointer;
}
.productList li.subList{
  position:relative;
}
.productList li.subList .subMenu2{
  position:absolute;
  width:903px;
  top:66px;
  background:rgba(0,0,0,0.8);
  /*background:rgba(76,158,217,1);*/
  left:0;
  z-index: 1000;
}
.subMenu2 .subnav{
  width:95%;
  margin:22px auto;
}
.subMenu1{
  position: relative;
  z-index: 1000;
}
.subMenu2 ul li a,.subMenu1 ul li a{
  font-size:14px;
}
.subMenu2 .subnav ul{
  margin:0;
  padding:0;
  float: left;
  width:180px;
  border-right: 1px solid #fff;
}
.subMenu2 .subnav .sidenav{
  float:left;
  width:675px;
}
.subList .subMenu2 li{
  float: none;
  margin-bottom:10px;
  line-height: 25px;
  padding-left: 10px;
  padding: 0 10px 18px;
}
.subMenu2 li span{
  display: block;
  float:left;
  font-size:14px;
  cursor: pointer;
}
.subMenu2 li .leftIcon{
  width:5px;
  height:25px;
  background-color: #2883D6;
  margin-right:10px;
}
.sideContent{
  width:44%;
  float: left;
  margin-left:5%;
  margin-bottom: 15px;;
  background-color:#9b9c9d;
  /*background-color:#2577e3;*/
}
.sideContent .introInfo{
  float: left;
  font-size:12px;
  margin:10px;
}
.sideContent .introInfo span{
  display: block;
  padding:5px;
}
.sideContent>span{
  float: right;
	margin-top: 17px;
	margin-right: 20px;
	font-size: 24px;
	display: block;
}
.introInfo span.infoDetail{
  color:#d6d8d9;
}
.subMenu1 ul{
  position:absolute;
  width:110px;
  top:20px;
  background:rgba(0,0,0,0.6);
  /*background:rgba(76,158,217,1);*/
  padding: 0;
  text-align: center;
  padding-top: 12px;
  left: -50%;
  margin-left: 14px;
}
.subList .menuApply ul{
  margin-left: 11px;
  width: 105px;
}
.subList .menuService ul{
  margin-left: 13px;
  width: 102px;
}
.subList .menuApi ul{
  margin-left: 9px;
  width: 96px;
}
.subList .menuMirror ul{
  margin-left: 37px;
  width: 150px;
}
.subList .menuManage ul{
  margin-left: 23px;
  width:115px;
}
.subList .subMenu1 li{
  float: none;
  line-height: 25px;
  padding: 6px 10px 12px;
}
.subList .subMenu1 li:hover{
	background: rgba(37,119,227,1);
}
.sidenav .sideContent{
	cursor: pointer;
}
.sidenav .sideContent:hover{
	background-color: #2883D6;
	/*background-color: #0a56bb;*/
	cursor: pointer;
}
.sidenav .sideContent p span:hover{
	background-color: #2883D6;
	cursor: pointer;
}
.productList li.subList .subMenuEx{
  width:580px;
}
.subMenu2 .subnav .sidenavEx{
  width:370px;
}
.sidenavEx .sideContent{
  width:90%;
  float:none;
}
.login{
  float:left;
}
.login a{
  display: block;
  margin-top:24px;
  margin-left:20px;
}
.subMenu2 li .firstIcon{
	visibility: visible;
}
</style>
