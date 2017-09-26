<template>
   <div>
      <div class="content-top">
        <div class="content-top-text" >
          <h1 class="col">{{h1Title}}</h1>
          <br/>
          <p class="col">{{description}}</p>
        </div>
      </div>
      <ul>
        <li v-for="module in modules"/>
      </ul>
     <div class="content-body">
      <div  v-for="module in modules">

           <div v-if="module.displayType === 5">
            <div class="light-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-4 content-box-item-num-5" v-for="item in module.items">
                   <img :src="item.imageUrl" style="width: 100%; height: 95.48px;display:block"></img>
                    <el-button type="success" @click="onCreate(item.type,$event)">创建应用</el-button>
                 </div>
               </div>
            </div>
         </div>
        <div v-if="module.displayType === 6">
             <div class="black-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-2 content-box-item-num-6" v-for="item in module.items">
                   <img :src="item.imageUrl"></img>
                   <div>
                     <h3>{{item.title}}</h3>
                     <p>{{item.content}}</p>
                   </div>
                 </div>
               </div>
            </div>
        </div>
        <div v-if="module.displayType === 4">
          <div class="light-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box">
              <div class="content-box-item-4  content-box-item-num-4" v-for="item in module.items">
                <div>
                  <h4>{{item.title}}</h4>
                   <ul>
                     <li v-for="item1 in item.items">{{item1}}</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div v-if="module.displayType === 7">
       		<div class="dark-group">
			     	<div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
          </div>
				<div class="content-box-item-num-7 clearfix">
					<div class="content-box-item-num-7-left">
						<ul>
							<li v-for="(item,index) in module.items"  v-if="index === 0" class="ul-left ul-left-current" :li-id="index">{{item.title}}</li>
              <li v-for="(item,index) in module.items"  v-if="!index == 0" class="ul-left ul-left-current-no" :li-id="index">{{item.title}}</li>
						</ul>
					</div>
          <div class="content-box-item-num-7-right">
  					<div class="div-right div-right-current"  v-for="(item,index) in module.items"  :div-id="index"  v-if="index === 0" >
              <p><br/></p>
  						<p>{{item.content}}</p>
                 <p><br/></p>
  						<img :src="item.imageUrl">
  					</div>
  					<div class="div-right  div-right-current-no"  v-for="(item,index) in module.items"  :div-id="index" v-if="!index == 0" >
               <p><br/></p>
  						  <p>{{item.content}}</p>
                   <p><br/></p>
              <img :src="item.imageUrl">
  					</div>
          </div>
				</div>
			</div>
       </div>


      </div>
     </div>

   </div>

</template>

<script>
 const kind1=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/kind-1.jpg')
  const kind2=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/kind-2.jpg')
   const kind3=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/kind-3.jpg')
    const kind4=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/kind-4.jpg')
     const fun1=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/fun-1.jpg')
 const fun2=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/fun-2.jpg')
  const fun3=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/fun-3.jpg')
   const fun4=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/fun-4.jpg')
    const scene1=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/scene-1.jpg')
   const scene2=require('../../../assets/images/serviceManagement/databaseService/relationDatabase/scene-2.jpg')

