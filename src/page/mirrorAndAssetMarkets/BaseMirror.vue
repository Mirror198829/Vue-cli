<template>


  <div>

    <div class="search" style="height:200px;width: 100%;background:#4b5154">
      <form id="searchForm" >
        <div >
          <div ><p style="margin-left: 39%;margin-top: 5%;margin-bottom: 1%;color:#fff;">汇聚国内外优秀的Docker镜像</p>
            <span class="ant-input-group">
              <span class="ant-input-wrapper">
                <input type="text" style="height:30px;width: 600px; margin-left: 28%;padding-left:15px;" placeholder="搜索镜像" id="bgSearch" class="ant-input">
             <el-button type="primary">搜索</el-button>
                 <el-button type="primary">拉取/发布</el-button>
              </span>
              <div>
              <div style="width: 120px;"><div>
              </div></div>
              </div>
          </span>
          </div>
        </div>
      </form>
    </div>


    <div class="hot-info" style="height:48px;width: 100%;background:#cccccc">
      <div class="pull-left">
        <div  style="height:48px;width: auto">
        <span class="btn-lg btn-primary" style="height:48px;line-height: 48px;color:#333;padding-left:20px;font-size:18px;" >top10镜像</span>

        </div>
      </div>
    </div>

    <div class="row" >
      <div class="row-container clearfix" style="margin: 3%">
        <div class="row2-part" v-for='item in serviceManagementInfos'>
          <div class="row2-part-content">
            <i class="fa row2-part-icon" :class='item.iconName'></i>
            <p class="row2-part-title">{{item.title}}</p>
            <p class="row2-part-info">{{item.info}}</p>
            <p class="row2-part-num">使用次数：<span>{{item.num}}</span></p>
            <div class="row2-part-btn">
              查看详情
            </div>
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
      serviceManagementInfos: [
        {'iconName': 'fa-cloud', 'title': 'JAVA运行环境', 'info': 'Java运行时环境，快速部署Java应用','num':'356'},
        {'iconName': 'fa-eercast', 'title': 'tomcat', 'info': '面向企业市场推出的SAP HANA云化解决方案和服务，提供自动化管理和SAP全生命周期管理','num':'678'},
        {'iconName': 'fa-bandcamp', 'title': 'mysql', 'info': 'Docker Official Tomcat镜像，帮助企业客户能够快速建站','num':'200'},
        {'iconName': 'fa-podcast', 'title': 'PHP运行环境', 'info': '集成软件：Apache+PHP5.2+mysql5.1+FTP+PHPmyadmin+zend','num':'152'},
        {'iconName': 'fa-window-restore', 'title': 'centos7', 'info': 'Build from centos,Simple CentOS docker','num':'355'},
        {'iconName': 'fa-bandcamp', 'title': '安全加固运行环境', 'info': '通过将LINUX安全狗服务器版应用于天翼云云主机，实现云主机的全面防护','num':'600'},
        /*{'iconName': 'fa-podcast', 'title': 'ubuntun', 'info': '通过将LINUX安全狗服务器版应用于天翼云云主机，实现云主机的全面防护'},*/ 

      ]
    };
  },
  methods: {

  }
}
</script>

<style scoped>
  .search{
    width:100%;
    background-color: #ffffff;
    border: 1px solid #4b5154;
    margin-top: 0px;

  }
</style>
<style>
  /*解决方案*/
  .row3-part{width: calc(100% / 2);float: left;box-sizing: border-box;position: relative;padding-right:20px;}
  .row3-part-detail{font-size: 13px;color:#666;line-height: 18px;margin:10px 0;}
  .knowmore{color:#2a89e0;position: absolute;right:20px;font-size: 13px;top:2px;cursor: pointer;}
  .knowmore:hover{text-decoration: underline;}
  .row3-detail{display: flex;justify-content:space-between;}
  .row3-detail-item{width: calc((100% - 40px) / 2);border:1px solid #2a89e0;box-sizing: border-box;padding:15px;text-align: center;height: 167px;}
  .row3-detail-img{width: 80px;height: 80px;margin:0 auto;background:url('../../assets/home-showpro.png') no-repeat;background-position: 0 0}
  .row3-detail-title{margin-top:10px;}
  .row3-detail-txt{color:#777;font-size: 13px;margin-top:10px;}
  /*应用管理*/
  .applicationBg{background:url('../../assets/bg-m-main3.jpg') center center no-repeat;}
  /*主体区域*/
  .content-wrap{width: 1200px;margin:0 auto;}
  .content-wrap>h3{border-bottom:3px solid #2a89e0;margin-bottom:30px;display: inline-block;font-size: 20px;font-family: '微软雅黑';line-height: 35px;font-weight: 400}
  .cloudcompute{width: calc(100% / 3);float: left;}
  .cloudcompute-pre{display: block;}
  .cloudcompute-icon{background: url('../../assets/home-showpro.png') center center no-repeat;width: 80px;height: 80px;display: block;margin:0 auto;}
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
  .row2-part{width: calc((100% - 40px) / 4);margin:0 5px;height:350px;float: left;box-sizing: border-box;border:1px solid #ccc;transition: all 0.3s;cursor: pointer;background-color: rgba(255,255,255,0.8)}
  .row2-part:hover{border-top:4px solid #2a89e0;background-color: rgba(255,255,255,0.9)}
  .row2-part-content{padding:0 20px;text-align: center;position: relative;transition: all .3s;top:0;}
  .row2-part:hover .row2-part-content{top:-20px;}
  .row2-part:hover .row2-part-icon{color:#2a89e0;}
  .row2-part-title{font-size: 18px;color:#333;margin-bottom:20px;margin-top:20px;}
  .row2-part-icon{font-size: 60px;margin-top:50px;transition: all .3s;color:#8ec31f;}
  .row2-part-info{text-align: left;color:#777;height: 90px;width:100%;word-wrap:break-word;}
  .row2-part-num{text-align: left;}
  .row2-part-num span{color:red;}
  .row2-part-btn{width: 100px;text-align: center;line-height: 2;border: 1px solid transparent;font-size: 14px;color:transparent;margin:0 auto;margin-top:30px;transition: all .3s;}
  .row2-part:hover .row2-part-btn{color:#fff;border: 1px solid #2a89e0;background-color: #2a89e0;}
</style>
<style>
  .el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
  .el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
</style>

