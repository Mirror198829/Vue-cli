<template>
  <div id="creatSqlMainWrap">
	   <div id="creatSqlMain">
			<div id="breadcrumb">
					<el-breadcrumb separator="/">
				  <el-breadcrumb-item>服务管理</el-breadcrumb-item>
				  <el-breadcrumb-item>数据库服务</el-breadcrumb-item>
				  <el-breadcrumb-item :to="{ name: 'RelationDatabase'}">关系数据库</el-breadcrumb-item>
				  <el-breadcrumb-item>MySQL创建</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div id="step">
				<el-steps :active="activeStep" :center="true">
				  <el-step title="MySQL创建"></el-step>
				  <el-step title="创建成功"></el-step>
				  <el-step title="等待审批"></el-step>
				</el-steps>
			</div>
			<div class="sqlmain-wrap"  v-show="activeStep == 1">
				<el-form label-position="left" :model="mySqulForm" :rules="rules" ref="mySqulForm" label-width="150px" class="demo-mySqulForm">
				 <!-- <div class="form-article">
				  		<h3 class="form-article-title">网络</h3>
					  	<el-form-item label="当前区域：" required>
			  				<el-radio-group v-model="mySqulForm.region" @change="changeEdition()">
							    <el-radio-button v-for="(item,key) in regions" :label="item" :key="key"></el-radio-button>
						   </el-radio-group>
					   </el-form-item>
					   <el-form-item label="虚拟私有云：" required>
			  				<el-input v-model="mySqulForm.virtualPrivateCloud" placeholder="请输入虚拟私有云"></el-input>
					   </el-form-item>
					   <el-form-item label="子网：" required>
			  				<el-input v-model="mySqulForm.subnet" placeholder="请输入子网"></el-input>
					   </el-form-item>
					   <el-form-item label="安全组：" required>
			  				<el-input v-model="mySqulForm.securityGroup" placeholder="请输入安全组"></el-input>
					   </el-form-item>
				  </div>-->
				  <div class="form-article">
				  		  <h3 class="form-article-title">实例规格</h3>
						  <el-form-item label="实例名称：" prop="name">
						    <el-input v-model="mySqulForm.name"></el-input>
						  </el-form-item>
            <el-form-item label="当前区域：" required>
              <el-radio-group v-model="mySqulForm.region" @change="changeEdition()">
                <el-radio-button v-for="(item,key) in regions" :label="item" :key="key"></el-radio-button>
              </el-radio-group>
            </el-form-item>
						  <el-form-item label="数据库引擎：" required>
			  				<el-radio-group v-model="mySqulForm.databaseType" @change="changeEdition()">
							    <el-radio-button label="MySQL"></el-radio-button>
							    <!--<el-radio-button label="SQL Server"></el-radio-button>-->
						   </el-radio-group>
						  </el-form-item>
						  <el-form-item label="版本：" required>
						    <el-radio-group v-model="mySqulForm.edition">
						    	<el-radio-button v-for="(item,key) in editions" :label="item" :key="key"></el-radio-button>
						   </el-radio-group>
						  </el-form-item>
						  <el-form-item label="数据库实例类：" prop="case">
						    <el-select v-model="mySqulForm.case" placeholder="请选择">
							    <el-option
							      v-for="item in cases"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						  </el-form-item>
						  <el-form-item label="内存：" prop="memory">
						    <el-select v-model="mySqulForm.memory" placeholder="请选择内存大小">
						      <el-option :label="item.label" :value="item.value" v-for="(item,key) in memories" :key="key"></el-option>
						    </el-select>
						  </el-form-item>
						  <el-form-item label="存储空间(GB)：" required>
						    <el-slider
						      v-model="mySqulForm.storageDisk"
						      :step="50"
						      show-stops
						      show-input
						      :max="1000"
						      :min="50"
						      :format-tooltip="formatTooltip">
						    </el-slider>
						  </el-form-item>
				  </div>
				  <div class="form-article">
			  		    <h3 class="form-article-title">数据库配置</h3>
					    <el-form-item label="密码：" required>
					    	<el-input v-model="mySqulForm.pass"></el-input>
					    </el-form-item>
					    <el-form-item label="端口号：" required>
					    	<el-input v-model="mySqulForm.port"></el-input>
					    </el-form-item>
				  </div>
				  <div class="form-article">
					  <el-form-item>
					     <el-button type="primary" @click="submitForm('mySqulForm')">立即创建</el-button>
					     <el-button @click="resetForm('mySqulForm')">重置</el-button>
					   </el-form-item>
				  </div>
				</el-form>
			</div>
			<div class="sqlmain-wrap" v-show="activeStep == 2">
				<div class="correctTip">
					<i class="fa fa-check-circle"></i>
					<span id="successTip">恭喜您，已成功创建！</span><br/>
					<span id="tip">请耐心等待审批，详情可见</span>
					<a href="javascript:void(0)" id="link-order">我的工单</a>！
				</div>
			</div>
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
          port:''
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
  	getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
  	formatTooltip(val){
  		return val+" GB"
  	},
  	changeEdition(){
  		if(this.mySqulForm.databaseType == 'MySQL'){
  			this.editions=['5.7.17','5.8.3','6.2.1','7.3.6']
  		}else if(this.mySqulForm.databaseType == 'SQL Server'){
  			this.editions=['2.1','3.2']
  		}
  		this.mySqulForm.edition=this.editions[0]
  	},
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.activeStep =2;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
