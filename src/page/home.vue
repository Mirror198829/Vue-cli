<template>
  <div>
      <el-carousel height="350px">
        <el-carousel-item v-for="item in banners" :key="item">
          <div class="banner" :class="item"></div>
        </el-carousel-item>
      </el-carousel>
      <main id="container">
          <!-- 云计算 -->
          <div class="row" style="background-color:#fff">
            <div class="content-wrap">
               <h3>云计算</h3>
               <div class="row-container clearfix">
                    <div class="cloudcompute">
                        <p class='cloudcompute-pre'>
                          <a>
                            <i class="cloudcompute-icon icon1"></i>
                            <span class="cloudcompute-title">计算</span>
                          </a>
                        </p>
                        <ul class="cloudcompute-list">
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">物理机环境</router-link>
                            </li>
                            <span class="line">|</span>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">虚拟机环境</router-link>
                            </li>
                            <span class="line">|</span>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">K8S容器环境</router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">MESOS环境</router-link>
                            </li>
                            <span class="line">|</span>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">YARN环境</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="cloudcompute">
                        <p class='cloudcompute-pre'>
                          <a>
                            <i class="cloudcompute-icon icon2"></i>
                            <span class="cloudcompute-title">存储</span>
                          </a>
                        </p>
                        <ul class="cloudcompute-list">
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">对象存储</router-link>
                            </li>
                            <span class="line">|</span>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">块存储</router-link>
                            </li>
                            <span class="line">|</span>
                            <li>
                              <router-link :to="{name: 'PhysicaMachineEnv'}">共享存储</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="cloudcompute">
                        <p class='cloudcompute-pre'>
                          <a>
                            <i class="cloudcompute-icon icon3"></i>
                            <span class="cloudcompute-title">网络</span>
                          </a>
                        </p>
                        <ul class="cloudcompute-list">
                            <li>
                                提供大数据应用所需的计算、存储资源和数据汇集、处理、展现等服务
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
          </div>
          <!-- 服务管理 -->
          <div class="row" style="background-color:#f7f7f7">
            <div class="content-wrap">
               <h3>服务管理</h3>
               <div class="row-container" style="background-color:#fff"  @mouseover="clearTimer()" @mouseout="startTimer()">
                    <ul class="tab-nav clearfix">
                        <li class="tab-nav-item pull-left" v-for="(item,key) in serviceInfos" :class="{ active: key ==isActiveKey}"  @click="isActiveKey = key">
                          <span class="tab-nav-item-title">{{item.tabTitle}}</span>
                        </li>
                    </ul>
                    
                    <transition-group name="slide-fade" tag="ul" class="tab-content">
                        <li class="introduction" v-for="(item,key) in serviceInfos" :key="key" v-show="key == isActiveKey">
                          <div class="introduce-top clearfix">
                            <div class="introduce-img-wrap pull-left" :class="item.icon"></div>
                            <div class="introduce-content-wrap pull-right">
                               <h3 class="introduce-content-title">{{item.tabTitle}}</h3>
                               <p class='introduce-content-detail'>{{item.detail}}</p>
                               <div>
                                 <a class="introduce-link" href="#">查看详情></a>
                               </div>
                            </div>
                          </div>                       
                          
                          <ul class="introduce-list">
                            <li v-for='(value,key) in item.submenus' class="introduice-list-item clearfix">
                                  <div class="introduce-list-item-img pull-left" :class="value.img"></div>
                                  <div class="introduce-list-item-content pull-left">
                                      <h4>{{value.title}}</h4>
                                      <p>{{value.detail}}</p>
                                  </div>
                            </li>                          
                          
                        </ul>
                        </li>
                      </transition-group>
                   
               </div>
            </div>
          </div>
          <!-- API管理 -->
          <div class="row" style="background-color:#fff">
            <div class="content-wrap">
               <h3>API管理</h3>
               <div class="row-container" id="apiWrap">
                    <div class="api-item" v-for="(item,key) in apiArr">
                        <div class="api-img" :class="item.img"></div>
                        <h4 class="api-title">{{item.title}}</h4>
                        <p class="api-detail">{{item.detail}}</p>
                    </div>
               </div>
            </div>
          </div>
          <!-- 应用管理 -->
          <div class="row" style="background-color:#3b4560">
            <div class="content-wrap  applicationBg">
               <h3 style="color:#fff">应用管理</h3>
               <div class="row-container clearfix">
                    <div class="row2-part" v-for='item in applicationManagementInfos'>
                        <div class="row2-part-content">
                            <i class="fa row2-part-icon" :class='item.iconName'></i>
                            <p class="row2-part-title">{{item.title}}</p>
                            <p class="row2-part-info">{{item.info}}</p>
                            <div class="row2-part-btn">
                                查看详情
                            </div>
                        </div>                      
                    </div>
               </div>
            </div>
          </div>
          <!-- 解决方案 -->
          <div class="row">
            <div class="content-wrap">
               <h3>解决方案</h3>
               <div class="row-container clearfix">
                    <div class="row3-part" v-for="item in solutionInfos">
                        <div class="row3-part-content">
                            <h4>{{item.title}}</h4>
                            <a class="knowmore">了解详情 <i class='fa fa-arrow-circle-o-right'></i></a>
                            <p class="row3-part-detail">
                              {{item.detail}}
                            </p>
                            <div class="row3-detail">
                                <div class="row3-detail-item" v-for="value in item.infos">
                                    <div class="row3-detail-img" :class="value.className"></div>
                                   <p class="row3-detail-title">{{value.title}}</p>
                                   <p class="row3-detail-txt">{{value.detail}}</p>
                                </div>
                            </div>
                        </div>                      
                    </div>
               </div>
            </div>
          </div>

          <!-- 镜像与资产市场 -->
          <div class="row"  style="background-color:#f7f7f7">
            <div class="content-wrap">
               <h3>镜像与资产市场</h3>
               <div class="row-container">
                    <ul id="mirror-list">
                      <li class="mirror-item" v-for='item in mirrors'>
                          <div class="mirror-img" :class="item.position"></div>
                          <h1 class="mirror-title">{{item.title}}</h1>
                          <p class="mirror-info">{{item.info}}</p>
                      </li>
                    </ul>
               </div>
            </div>
          </div>
      </main>
  </div>
