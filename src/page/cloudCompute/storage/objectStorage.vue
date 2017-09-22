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
          <div v-if="module.displayType === 1">
            <div class="dark-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-3 content-box-item-num-2" v-for="item in module.items">
                   <img :src="item.imageUrl"></img>
                     <br/>
                    <p v-for="content in item.contents">{{content}}</p>
                 </div>
               </div>
            </div>
         </div>
        <div v-if="module.displayType === 2">
             <div class="light-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-2" v-for="item in module.items">
                   <img :src="item.imageUrl"></img>
                   <div>
                     <h3>{{item.title}}</h3>
                     <p>{{item.content}}</p>
                   </div>
                 </div>
               </div>
            </div>
        </div>
        <div v-if="module.displayType === 3">
            <div class="black-group">
               <div class="content-title">
                  <h2>{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-3 content-box-item-num-3" v-for="item in module.items">
                  <p class="top"></p>
                    <div class="div-padding-10">
                       <p class="c_title">
                        <span class="t1">{{item.title}}</span>
                        <span class="ten">{{item.enTitle}}</span>
                      </p>
                      <p class="desc">{{item.description}}</p>
                      <p class="line"></p>
                      <div  v-for="(item1,index) in item.items">
                       <p class="tips">{{item1.title}}</p>
                          <div v-if="index===0" >
                            <div class="tip-box" style="height:84px;overflow:hidden;">
                              <p v-for="item2 in item1.items">
                                <img  :src="module.imageUrl">
                                {{item2}}
                              </p>
                            </div>
                          </div>
                          <div v-if="index===1" >
                            <span class="h_list" v-if="idx===0" v-for="(item2 ,idx) in item1.items">{{item2}} </span>
                            <span class="h_list" v-if="!idx==0" v-for="(item2 ,idx) in item1.items"> | {{item2}}</span>
                          </div>
                        </div>
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


      </div>
     </div>

   </div>

</template>

<script>
  const objectMain=require('../../../assets/images/cloudCompute/storage/objectStorage/obj-main.jpg')
  const iconadv1=require('../../../assets/images/cloudCompute/storage/objectStorage/icon-adv-1.png')
const iconadv2=require('../../../assets/images/cloudCompute/storage/objectStorage/icon-adv-2.png')
const iconadv3=require('../../../assets/images/cloudCompute/storage/objectStorage/icon-adv-3.png')
const prodAdvantage1=require('../../../assets/images/cloudCompute/storage/objectStorage/prodAdvantage1.png')
const prodAdvantage2=require('../../../assets/images/cloudCompute/storage/objectStorage/prodAdvantage2.png')
const prodAdvantage3=require('../../../assets/images/cloudCompute/storage/objectStorage/prodAdvantage3.png')
const prodAdvantage4=require('../../../assets/images/cloudCompute/storage/objectStorage/prodAdvantage4.png')
const right=require('../../../assets/images/cloudCompute/storage/objectStorage/right.png')
export default {
  data() {
    return {
      h1Title: "对象存储",
      description: "提供稳定、安全、高效、高可扩展的云存储服务。您可以将任意数量和形式的非结构化数据存入BOS，" +
      "并对数据进行管理和处理。BOS支持标准、低频、冷存储等多种存储类型，满足您各类场景的存储需求。",
      modules: [
        {
          title: "使用场景",
          items: [{
            imageUrl: iconadv1,
            contents: ["海量高并发内容分发", "存储系统被压垮"]
          }, {
            imageUrl: iconadv2,
            contents: ["定额扩容效率低", "无法满足业务弹性需求"]
          }, {
            imageUrl: iconadv3,
            contents: ["单一储存级别", "难以兼顾性能和成本"]
          }],
          displayType: 1
        },
        {
          title: "优势",
          items: [{
            imageUrl: prodAdvantage1,
            title:"稳定性",
            content: "BOS支撑了国内最大网盘（百度网盘）近千PB用户数据的存储。"
          }, {
            imageUrl: prodAdvantage2,
            title:"安全性",
            content: "BOS连续2年通过可信云认证，让您更放心地存储关键数据。"
          }, {
            imageUrl: prodAdvantage3,
            title:"低成本",
            content: "分级存储+生命周期管理，让您的存储成本更低。"
          }, {
            imageUrl: prodAdvantage4,
            title:"处理框架",
            content: "存储+计算框架让数据加上“动力”引擎。"
          }],
          displayType: 2
        },
        {
          title :"存储类型",
          displayType:3,
          imageUrl:right,
          items:[
            {
              title:"标准类型",
              enTitle:"Standard",
              description:"高性能、高可靠、高可用的对象存储服务",
              items:[
                {
                  title:"特性：",
                  items:['吞吐量大，热点文件、需要频繁访问的业务场景',
                          '持久性：99.99999999%',
                          '最低存储时间：无']
                },{
                  "title":"使用场景：",
                  "items":["移动应用","大型网站","图片分享","热点音视频"]
                }
              ]
            },
             {
              title:"低频访问类型",
              enTitle:"Infrequent Access",
              description:"较低存储成本和实时访问特性的对象存储服务",
              items:[
                {
                  title:"特性：",
                  items:['数据访问实时，读取频率较低的业务场景',
                          '持久性：99.99999999%',
                          '最低存储时间：30天']
                },{
                  "title":"使用场景：",
                  "items":["移动设备","应用与企业数据备份","监控数据","网盘应用"]
                }
              ]
            },{
              title:"归档类型",
              enTitle:"Archive",
              description:"归档数据的长期存储，存储单价最低",
              items:[
                {
                  title:"特性：",
                  items:['数据恢复有等待时间，数据有存储时长要求',
                          '持久性：99.99999999%',
                          '最低存储时间：60天']
                },{
                  "title":"使用场景：",
                  "items":["各种长期保存的档案数据","医疗影像","影视素材"]
                }
              ]
            }
          ]
        },{
          title:"使用指南",
          displayType: 4,
          items:[
            {
              title:"新手指南",
              items:["BOS简介","分级存储","图片处理服务","入门指南"]
            },
             {
              title:"操作指南",
              items:["绑定Bucket域名","更新Bucket权限","管理ACCESSKEY","开启CDN加速"]
            },
             {
              title:"最佳实践",
              items:["业务迁移到BOS","HTTPS加密传输","Web端直传","手机美图APP"]
            },
             {
              title:"常见问题",
              items:["如何实现线上数据热迁移？","如何使用低频BOS？","用户可以在BOS上存储多少数据？","欠费后数据会丢失吗？","如何进行大文件上传？","数据在BOS上是否会丢失或损坏？"]
            }
          ]
        }
      ]
    };
  },
  methods: {

  }
}
</script>

<style scoped>
.content-top{
  height: 350px;
  background: #4b5154  url('../../../assets/images/cloudCompute/storage/objectStorage/obj-main.jpg') 85% 50%  no-repeat;
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
  text-align: left;
  display: inline-block;
  width: 49%;
  background-color: #ffffff;
  height:80px;
  margin:5px;
}
.content-box-item-2>img{
  padding:10px;
  float:left
}
.content-box-item-2>div{
  padding-top:10px;
  float:left
}
.content-box-item-2>div>p{
  padding-top:10px;
  float:left
}
.content-box-item-num-4{
  text-align: left;
  vertical-align: top;
  height:150px;
  margin:5px;
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