export default {
  data() {
    return {
      h1Title: "关系型数据库",
      description: "专业化的高性能、高可靠云数据库服务，支持Mysql、SQL Server、PostgreSQL引擎，提供简易方便的Web界面管理、可靠的数据备份和恢复、完备的安全管理、完善的监控等功能。",
      modules: [
        {
          title: "产品种类",
          items: [{
            imageUrl: kind1,
            type:"mysql"
          }, {
            imageUrl: kind2,
            type:"sqlServer"
          }, {
            imageUrl: kind3,
            type:"psg"
          }, {
            imageUrl: kind4,
            type:"oracle"
          }],
          displayType: 5
        },
        {
          title: "产品功能",
          items: [{
            imageUrl: fun1,
            title:"灵活计费、弹性可扩展",
            content: "支持按需计费、包年包月计费模式，按需计费可随时转包年包月；支持实例内存按需升降配、磁盘空间弹性扩容；单实例最大支持64G内存、1TB存储空间；支持创建最多5个只读实例，按需扩展实例读能力；代理实例实现自动读写分离。"
          }, {
            imageUrl: fun2,
            title:"主从热备、服务高可用",
            content: "主从热备，主从物理机隔离保障机制，故障自动秒级切换，为您的服务保驾护航；主从可分别创建在不同的可用区，实现同城容灾，避免机房故障导致业务受影响；用户可创建异地 RDS 并通过数据传输服务实时同步，从而实现异地灾备。"
          }, {
            imageUrl: fun3,
            title:"自动备份，数据高可靠",
            content: "RDS 提供每天自动冷备数据并上传到对象存储 BOS，提供一键恢复实例数据，确保数据库的容灾能力；提供7天内的冷备文件和日志文件的下载，可恢复7天内任意时间点数据，避免误操作带给业务的严重影响。"
          }, {
            imageUrl: fun4,
            title:"简单易用，专业化服务",
            content: "在线热迁移，web 界面配置操作，访问授权直接编辑，轻松应对数据库管理；提供CPU 占用率、磁盘使用率、内存使用率、请求数等监控，实时了解数据库运行状态，定制监控策略和短信报警。"
          }],
          displayType: 6
        },
        {
          title: "使用场景",
          items: [{
            imageUrl: scene1,
            title:"读写分离",
            content: "应用程序将读写请求全部发送给代理实例，代理实例自动分离读请求并均摊到只读实例上，剩余的读写请求发给主实例的主节点，从而扩展整体读能力；主实例备节点、只读实例和主节点之间通过异步复制进行主从同步。"
          }, {
            imageUrl: scene2,
            title:"高可用架构",
            content: "主从热备，主从物理机隔离保障机制，故障自动秒级切换，为您的服务保驾护航；主从可分别创建在不同的可用区，实现同城容灾，避免机房故障导致业务受影响；用户可创建异地 RDS 并通过数据传输服务实时同步，从而实现异地灾备。"
          }],
          displayType: 7
        },{
          title:"使用指南",
          displayType: 4,
          items:[
            {
              title:"新手指南",
              items:["RDS简介","RDS优势","RDS典型应用场景"]
            },
             {
              title:"操作指南",
              items:["使用RDS实例"]
            },
             {
              title:"常见问题",
              items:["如何连接数据库？","是否支持root账号？","RDS如何升级？","RDS中误删除的数据如何找回？"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onCreate(type,event){
      console.log(type);
      console.log(event);
      if("mysql" === type){
        this.$router.push({ name: 'CreateMysql'});
      }
    }

  },
   mounted:function(){
    $(".content-box-item-num-7-left ul li").mouseover(function(){
      $(".content-box-item-num-7-left ul li").css({"color":"#333","background-color":"#fff"});
      $(this).css({"color":"#fff","background-color":"#2883D6"});
    });
    $(".content-box-item-num-7-left ul .ul-left").mouseover(function(){
    var curId = $(this).attr("li-id");
    $("div[div-id='"+curId+"']").addClass("div-right-current");
     $("div[div-id!='"+curId+"']").addClass("div-right-current-no");
     $("div[div-id='"+curId+"']").removeClass("div-right-current-no");
     $("div[div-id!='"+curId+"']").removeClass("div-right-current");
      $("li[li-id='"+curId+"']").addClass("ul-left-current");
     $("li[li-id!='"+curId+"']").addClass("ul-left-current-no");
     $("li[li-id='"+curId+"']").removeClass("ul-left-current-no");
     $("li[li-id!='"+curId+"']").removeClass("ul-left-current");
  
    });
  }
}
</script>

<style scoped>
.content-top{
  height: 350px;
  background: #4b5154   url('../../../assets/images/serviceManagement/databaseService/relationDatabase/main-bg.jpg') 85% 50%  no-repeat;
}
.content-title{
  padding-left:50px;
  padding-top:20px;
  padding-bottom:20px;
}

.col{
  color:#ffffff
}
.content-box{
  padding-left:50px;
  text-align: center;

}
.content-box-item-3{
  display: inline-block;
  width: 32%;
}
.content-box-item-4{
  display: inline-block;
  width: 24%;
}
.content-box-item-num-2{
  text-align: center;
  background-color: #ffffff;
  height:300px;
  margin:5px;
}
.content-box-item-num-2>img{
    margin-top:30px;
    margin-bottom:30px;
}
.content-box-item-num-3{
  text-align: left;
  height:300px;
  margin:5px;
  background-color: #ffffff;
}
.content-box-item-2{
  width: 49%;
}
.content-box-item-num-6{
  text-align: left;
  display: inline-block;
  background-color: #ffffff;
  height:140px;
  margin:5px;
}

.content-box-item-num-6>img{
  padding:10px;
  float:left;
}
.content-box-item-num-6>div{
  padding-top:10px;
  width:80%;
  float:left
}
.content-box-item-num-6>div>h3{
	color: #141a24;
    font-size: 16px;
    font-weight: 500;
}
.content-box-item-num-6>div>p{
  padding-top:10px;
   color: #666;
    font-size: 14px;
    line-height: 24px;
}
.content-box-item-num-7{
  text-align: left;
  background-color:#ffffff;
  height:400px;
  margin:5px;
}
.content-box-item-num-7-left{
  width:25%;
  float:left;
}
.content-box-item-num-7-left>ul>.ul-left{ 
    padding: 20px 0 20px 56px;
    color: #333;
    font-size: 16px;
    border: 1px solid #e6e6e6;
    margin-top: -1px;
    margin-bottom: -1px;
    margin-left: -1px;
    font-weight: 400;
    cursor: pointer;
}
.content-box-item-num-7-left>ul>.ul-left-current{ 
    border-right-color: #FFF;
    border-left-color: #108cee;
    color: #108cee;
}
.content-box-item-num-7-left>ul>.ul-left-current-no{ 
  color: #333;
  border-left-color: #e6e6e6;
}
.content-box-item-num-7-right{
  width:70%;
  float:left;
  padding-left:25px;
}
.content-box-item-num-7-right p{
  align:left;
}
.content-box-item-num-7-right img{
  align:center;
}
.content-box-item-num-7-right>.div-right-current-no{
  display:none;
}
.content-box-item-num-7-right>.div-right-current{
  display:true;
}
.content-box-item-num-4{
  text-align: left;
  vertical-align: top;
  height:150px;
  margin:5px;
}
.content-box-item-num-5{
  text-align: center;
  vertical-align: middle;
  width: 20%;
  height: 250px;
  margin:5px;
  border: 1px solid #d2d2d2;
  background-color:#ffffff;
}
.content-box-item-num-5>img{
    margin-top:30px;
}
.content-box-item-num-5>button{
    margin-top:30px;
}

.content-box-item-num-4>div{
  margin-top:0px;
}
.content-body{

}
.content-top-text{
    padding: 50px;
    width:600px;
}

.square-image{
  width:70%;
  height:60%;
  background-color:red;
}
.content-title>h2{border-bottom:3px solid #2a89e0;margin-bottom:30px;display: inline-block;font-size: 20px;font-family: '微软雅黑';line-height: 35px;font-weight: 400}
.light-group{
  background-color: rgba(189, 230, 230, 0.18);
    padding-bottom :30px;
}
.dark-group{
  background-color: #e0f2f8;
  padding-bottom :30px;
}
.black-group{
  background-color: #0a2a53;
  padding-bottom :30px;
}
.black-group>div>h2{
  color: #ffffff;
}
.content-box-item-num-3 .top{
  width:100%;
  height:6px;
  background: #00c1de;
}
.c-title{
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    overflow: hidden;
    font-size: 16px;
    color: #373d41;
}
.t1 {
    font-weight: 600;
    margin-right: 5px;
}
.desc {
    font-family: Microsoft YaHei;
    font-size: 12px;
    color: #73777a;
    margin-top: 7px;
    height: 14px;
    line-height: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 22px;
}
.line {
    width: 98%;
    height: 1px;
    background: #d7d8d9;
    margin: 0 auto;
}
.how {
    width: 341px;
    height: 33px;
    margin: 0 auto;
    overflow: hidden;
    font-family: Microsoft YaHei;
    font-size: 0;
    color: #373d41;
    letter-spacing: 0;
    line-height: 28px;
    margin-bottom: 6px;
}
.tip_box {
    width: 341px;
    margin: 0 auto;
    font-family: Microsoft YaHei;
    font-size: 14px;
    color: #373d41;
    letter-spacing: 0;
    margin-bottom: 15px;
}
.tips {
    font-family: Microsoft YaHei;
    font-size: 12px;
    color: #73777a;
    margin: 15px auto 14px;
}
.h_list {
    font-size: 14px;
    display: inline-block;
    color: #373d41;
    transition: all .3s ease 0s;
}
.div-padding-10{
  padding:10px;
}
.tip-box>p{
   font-size: 14px;
  color: #373d41;
  transition: all .3s ease 0s;
}
.align-left{
  text-align: left;
}

</style>