</template>



<script>


export default {
  name: 'app',
  data() {
    return {
       banners:['banner1','banner2'],
       applicationManagementInfos:[
          {'iconName':'fa-cloud','title':'微服务应用','info':'提供用于解决计算密集型、海量数据处理等业务的计算服务，帮助企业快速构建高性能计算的应用'},
          {'iconName':'fa-eercast','title':'流程调度应用','info':'面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理'},
          {'iconName':'fa-bandcamp','title':'批处理应用','info':'为不同规模的企业客户提供灵活、可扩展和低成本的网站解决方案，帮助企业客户能够快速建站'},
          {'iconName':'fa-podcast','title':'普通应用','info':'面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理'}
        ],
        solutionInfos:[
          {'title':'大数据解决方案',
           'detail':'提供基础环境、安全加固镜像，实现应用环境的快速部署',
           'infos':[
              {'title':'公安安防','detail':'助您快速配置并优化开发后台','className':'imgShow1'},
              {'title':'医疗','detail':'依托京东云技术的解决方案','className':'imgShow2'}
          ]},
          {'title':'BOSS解决方案',
           'detail':'提供基础环境、安全加固镜像，实现应用环境的快速部署',
           'infos':[
              {'title':'物联网计费','detail':'助您快速配置并优化开发后台','className':'imgShow3'},
              {'title':'在线计费','detail':'依托京东云技术的解决方案','className':'imgShow4'}
          ]

          }
        ],
        mirrors:[
          {'title':'基础镜像','info':'基于高品质的IaaS基础设施，由ctyun提供稳定的、高性能的云主机、云存储等云服务产品','position':'positionImg1'},
          {'title':'数据库镜像','info':'对于年度评选出的优质行业应用，即可对接省、地、市级电信渠道，同享推广资源','position':'positionImg2'},
          {'title':'缓存镜像','info':'引入SDN解决方案，为用户提供VPC服务，用户可以创建100%二层隔离的子网，搭建自己的私有云环境；同时提供多种安全服务产品，轻松帮助用户应对各种攻击、安全漏洞等问题，保证云服务的正常运行。','position':'positionImg3'}
        ],
        serviceInfos:[
          {'tabTitle':'中间件服务','icon':'serviceIcon1','detail':'利用简单灵活的配置，轻松构建从智能硬件、智能家居，到车联网、工业4.0、零售O2O，再到智慧农业、智慧城市等各类物联网应用，加速各传统行业科技创新和产业升级连接互通，海量存储，洞察创新，物云一体。','submenus':[
              {'title':'应用中间件','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg1'},
              {'title':'消息中间件','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg6'},
              {'title':'负载均衡','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg3'},
              {'title':'规则引擎','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg8'}             
            ]},
          {'tabTitle':'数据库服务','icon':'serviceIcon2','detail':'数据是重要的战略性资产。每时每刻客户和设备都在产生海量数据，只有获取数据并进行分析才能创造新价值，带来新体验。天算是百度云提供的智能大数据平台，提供了完备的大数据托管服务、智能服务以及众多解决方案，帮助用户实现智能业务，引领未来。','submenus':[
              {'title':'分布式缓存','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg5'},
              {'title':'关系数据库','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg2'},
              {'title':'分布式内存库','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg7'},
              {'title':'NOSQL','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg4'}
            ]},
          {'tabTitle':'大数据服务','icon':'serviceIcon3','detail':'天像是百度云提供的音视频、图像和文档等智能多媒体服务平台，全面整合百度在视觉领域的人工智能优势，开放百度内容生态，助力企业轻松搭建智能多媒体应用。','submenus':[
              {'title':'批处理引擎','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg1'},
              {'title':'流处理引擎','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg5'},
              {'title':'数据挖掘','detail':'灵活组合大数据服务、智能服务，搭建生命科学、数字营销','img':'serviceImg3'}
            ]}
        ],
        apiArr:[
          {'title':'API注册','img':'apiImg1','detail':'用户信用分值评估、号码状态核查和用户身份验证'},
          {'title':'API测试','img':'apiImg2','detail':'精准用户画像、网络行为分析、竞品分析及标签服务'},
          {'title':'API','img':'apiImg3','detail':'提供基于电信及互联网数据的各行业多类别的评估报告及专业咨询服务'}
        ],
        isActiveKey:0,
        timer:null
    };
  },
  methods: {
    clearTimer(){
      clearInterval(this.timer)
    },
    startTimer(){
      this.timer=setInterval(()=>{
        if(this.isActiveKey == (this.serviceInfos.length-1)){
          this.isActiveKey =0
        }else{
          this.isActiveKey++
        }      
      },2000)
    }
  },
  created(){
    this.startTimer()
  },
  mounted(){
    
  }
}
</script>
<style scoped>
      /* 轮播头图 */
      .banner{width: 100%;height:100%;background-repeat: no-repeat;background-position: center center;background-size:100% 100%;filter: grayscale(50%);}
      .banner1{background-image:url('../assets/home/navBg1.png');background-color: #2ba5d4 }
      .banner2{background-image:url('../assets/home/navBg2.png');background-color: #2ca3d4}
      /*.banner3{background-image:url('../assets/home/banner-3.png');background-color: #1cb9d5 }*/
      /* api管理 */
      #apiWrap{display: flex;justify-content:space-around;}
      .api-item{padding:20px 30px;border:1px solid #ddd;transition: all .3s}
      .api-item:hover{border-color:#2a89e0;}
      .api-img{width: 119px;height: 119px;margin:0 auto;}
      .api-title{font-size: 20px;line-height: 36px;margin:9px 0;font-weight: 400;text-align: center;}
      .api-detail{width: 280px;text-align: center;color:#777;line-height: 24px;font-size: 14px;}
      .apiImg1{background:url('../assets/home/home-bigdata-icon2.gif')}
      .apiImg2{background:url('../assets/home/home-bigdata-icon3.gif')}
      .apiImg3{background: url('../assets/home/home-bigdata-icon4.gif')}
      /*tab切换,service服务*/
      .tab-content{border:solid #eee;border-width: 0 1px 1px 1px;position: relative;height: 340px}
      .tab-nav{border:1px solid #eee}
      .tab-nav,.tab-content{padding:0 30px;}
      .tab-nav-item{width: calc(100% / 3);float:left;text-align: center;box-sizing: border-box;height: 60;line-height: 60px;cursor: pointer}
      .tab-nav-item-title{border-bottom:2px solid transparent;transition:all .3s;color:#666;}
      .tab-nav-item:hover .tab-nav-item-title{border-bottom:2px solid rgba(42,134,227,0.7);}
      .tab-nav-item-title{display: block;width: 90%;height: 100%}
      .tab-nav-item.active .tab-nav-item-title{border-bottom:2px solid #2a89e0;color:#2a89e0;}
      .introduce-img-wrap{background:url('../assets/home/service.png');width:400px;height: 190px;}
      .serviceIcon1{background-position: 0 0}
      .serviceIcon2{background-position: 0 -600px}
      .serviceIcon3{background-position: 0 -1760px}
      .introduce-content-wrap{width: 700px;height: 190px;padding-top:30px;position: relative;box-sizing: border-box;}
      .introduce-content-title{font-size: 24px;line-height: 36px;color:#333;margin-bottom:15px;font-weight: 400;}
      .introduce-content-detail{font-size: 14px;line-height: 24px;color:#626262;}
      .introduce-link{color:#0b83e1;font-size: 14px;position: absolute;bottom:0;}
      .introduce-link:hover{text-decoration: underline;}
      .introduction{position: absolute;}
      /* .introduction{display: none;} 
      .introduction.active{display: block}*/
      .introduce-list{display: flex;justify-content:space-around;}
      .introduice-list-item{height: 150px;box-sizing: border-box;padding-top:40px;}
      .introduce-list-item-img{width: 60px;height: 60px;background:url('../assets/home/icons-60_6a9d6a3b.png') 0 0px no-repeat;}
      .serviceImg1{background-position: 0 -130px;}
      .serviceImg2{background-position: 0 -65px;}
      .serviceImg3{background-position: 0 0px;}
      .serviceImg4{background-position: 0 -195px;}
      .serviceImg5{background-position: -455px -65px;}
      .serviceImg6{background-position: -455px -130px;}
      .serviceImg7{background-position: -455px -0px;}
      .serviceImg8{background-position: -455px -195px;}
      .introduce-list-item-content{margin-left:20px;}
      .introduce-list-item-content>h4{color:#333;font-size:16px;font-weight: 400}
      .introduce-list-item-content>p{line-height: 25px;font-size: 13px;color:#777;width: 150px;height: 50px;overflow: hidden;}
      .slide-fade-enter-active {transition: all 1s ease;}
      .slide-fade-leave-active {transition: all .7s ease;}
      .slide-fade-enter, .slide-fade-leave-to{opacity: 0;}

     /*镜像管理*/
     #mirror-list{display: flex;justify-content:space-between;}
     .mirror-item{width: calc(100% / 3);text-align: center;padding:15px 20px;}
     .mirror-info{line-height: 24px;color:#777;font-size: 14px}
     .mirror-title{font-size: 18px;line-height: 36px;color:#333;font-weight: 400}
     .mirror-img{width: 80px;height: 80px;margin:0 auto;background:url('../assets/home/home-showpro.png');margin-bottom:10px;}
     .positionImg1{background-position: 0 -540px;}
     .positionImg2{background-position: 0 -630px;}
     .positionImg3{background-position: 0 -1260px;}

    /*解决方案*/
    .row3-part{width: calc(100% / 2);float: left;box-sizing: border-box;position: relative;padding-right:20px;}
    .row3-part-detail{font-size: 13px;color:#666;line-height: 18px;margin:10px 0;}
    .knowmore{color:#2a89e0;position: absolute;right:20px;font-size: 13px;top:2px;cursor: pointer;}
    .knowmore:hover{text-decoration: underline;}
    .row3-detail{display: flex;justify-content:space-between;}
    .row3-detail-item{width: calc((100% - 20px) / 2);border:1px solid #ddd;box-sizing: border-box;padding:15px;text-align: center;height: 167px;}
    .row3-detail-item:hover{border-color:#2a89e0;}
    .row3-detail-item:hover .row3-detail-img{transform: scale(1.2);}
    .row3-detail-item:hover .row3-detail-title{transform: scale(1.2);}
    .row3-detail-img{width: 80px;height: 80px;margin:0 auto;background:url('../assets/home/home-showpro.png') no-repeat;transition: all .5s}
    .imgShow1{background-position: 0 -1180px}
    .imgShow2{background-position: 0 -90px}
    .imgShow3{background-position: 0 -180px}
    .imgShow4{background-position: 0 -1444px}
    .row3-detail-title{margin-top:10px;transition: all .5s}
    .row3-detail-txt{color:#777;font-size: 13px;margin-top:10px;}
    /*应用管理*/
    .applicationBg{background:url('../assets/home/bg-m-main3.jpg') center center no-repeat;}
    /*主体区域*/   
   .row{padding-top:20px;padding-bottom:40px;}
   .content-wrap{width: 1200px;margin:0 auto;} 
   .content-wrap>h3{border-bottom:3px solid #2a89e0;margin-bottom:30px;display: inline-block;font-size: 20px;font-family: '微软雅黑';line-height: 35px;font-weight: 400}
   .cloudcompute{width: calc(100% / 3);float: left;}
   .cloudcompute-pre{display: block;}
   .cloudcompute-icon{background: url('../assets/home/home-showpro.png') center center no-repeat;width: 80px;height: 80px;display: block;margin:0 auto;}
   .cloudcompute-title{display: block;margin:10px 0;font-size: 18px;color:#333;}
   .cloudcompute-pre>a{display: block;text-align: center;cursor: pointer;position: relative;transition: all .2s;top:0;}
   .cloudcompute-pre>a:hover{top:-5px;}
   .cloudcompute-list{padding:0 40px;color:#333;text-align: center}
   .cloudcompute-list>li{display: inline-block;font-size: 14px;line-height:26px;color:#777;padding:0 10px;}
   .line{color:#a3a3a3;line-height: 1.5}
   .cloudcompute-list a{text-decoration: none;color:#777;}
   .cloudcompute-list a:hover{color:#2a89e0;}
   .icon3{background-position: 0 -905px}
   .icon2{background-position: 0 -450px}
   .icon1{background-position: 0 -815px}
   /*服务管理区域*/
   .row2-part{width: calc((100% - 40px) / 4);margin:0 5px;height:350px;float: left;box-sizing: border-box;border:1px solid #ccc;transition: all 0.3s;background-color: rgba(255,255,255,0.8)}
   .row2-part:hover{border-top:4px solid #2a89e0;background-color: rgba(255,255,255,0.9)}
   .row2-part-content{padding:0 20px;text-align: center;position: relative;transition: all .3s;top:0;}
   .row2-part:hover .row2-part-content{top:-20px;}
   .row2-part:hover .row2-part-icon{color:#2a89e0;}
   .row2-part-title{font-size: 18px;color:#333;margin-bottom:20px;margin-top:20px;}
   .row2-part-icon{font-size: 60px;margin-top:50px;transition: all .3s;color:#8ec31f;}
   .row2-part-info{text-align: left;color:#777;height: 90px;}
   .row2-part-btn{width: 100px;text-align: center;line-height: 2;border: 1px solid transparent;font-size: 14px;color:transparent;margin:0 auto;margin-top:40px;transition: all .3s;cursor: pointer;}
   .row2-part:hover .row2-part-btn{color:#fff;border: 1px solid #2a89e0;background-color: #2a89e0;} 
</style>
<style>
  .el-carousel__item:nth-child(2n) {background-color: #99a9bf;}  
  .el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}

</style>

