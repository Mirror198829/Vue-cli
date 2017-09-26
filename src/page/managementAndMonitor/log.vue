<template>
	<div>
		<div class="logBox">
			<div class="service clearfix">
				<div class="serviceTxt">
					<p class="serTitle">
						<i class="fa fa-cogs" aria-hidden="true"></i>
						<span>日志服务</span>
					</p>
					<p class="serIntro">虎踞云日志服务用于分布式的收集虎踞云平台用户的“集群”和“容器”日志信息，进行集中管理，并按需智能化解析用户日志，拆解日志的结构并发现日志特性。在网易虎踞云平台中提供用户日志查看、搜索、过滤、跟踪，统计分析等功能。帮助虎踞云用户简单、方便使用日志数据，发掘日志价值。</p>
				</div>
				<img class="serImg" src="../../assets/log/log.png">
			</div>
			<div class="productAdvantage">
				<p class="proTitle">产品优势</p>
				<div class="proIntro clearfix">
					<div class="proDetail">
						<p class="proTxt">
							<span class="detailTxt1">集中管理日志，提供WEB查询页面</span>
							<span class="detailTxt2">无需繁琐登录或定位日志文件，随时查看你创建的多个集群和容器的日志</span>
						</p>
						<p class="proTxt">
							<span class="detailTxt1">强大的自由搜索、过滤功能</span>
							<span class="detailTxt2">日志服务可以根据集群、容器以及文件名进行过滤，并支持日志内容自由搜索。未来将加入更多便捷功能</span>
						</p>
						<p class="proTxt">
							<span class="detailTxt1">实时输出、跟踪</span>
							<span class="detailTxt2">日志服务实时（延迟< 3s）输出用户日志，你也可以实时跟踪自己的日志</span>
						</p>
					</div>
					<img class="proImg" src="../../assets/log/log2.png" />
				</div>
			</div>
			<div class="function">
				<p class="funTitle">功能特点</p>
				<div class="funIntro clearfix">
					<div class="funList">
						<ul>
							<li class="listFirst listLi1">01 分散收集，集中管理</li>
							<li class="listLi2">02 智能解析日志</li>
							<li class="listLi3">03 实时跟踪查看日志</li>
							<li class="listLi4">04 自由搜索和过滤</li>
							<li class="listLast listLi5">05 可视化统计分析</li>
						</ul>
					</div>
					<div class="funDetail funDetail1">
						<p>分布式收集日志信息，集中管理。</p>
						<img src="../../assets/log/logInfo1.png">
					</div>
					<div class="funDetail funDetail2" style="display: none;">
						<p>智能解析用户日志结构，发掘日志特性。</p>
						<img src="../../assets/log/logInfo2.png">
					</div>
					<div class="funDetail funDetail3" style="display: none;">
						<p>提供实时的日志跟踪、查看功能。</p>
						<img src="../../assets/log/logInfo3.png">
					</div>
					<div class="funDetail funDetail4" style="display: none;">
						<p>自由搜索、过滤。</p>
						<img src="../../assets/log/logInfo4.png">
					</div>
					<div class="funDetail funDetail5" style="display: none;">
						<p>可视化统计分析图表信息，集中管理。</p>
						<img src="../../assets/log/logInfo5.png">
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
    
  },
  mounted:function(){
  	$(".funList ul li").mouseover(function(){
  		$(".funList ul li").css({"color":"#333","background-color":"#fff"});
  		$(this).css({"color":"#fff","background-color":"#2883D6"});
  	});
  	$(".funList ul .listLi1").mouseover(function(){
  		$(".funDetail").hide();
  		$(".funDetail1").show();
  	});
  	$(".funList ul .listLi2").mouseover(function(){
  		$(".funDetail").hide();
  		$(".funDetail2").show();
  	});
  	$(".funList ul .listLi3").mouseover(function(){
  		$(".funDetail").hide();
  		$(".funDetail3").show();
  	});
  	$(".funList ul .listLi4").mouseover(function(){
  		$(".funDetail").hide();
  		$(".funDetail4").show();
  	});
  	$(".funList ul .listLi5").mouseover(function(){
  		$(".funDetail").hide();
  		$(".funDetail5").show();
  	});
  }
}
</script>

<style scoped>
.logBox{
	width:1200px;
	margin:0 auto;
}
.service{
	width:100%;
	background-color: #fafafa;
	border: 1px solid #eee;
	margin-top: 40px;
}
.service .serviceTxt{
	float:left;
	width: 680px;
    padding: 30px 0 22px 30px;
}
.serviceTxt .serTitle i{
	color:#2883D6;
	font-size:40px;
}
.serviceTxt .serTitle span{
	padding-left:20px;
	font-size:33px;
	color:#333;
}
.serviceTxt .serIntro{
	color: #666;
	font-size: 16px;
	margin-top: 40px;
	line-height: 28px;
}
.service img.serImg{
	float:left;
	margin-left: 80px;
}
.productAdvantage,.function{
	margin-top:70px;
}
.function{
	margin-bottom: 100px;
}
.productAdvantage .proTitle,.function .funTitle{
	font-size:22px;
	color:#333;
	margin-bottom:24px;
}
.productAdvantage .proIntro{
	width: 1200px;
    border: 1px solid #eee;
    padding-bottom: 30px;
}
.function .funIntro{
	width: 1200px;
    border: 1px solid #eee;
    height:365px;
}
.proIntro .proDetail{
	float: left;
}
.proIntro .proImg{
	float: left;
	margin-left:130px;
}
.proIntro .proTxt{
	font-size:16px;
	color:#333;
	margin-top:30px;
	margin-left:30px;
}
.proIntro .proTxt .detailTxt2{
	font-size:14px;
	color:#666;
	padding-top: 15px;
}
.proIntro .proTxt span{
	display: block;
}
.funIntro .funList{
	float:left;
}
.funIntro .funDetail{
	float: left;
}
.funIntro .funList ul li{
	width:480px;
	color:#333;
	text-indent:70px;
	line-height: 60px;
	border-right: 1px solid #eee;
	border-bottom: 1px solid #eee;
}
.funList ul li.listLast{
	/*border-bottom: none;*/
}
.funList ul li.listFirst{
	background-color: #2883D6;
	color:#fff;
}
.funIntro .funDetail>p{
	font-size:14px;
	color:#666;
	padding:24px 22px;
}
.funIntro .funDetail>img{
	margin-left: 139px;
    margin-top: 13px;
}
</style>
