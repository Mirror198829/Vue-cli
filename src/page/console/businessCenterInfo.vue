<template>
   <div>
      <div class="console-main">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ name:'Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name:'ConsolePage'}">控制台</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name:'ColonyInfo',params: { centerName:centerName }}">{{centerName}}数据中心集群信息</el-breadcrumb-item>
        <el-breadcrumb-item>业务中心</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="console-page-body">
        <h1 class="console-page-title">业务中心信息（{{centerName}}）</h1>
        <el-table
          :data="businessCenterData"
          style="width: 100%"
          border>
          <el-table-column
            label="业务中心"
           >
            <template scope="scope">
              <span class="table-link-txt">{{ scope.row.business}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="group"
            label="分组">
          </el-table-column>
          <el-table-column
            prop="application"
            label="应用">
          </el-table-column>
          <el-table-column
            prop="service"
            label="服务">
          </el-table-column>
          <el-table-column label="状态">
            <template scope="scope">
                <div class="console-status"  :class="{'active':scope.row.status == 1}">
                  <i class="fa fa-circle"></i>
                  <span v-if="scope.row.status == 0">空闲中</span>
                  <span v-if="scope.row.status == 1">已占用</span>
                </div>
            </template>
         </el-table-column>
        </el-table>
        <div class="block clearfix" style="margin:20px 0">
          <div style="float:right">
          <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :total="53">
          </el-pagination>
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
      centerName:'',
      businessCenterData: [{
            colony: 'bat(后台批量)',
            business: 'biling（计费中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:0
          }, {
            colony: '江浦批量集群',
            business: 'event（事件中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:0
          },{
            colony: '江浦一级Boss集群',
            business: 'market（营销中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:1
          },{
            colony: '江浦CRM集群',
            business: 'biling（计费中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:0
          },{
            colony: '江浦CRM电渠集群',
            business: 'accounting（财务中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:1
          },{
            colony: '江浦电渠直连集群',
            business: 'biling（计费中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:0
          },{
            colony: '江浦一级Boss集群',
            business: 'accounting（财务中心服务）',
            group: 'dubbo_12(泰州、盐城)',
            application:'demo-provider',
            service:'com.newland.demo.DemoService',
            status:1
          }]
    };
  },
  created(){
  	this.getRouteParams()
  }, 
  methods: {
    getRouteParams(){
    	this.centerName=this.$route.params.centerName;
    }
  }
}
</script>

<style scoped>
.console-status{color:#31bc0b;}
.console-status.active{color:#e20000;}
.console-main{width: 1200px;margin:0 auto;}
.breadcrumb{padding:20px 0;}
.table-link-txt{text-decoration: underline;color:#1f8eeb;cursor: pointer;}
.console-page-title{padding-left:15px;border-left: 5px solid #2a89e0;font-weight: 400;font-size:25px;margin:15px 0 20px 0;}
</style>
