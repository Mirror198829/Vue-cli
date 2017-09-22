<template>
  <div>
    <main id="container">
      <div class="row">
        <br/>
        <span class="cloudcompute-title">
              <p >提供API托管服务，涵盖API发布、管理、运维、售卖的全生命周期管理。辅助用户简单、快速、低成本、低风险的实现微服务聚合、前后端分离、系统集成，向合作伙伴、开发者开放功能和数据。</p>
                致力于“让接口测试更简单”，通过为企业提供强大的API接口测试工具、网关方案以及API数据服务产品。</span>
        <div class="service clearfix">

          <div>

            <div class="row">
              <h3>API 测试</h3>
              <div class="proIntro clearfix">
                <div class="proDetail">
                  <p class="proTxt">
                    <span class="detailTxt1">实现API快速测试</span>
                    <span class="detailTxt2">根据文档自动生成校验数据</span>
                  </p>
                  <p class="proTxt">
                    <span class="detailTxt1">强大的Mock</span>
                    <span class="detailTxt2">支持跨域测试</span>
                  </p>
                  <p class="proTxt">
                    <span class="detailTxt1">实时输出、跟踪</span>
                    <span class="detailTxt2">日志服务实时（延迟< 3s）输出用户日志，你也可以实时跟踪自己的日志</span>
                  </p>
                </div>
                <img class="proImg" src="../../assets/images/api/4.png" />
              </div>
            </div>

            <div class="row">

            <h3>功能</h3>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="API 便捷管理" name="1">
                <div>覆盖 API 的定义、测试、发布的整个生命周期管理，便捷的日常管理、版本管理；</div>

              </el-collapse-item>
              <el-collapse-item title="请求管理" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              </el-collapse-item>
              <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
            </div>

            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>1
                  <i class="fa-user-o" >11122</i>
                  <span class="cloudcompute-title">解放生产力</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  解决 API 文档维护、SDK维护、API 版本管理等，降低日常维护成本。
                </li>
              </ul>
            </div>
            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>1
                  <i class="fa-user-o" >11122</i>
                  <span class="cloudcompute-title">只为实际服务付费</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  免费开通，免费进行API日常管理
                </li>
              </ul>
            </div>
            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>
                  <i class="fa-user-o" ></i>
                  <span class="cloudcompute-title">大规模且高性能</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  API分布式部署，自动扩展，承载大规模访问，低延迟处理
                </li>
              </ul>
            </div>
            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>1
                  <i class="fa-user-o" >11122</i>
                  <span class="cloudcompute-title">安全稳定</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  支持权限管理
                </li>
              </ul>
            </div>
            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>1
                  <i class="fa-user-o" >11122</i>
                  <span class="cloudcompute-title">支持在线、本地测试</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  测试更加灵活，敏捷，支持强大的参数构造器，无需针对接口编写测试程序。
                </li>
              </ul>
            </div>
            <div class="cloudcompute">
              <p class='cloudcompute-pre'>
                <a>1
                  <i class="fa-user-o" >11122</i>
                  <span class="cloudcompute-title">支持跨域测试</span>
                </a>
              </p>
              <ul class="cloudcompute-list">
                <li>
                  支持跨域测试，支持参数值和文件测试，接口是否正常运作。
                </li>
              </ul>
            </div>


          </div>



         <!-- <img class="serImg" src="../../assets/images/api/4.png">
          <img class="serImg" src="../../assets/images/api/3.png">-->

          <div class="row">
            <h3>服务管理</h3>
            <div class="row-container clearfix">
              <div class="row2-part" v-for='item in serviceManagementInfos'>
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





        <div class="row">
          <h3>API 变现</h3>
          <div class="proIntro clearfix">
            <div class="proDetail">
              <p class="proTxt">
                <span class="detailTxt1">实现API快速变现</span>
                <span class="detailTxt2">以 API 的形式开放能力、
            服务、数据供广大开发者采购使用，产生价值。</span>
              </p>
              <p class="proTxt">
                <span class="detailTxt1">强大的自由搜索、过滤功能</span>
                <span class="detailTxt2">在 API 市场，采购第三方成熟的能力和服务，
            避免平铺式开发，专注专业，借力发展。</span>
              </p>
              <p class="proTxt">
                <span class="detailTxt1">实时输出、跟踪</span>
                <span class="detailTxt2">日志服务实时（延迟< 3s）输出用户日志，你也可以实时跟踪自己的日志</span>
              </p>
            </div>
            <img class="proImg" src="../../assets/images/api/5.png" />
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
        carouselImgs: ['http://www.ctyun.cn/static/images/banner/2017082301.jpg', 'http://www.ctyun.cn/static/images/banner/2016030803.jpg', 'http://www.ctyun.cn/static/images/banner/2016030802.jpg'],
        serviceManagementInfos: [
          {'iconName': 'fa-cloud', 'title': '接口文档', 'info': '提供用于解决计算密集型、海量数据处理等业务的计算服务，帮助企业快速构建高性能计算的应用'},
          {'iconName': 'fa-eercast', 'title': '敏捷开发', 'info': '面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理'},
          {'iconName': 'fa-bandcamp', 'title': '自动测试', 'info': '为不同规模的企业客户提供灵活、可扩展和低成本的网站解决方案，帮助企业客户能够快速建站'},
          {'iconName': 'fa-podcast', 'title': 'restAPI', 'info': '面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理'},
          {'iconName': 'fa-window-restore', 'title': 'MOCK', 'info': '提供端到端解决方案，支持PC端、移动端、微信商城等多种部署模式，构建企业自有电商生态'}
        ]
      };
    },
    methods: {},
    mounted() {
      $("#box").click(function () {
        alert(123)
      })
    }
  }
