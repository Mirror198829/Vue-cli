<template>
  <div id="creatSqlMainWrap">
	   <div id="creatSqlMain">
			<div id="step">
				<el-steps :active="activeStep" :center="true">
				  <el-step title="K8S节点分配"></el-step>
				  <el-step title="创建成功"></el-step>
				</el-steps>
			</div>
			
				<el-form label-position="right"  :model="mySqulForm" :rules="rules" ref="mySqulForm" label-width="150px" class="demo-mySqulForm">
				<div class="sqlmain-wrap"  v-show="activeStep == 1">
				  <div class="form-article">
				  		  <h3 class="form-article-title">K8S节点分配</h3>
						  <el-form-item label="master节点" >
							    <el-select v-model="mySqulForm.masterNodes" placeholder="请选择master节点"  multiple>
							      <el-option :label="item.label" :value="item.value" v-for="(item,key) in masterAllNodes" :key="key"></el-option>
							    </el-select>
						  </el-form-item>
						   <el-form-item label="node节点">
							    <el-select v-model="mySqulForm.nodeNodes" placeholder="请选择node节点" multiple>
							      <el-option :label="item.label" :value="item.value" v-for="(item,key) in masterAllNodes" :key="key"></el-option>
							    </el-select>
						  </el-form-item>
						    <el-form-item label="etcd节点">
							    <el-select v-model="mySqulForm.etcdNodes" placeholder="请选择etcd节点" multiple>
							      <el-option :label="item.label" :value="item.value" v-for="(item,key) in masterAllNodes" :key="key"></el-option>
							    </el-select>
						  </el-form-item>
          
				  </div>
				</div>

			<div class="sqlmain-wrap" v-show="activeStep == 2">
			 <div class="form-article">
				<div class="correctTip">
					<i class="fa fa-check-circle"></i>
					<span id="successTip">恭喜您，已成功创建！</span><br/>
					<span id="tip">请耐心等待审批，详情可见</span>
					<a href="javascript:void(0)" id="link-order">我的工单</a>！
				</div>
				</div>
			</div>
			
		
				  <div class="form-article">
					  <el-form-item>
					     <el-button type="primary" v-show='activeStep != 2' @click="activeStep++">创建</el-button>
					      <el-button type="primary" v-show='activeStep == 2' @click="gotoK8SContainerEvn">返回</el-button>	
					     <el-button  @click="gotoK8SContainerEvn">取消</el-button>
					   </el-form-item>
				  </div>
				</el-form>
			

	   </div>
  </div>

</template>

<script>
export default {
   data() {
      return {
      	editions:['5.7.17','5.8.3','6.2.1','7.3.6'],
      	regions:['南京','无锡','苏州'],
      	cases:[
      		{'label':'rds.mySQL.s1.medium - 1 核','value':'1'},
      		{'label':'rds.mySQL.s3.medium - 2 核','value':'2'}
      	],//数据库实例
      	memories:[{'label':'8g','value':'8g'},{'label':'16g','value':'16g'},{'label':'32g','value':'32g'},{'label':'48g','value':'48g'},{'label':'64g','value':'64g'}],//内存
      	masterAllNodes:[
      		{'label':'vdkapp51',
      		'value':'vdkapp51'},
      		{'label':'vdkapp52',
      		'value':'vdkapp52'},
      		{'label':'vdkapp53',
      		'value':'vdkapp53'},
      		{'label':'vdkapp54',
      		'value':'vdkapp54'}
      	],
      
      	activeStep:1,
        mySqulForm: {
          name: '',
          databaseType: 'MySQL',
          edition:'5.7.17',
          case:"",
          memory:'',
          storageDisk:50,
          region:'南京',
          virtualPrivateCloud:'',
          subnet:'',
          securityGroup:'',
          pass:'',
          port:'',
          	masterNodes:'',
          	nodeNodes :'',
          	etcdNodes:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入实例名称', trigger: 'blur' }
          ],
          case:[
          	{ required:true,message:'请选择数据库实例',trigger:'blur'}
          ],
          memory:[
          	{ required:true,message:'请选择内存大小',trigger:'blur'}
          ]
        }
      };
    },
  methods: {
      gotoK8SContainerEvn(){
      	this.$router.push({ name: 'K8SContainerEnv'});
      }
  }
}
</script>

<style scoped>
#creatSqlMainWrap{background-color: #f4f5f6;padding-bottom:50px;}
#creatSqlMain{width:1200px;margin:0 auto ;}
#breadcrumb{padding:20px 0;}
#step{width:700px;padding:20px 0 40px;margin: 0 auto}
.sqlmain-wrap{width: 1200px;box-sizing:border-box;margin:0 auto;}
.form-article{background-color: #fff;padding:30px 40px;margin-bottom:3px;}
.form-article-title{font-weight: 400;font-size: 20px;line-height: 50px;}
.correctTip{width: 800px;box-sizing: border-box;text-align: center;background-color: #fff;padding:40px;margin:0 auto ;}
#successTip{font-size:25px;font-weight:700;margin-left:10px;position:relative;top:-3px;font-weight:400;}
#tip{display:inline-block;margin-top:20px;}
#link-order{color:#0080cb;text-decoration:underline}
table {font-size:14px;color:#666;border-width: 1px;border-color: #ccc;border-collapse: collapse;}
table td {border-width: 1px;padding: 8px;border-style: solid;border-color: #ccc;background-color: #ffffff;}
table td:first-child{width:200px;font-weight: 700}
table td:last-child{width: 600px}
.fa-check-circle{font-size: 50px;color:#13ce66;}
</style>
