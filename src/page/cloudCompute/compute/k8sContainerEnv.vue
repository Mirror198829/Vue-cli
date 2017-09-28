<template>
   <div>
		<div class="header">
			<div class="topCon">
				<p class="title">容器服务-Kubernetes 解决方案</p>
				<p class="info">提供高性能可伸缩的容器应用管理能力，简化了集群的搭建和扩容等工作，让您轻松管理容器化的应用。</p>
          		<el-button  class="create" type="success" @click="onCreateK8SCluster">创建K8S集群</el-button>
          		<br/>
          		<br/>
				<ul class="list clearfix">
					<li class="list-li liApply">
						<div class="listTitle">
							<img src="../../../assets/k8s/innerImg.png" alt="" class="logo">
                        	<p class="tt">南京中心</p>
						</div>
						<div class="sub-menu"><a href="#/cloudCompute/compute/newCreate">创建域</a>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="#/cloudCompute/compute/infoDetail">查看详情</a></div>	
					</li>
					<li class="list-li liApply">
						<div class="listTitle">
							<img src="../../../assets/k8s/innerImg.png" alt="" class="logo">
                        	<p class="tt">无锡中心</p>
						</div>
						<div class="sub-menu"><a href="#/cloudCompute/compute/newCreate">创建域</a>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="#/cloudCompute/compute/infoDetail">查看详情</a></div>	
					</li>
				</ul>
			</div>
		</div>
		<div class="functionBox">
			<div class="funCon clearfix">
				<p class="funTitle">功能特性</p>
				<div class="y-span4">
	                <div class="cell hide" >
	                    <h1>集群管理</h1>
	                    <p>一键部署高可用Kubernetes集群，内建云上部署最佳实践和安全策略，支持集群弹性伸缩，完全兼容Kubernetes API和工具，支持用户定制部署配置</p>
	                </div>
	                <div class="cell">
	                    <h1>服务管理</h1>
	                    <p>灵活的调度策略，支持Node及Pod的亲和性与反亲和性调度，支持服务的动态伸缩，自动展开与回滚。</p>
	                </div>
	        	</div>
	        	<div class="y-span4">
	                <div class="cell hide" >
	                    <h1>虎踞云能力整合</h1>
	                    <p>整合专有网络VPC，提供安全、高性能的网络方案。支持虎踞云NAS存储，提供持久化的数据存储支持，保证数据的高可用性。支持虎踞云SLB，Ingress。支持4层7层服务路由。</p>
	                </div>
	                <div class="cell">
	                    <h1>DevOps及微服务</h1>
	                    <p>支持DevOps与微服务应用架构最佳实践</p>
	                </div>
	        	</div>
	        	<div class="y-span4 lastY">
	                <div class="cell hide" >
	                    <h1>集成虎踞云镜像服务</h1>
	                    <p>虎踞云镜像服务提供了安全的私有镜像管理能力，可以利用虎踞云内网上实现高性能、稳定的镜像传输。</p>
	                </div>
	                <div class="cell">
	                    <h1>应用管理</h1>
	                    <p>灵活的管理策略，支持应用的创建与编辑管理。</p>
	                </div>
	        	</div>
			</div>
		</div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
	  onCreateK8SCluster(){
	  	this.$router.push({ name: 'newCreateK8SCluster'});
	  }
    
  },
  mounted:function(){
  	$(".cell").mouseover(function(){
  		$(this).removeClass("hide");
  		$(this).siblings(".cell").addClass("hide");
  	});
  }
}
</script>

<style scoped>
.sub-menu{
	background:#ffffff;
	height:37px;
	text-align:center;
	vertical-align:middle;
	font-size:13px;
	padding-top:20px;
}
.sub-menu>a{
	color:#00bed8;
}
.header{
	width:100%;
	margin:0 auto;
	color:#fff;
	padding-top: 58px;
	background: url(../../../assets/k8s/k8sNav.png) no-repeat center top;
	  background-size:100% 100%;
	/*overflow: hidden;*/
}
.topCon .title{
	padding-left: 60px;
    height: 50px;
    line-height: 50px;
    font-size: 34px;
    color: #fff;
    margin-bottom: 8px;
}
.topCon .info{
	margin-left: 60px;
    width: 548px;
    height: 44px;
    line-height: 22px;
    font-size: 14px;
    color: #fff;
    margin-bottom: 70px;
}
.list {
	width: 1220px;
    overflow: hidden;
    margin-left:60px;
}
.list .list-li{
	width: 285px;
    height: 129px;
    float: left;
    margin-right: 20px;
}
.list-li .listTitle{
	width: 283px;
    height: 58px;
    background: url(../../../assets/k8s/tabBg.png) center center no-repeat;
    overflow: hidden;
    border: 1px solid #2f3951;
    border-bottom: 0;
    text-align: center;
}
.list-li .listTitle img{
	display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 12px;
}
.list-li .listTitle p{
	display: inline-block;
    height: 58px;
    line-height: 58px;
    font-size: 16px;
    color: #fff;
    vertical-align: middle;
}
.list-li .liButton{
	width: 285px;
    height: 57px;
    background: #fff;
    overflow: hidden;
    border: 1px solid #d7d8d9;
    border-top: 0;
    color: #00bed8;
    cursor: pointer;
}
.functionBox{
	background-color: #f8f8f8;
}
.functionBox .funCon{
	width:1200px;
	margin:0 auto;
	padding-bottom: 40px;
}
.funCon .funTitle{
	font-size: 24px;
    color: #333;
    padding: 50px 0;
}
.funCon .y-span4 {
	float: left;
    display: inline;
    margin-right: 2%;
    width: 32%;
}
.funCon .lastY{
	margin-right:0;
}
.y-span4 .cell{
	height:200px;
	padding: 20px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    margin-bottom: 10px;
    transition: height 0.5s linear;
}
.y-span4 .hide{
	padding:0;
	height: 40px;
	transition: height 0.5s linear;
}
.y-span4 .cell h1{
	display: block;
    height: 40px;
    line-height: 40px;
    margin-bottom: 0;
    font-size: 14px;
    color: #333;
    text-align: center;
}
.y-span4 .cell p{
	color: #666;
    line-height: 20px;
}
.y-span4 .cell.hide p{
	display: none;
}
.create{
	margin-left:60px;
}
.tt{
	color:blue;
}
</style>