</script>
<style scoped>
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
  /*主体区域*/
  #container {
    width: 1200px;
    margin: 20px auto;
  }

  .row {
    padding-bottom: 50px;
  }

  .row > h3 {
    border-bottom: 3px solid #2a89e0;
    margin-bottom: 30px;
    display: inline-block;
    font-size: 20px;
    font-family: '微软雅黑';
    line-height: 35px;
    font-weight: 400
  }

  .cloudcompute {
    width: calc(100% / 3);
    float: left;
  }

  .cloudcompute-pre {
    display: block;
  }

  .cloudcompute-title {
    display: block;
    margin: 10px 0;
    font-size: 18px;
    color: #333;
  }

  .cloudcompute-pre > a {
    display: block;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all .2s;
    top: 0;
  }

  .cloudcompute-pre > a:hover {
    top: -5px;
  }

  .cloudcompute-list {
    padding: 0 40px;
    color: #333;
    text-align: center
  }

  .cloudcompute-list > li {
    display: inline-block;
    font-size: 14px;
    line-height: 26px;
    color: #777;
    padding: 0 10px;
  }

  .line {
    color: #a3a3a3;
    line-height: 1.5
  }

  .cloudcompute-list a {
    text-decoration: none;
    color: #777;
  }

  .cloudcompute-list a:hover {
    color: #2a89e0;
  }

  .icon3 {
    background-position: -93px 0
  }

  .icon2 {
    background-position: -185px 0
  }

  .icon1 {
    background-position: -138px 0
  }

  /*服务管理区域*/
  .row2-part {
    width: calc((100% - 50px) / 5);
    margin: 0 5px;
    height: 380px;
    float: left;
    box-sizing: border-box;
    border: 1px solid #ccc;
    transition: all 0.3s;
    cursor: pointer;
  }

  .row2-part:hover {
    border-top: 4px solid #2a89e0;
  }

  .row2-part-content {
    padding: 0 20px;
    text-align: center;
    position: relative;
    transition: all .3s;
    top: 0;
  }

  .row2-part:hover .row2-part-content {
    top: -20px;
  }

  .row2-part:hover .row2-part-icon {
    color: #2a89e0;
  }

  .row2-part-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .row2-part-icon {
    font-size: 60px;
    margin-top: 50px;
    transition: all .3s;
    color: #777;
  }

  .row2-part-info {
    text-align: left;
    color: #777;
    height: 90px;
  }

  .row2-part-btn {
    width: 100px;
    text-align: center;
    line-height: 2;
    border: 1px solid transparent;
    font-size: 14px;
    color: transparent;
    margin: 0 auto;
    margin-top: 40px;
    transition: all .3s;
  }

  .row2-part-btn:hover {
    background-color: #2a89e0;
    color: #fff !important;
  }

  .row2-part:hover .row2-part-btn {
    color: #2a89e0;
    border: 1px solid #2a89e0;
  }
</style>
<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
