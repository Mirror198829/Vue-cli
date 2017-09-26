<template>
  <div>
    <div class="logBox">
      <div class="service clearfix">
        <div class="serviceTxt">
          <p class="serTitle">
            <i class="fa fa-cogs" aria-hidden="true"></i>
            <span>交通大数据</span>
          </p>
          <p class="serIntro">互联网 + 智慧交通 共建交通大数据生态</p>
        </div>

        <!--<img class="serImg" src="../../../assets/images/traffic/1.png">-->
        <template>
          <el-carousel :interval="4000" type="card" height="250px" >
            <el-carousel-item v-for="item in carouselImgs" :key="item">
              <img :src='item'/>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="productAdvantage">
        <p class="proTitle">产品优势</p>
        <div class="proIntro clearfix">
          <div class="proDetail">
            <p class="proTxt">
              <span class="detailTxt1">  大数据决策研判分析</span>
              <span class="detailTxt2">  ● 实时路况监测，深度拥堵研判
  ● 海量人群出行轨迹分析
  ● 可视化大屏展现</span>
            </p>
            <p class="proTxt">
              <span class="detailTxt1">  大数据决策研判分析</span>
              <span class="detailTxt2">  ● 实时路况监测，深度拥堵研判
  ● 海量人群出行轨迹分析
  ● 可视化大屏展现</span>
            </p>
            <p class="proTxt">
              <span class="detailTxt1">  大数据决策研判分析</span>
              <span class="detailTxt2">  ● 实时路况监测，深度拥堵研判
  ● 海量人群出行轨迹分析
  ● 可视化大屏展现</span>
            </p>

          </div>
          <img class="proImg" src="../../../assets/images/traffic/3.png" />
        </div>
      </div>


      <div class="function">
        <p class="funTitle">功能特点</p>
        <div class="funIntro clearfix">
          <div class="funList">
            <ul>
              <li class="listFirst listLi1">01 大数据决策研判分析</li>
              <li class="listLi2">02 交通信息化建设支持</li>
              <li class="listLi3">03 共建出行服务，惠及亿万公众</li>
            </ul>
          </div>
          <div class="funDetail funDetail1">
            <p>大数据决策研判分析。</p>
            <img src="../../../assets/images/traffic/2.png">
          </div>
          <div class="funDetail funDetail2" style="display: none;">
            <p>交通信息化建设支持。</p>
            <img src="../../../assets/images/traffic/3.png">
          </div>
          <div class="funDetail funDetail3" style="display: none;">
            <p>共建出行服务，惠及亿万公众。</p>
            <img src="../../../assets/images/traffic/4.png">
          </div>


        </div>
      </div>




    </div>
  </div>
</template>

<script>
  const banner1=require('../../../assets/images/traffic/2.png');
  const banner2=require('../../../assets/images/traffic/3.png');
  const banner3=require('../../../assets/images/traffic/4.png');
  export default {
    data() {
      return {
        carouselImgs: [banner1, banner2,banner3],
        serviceManagementInfos: [
          {'iconName': 'fa-cloud', 'title': 'JAVA运行环境', 'info': 'Java运行时环境，快速部署Java应用'},
          {'iconName': 'fa-eercast', 'title': 'tomcat', 'info': '面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理'},
          {'iconName': 'fa-bandcamp', 'title': 'mysql', 'info': 'Docker Official Tomcat镜像，帮助企业客户能够快速建站'},
          {'iconName': 'fa-podcast', 'title': 'PHP运行环境', 'info': '集成软件：Apache+PHP5.2+mysql5.1+FTP+PHPmyadmin+zend'},
          {'iconName': 'fa-window-restore', 'title': 'centos7', 'info': 'Build from centos,Simple CentOS docker'},
          {'iconName': 'fa-bandcamp', 'title': '安全加固运行环境', 'info': '通过将LINUX安全狗服务器版应用于天翼云云主机，实现云主机的全面防护'},
          {'iconName': 'fa-podcast', 'title': 'ubuntun', 'info': '通过将LINUX安全狗服务器版应用于天翼云云主机，实现云主机的全面防护'},

        ]
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
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

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

