<template>
  <div>
    <div class="content-top">
      <div class="content-top-text" >
        <h1 class="col">{{h1Title}}</h1>
        <br/>
        <p class="col">{{description}}</p>
        <br/>
        <el-button type="success" @click="onCreate()">创建负载均衡</el-button>
        <el-button type="success" @click="monitorSet()">配置负载均衡</el-button>
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
                <img :src="item.imageUrl" style="width: 197px; height: 95.48px;"></img>
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
        <!--第七个结束，第八个开始-->
        <div v-if="module.displayType === 8">
          <div class="black-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box clearfix">
              <div class="content-box-item-4-min  content-box-item-num-8" v-for="item in module.items">
                <div>
                  <img :src="item.imageUrl"/>
                  <h4>{{item.title}}</h4>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--第八个结束-->
        <!--第八个结束，第九个开始-->
        <div v-if="module.displayType === 9">
          <div class="light-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box  content-box-bg clearfix">
              <div class="content-box-item-num-9 clearfix" v-for="item in module.items">
                <div class="content-box-item-num-9-left clearfix">
                  <img :src="item.imageUrl"/>
                  <h4>{{item.title}}</h4>
                </div>
                <div class="content-box-item-num-9-right">
                  <p v-for="item1 in item.contents">{{item1}}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!--第九个结束-->

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
        h1Title: "负载均衡",
        description: "负载均衡是对集群中的容器实例进行流量分发的服务。通过负载均衡功能，你可以扩展应用集群对外的服务能力，提高应用的可用性。",
        modules: [{
          title: "产品优势",
          items: [{
            imageUrl: fun1,
            title:"BGP 网卡带宽，专线",
            contents: ["所有经过负载均衡的流量有独立的 BGP 外网入口，提供高性能，跨网络（电信，联通）的网络服务。"]
          }, {
            imageUrl: fun2,
            title:"虚拟化层资源隔离",
            contents: ["不同负载均衡实例之间通过虚拟化技术实现了资源隔离，单个实例负载过高不会影响到其他实例。"]
          }, {
            imageUrl: fun3,
            title:"高可用",
            contents: ["负载均衡实例在发生异常时，会自动重建，保证用户集群的可靠性。"]
          }, {
            imageUrl: fun4,
            title:"可伸缩",
            contents: ["支持在线扩容，可以根据需求在线调整实例规格，在不影响服务的情况下实现集群的扩容/缩容。"]
          }],
          displayType: 9
        },
          {
            title: "应用场景",
            items: [{
              imageUrl: fun1,
              title:"移动云",
              content: "打通开发与运维流程，用DevOps流水线快速构建应用，自动化部署，让业务敏捷灵活的面对市场快速变化下的挑战。"
            }, {
              imageUrl: fun2,
              title:"政务云",
              content: "私有云+公有云解决方案，应对政务数据量大、分布散，查询难等复杂环境，打通管理层与业务系统，安全、便捷的实现数字化的管理和运营。。"
            }, {
              imageUrl: fun3,
              title:"物联网",
              content: "提供标准化，多语言的解决方案，依托多年的软硬件技术积累，实现物与网的极速高性能的互通。"
            }, {
              imageUrl: fun4,
              title:"企业应用",
              content: "通过微服务等开源框架及中间件，改进应用架构设计，提高开发运维效率。"
            }],
            displayType: 8
          },
          {
            title:"使用指南",
            displayType: 4,
            items:[
              {
                title:"新手入门",
                items:["新手必看","实战教程"]
              },
              {
                title:"常见问题",
                items:["什么是亲和与反亲和？","什么是调度策略？"]
              },
              {
                title:"技术文档",
                items:["微服务云应用平台开发指南","微服务云应用平台用户指南"]
              }
            ]
          }
        ]
      };
    },
    methods: {
      onCreate(event){
        console.log(event);
        this.$router.push({ name: 'CreateLoadBlance'});
      },
      monitorSet(event){
        this.$router.push({name:'MonitorSet'})
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
    background: #4b5154   url('../../../assets/images/applicationManagement/microServiceApply/main-bg.jpg') 85% 50%  no-repeat;
  }
  .content-title{
    text-align:left;
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
    width:92%;
  }
  .content-box-bg{
    background-color:#ffffff;
  }
  .content-box-item-3{
    display: inline-block;
    width: 32%;
  }
  .content-box-item-4{
    display: inline-block;
    width: 24%;
  }
  .content-box-item-4-min{
    width: 21%;
    margin:20px 2%;
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
  .content-box-item-num-8{
    background-color:#ffffff;
    float:left;
  }
  .content-box-item-num-8>div{
    height: 330px;
    padding: 20px 40px;
    text-align: center;

  }
  .content-box-item-num-8>div>img{
    text-align: center;
    margin: 0 auto 5px;
  }
  .content-box-item-num-8>div>h4{
    color: #666;
    line-height: 1.25;
    font-size: 16px;
    margin: 15px 0 5px;
    text-align: center;
    padding-bottom: 10px;
  }
  .content-box-item-num-8>div>p{
    font-size: 14px;
    color: #666;
    line-height: 22px;
    text-align: left;
  }
  .content-box-item-num-9{
    padding:10px;
  }
  .content-box-item-num-9-left{
    width:28%;
    float:left;

  }
  .content-box-item-num-9-right{
    width:70%;
    float:left;
    text-align: left;
  }
  .content-box-item-num-9-left>img{
    float:left;
  }
  .content-box-item-num-9-left>h4{
    float:left;
    margin-left: 20px;
    margin-top: 20px;
    color: #666;
    line-height: 1.25;
    font-size: 16px;
    padding-bottom: 10px;
  }
  .content-box-item-num-9-right>p{
    font-size: 14px;
    color: #666;
    line-height: 22px;
    text-align: left;
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
    height: 112px;
    margin:5px;
    border: 1px solid #d2d2d2;
    background-color:#ffffff;
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
    text-align:center;
  }
  .dark-group{
    background-color: #e0f2f8;
    padding-bottom :30px;
    text-align:center;
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
