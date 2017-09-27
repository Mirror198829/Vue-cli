<template>
  <div id="creatSqlMainWrap">
    <div id="creatSqlMain">
      <div id="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>服务管理</el-breadcrumb-item>
          <el-breadcrumb-item>中间件服务</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'RelationDatabase'}">负载均衡</el-breadcrumb-item>
          <el-breadcrumb-item>配置负载均衡</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div id="step">
        <el-steps :active="activeStep" :center="true">
          <el-step title="基本配置"></el-step>
          <el-step title="健康检查"></el-step>
          <el-step title="创建成功"></el-step>
        </el-steps>
      </div>
      <div class="sqlmain-wrap"  v-show="activeStep == 1">
        <el-form label-position="left" :model="mySqulForm" :rules="rules" ref="mySqulForm" label-width="150px" class="demo-mySqulForm">

          <div class="form-article">
            <h3 class="form-article-title">基本配置</h3>
            <el-form-item label="实例名称：" prop="name">
              <el-input v-model="mySqulForm.name"></el-input>
            </el-form-item>

            <el-form-item label="前端协议：" prop="case">
              <el-select v-model="mySqulForm.case" placeholder="请选择">
                <el-option
                  v-for="item in cases"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
             :端口 <el-input style="width: 180px"></el-input>
              <p>端口范围：1-65535</p>
            </el-form-item>

            <el-form-item label="后端协议：" prop="case">
             TCP
              :端口 <el-input style="width: 180px;"></el-input>
              <p>端口范围：1-65535</p>
            </el-form-item>

            <el-form-item label="调度算法：" prop="case">
              <el-select v-model="mySqulForm.algro" placeholder="请选择">
                <el-option
                  v-for="item in algorithms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="自动启动：" prop="case">
              <el-tooltip :content="'Switch value: ' + autoRun" placement="top">
                <el-switch
                  v-model="autoRun"
                  on-color="#13ce66"
                  off-color="#ff4949"
                  on-value="100"
                  off-value="0">
                </el-switch>
              </el-tooltip>

              <p>创建完成后，自动启动</p>
            </el-form-item>
          </div>
          <div class="form-article">
            <el-form-item>
              <el-button type="primary" @click="nextStep('mySqulForm')">下一步</el-button>
              <el-button @click="resetForm('mySqulForm')">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="sqlmain-wrap" v-show="activeStep == 2">

        <el-form label-position="left" :model="mySqulForm" :rules="rules" ref="mySqulForm" label-width="150px"
                 class="demo-mySqulForm">

          <div class="form-article">
            <h3 class="form-article-title">健康检查</h3>

            <el-form-item label="检查方式：" prop="name">
              <el-radio class="radio" v-model="radio" label="1">TCP</el-radio>
              <el-radio class="radio" v-model="radio" label="2">HTTP</el-radio>
            </el-form-item>
            <el-form-item label="检查端口：" prop="name">
              <el-input style="width: 180px;"></el-input>
              <p>端口范围：1-65535</p>
            </el-form-item>
            <el-form-item label="响应时间：" prop="name">
              <el-input style="width: 380px;" v-model="mySqulForm.responseTime"></el-input>秒
            </el-form-item>
            <el-form-item label="检查间隔：" prop="name">
              <el-input style="width: 380px;" v-model="mySqulForm.checkInterval"></el-input>秒
            </el-form-item>
            <el-form-item label="健康阈值：" prop="name">
              <el-input style="width: 380px;" v-model="mySqulForm.healthThreshold"></el-input>秒
            </el-form-item>
            <el-form-item label="不健康阈值：" prop="name">
              <el-input style="width: 380px;" v-model="mySqulForm.notHealthThreshold"></el-input>秒
            </el-form-item>
          </div>
          <div class="form-article">
            <el-form-item>
              <el-button type="primary" @click="lastStep('mySqulForm')">上一步</el-button>
              <el-button type="primary" @click="nextStep('mySqulForm')">下一步</el-button>
              <el-button @click="resetForm('mySqulForm')">重置</el-button>
            </el-form-item>
          </div>
        </el-form>


      </div>
      <div class="sqlmain-wrap" v-show="activeStep == 3">

        <el-form label-position="left" :model="mySqulForm" :rules="rules" ref="mySqulForm" label-width="150px"
                 class="demo-mySqulForm">

          <div class="form-article">
            <h3 class="form-article-title">健康检查</h3>
            <div class="correctTip">
              <i class="fa fa-check-circle"></i>
              <span id="successTip">恭喜您，已成功创建！</span><br/>
              <span id="tip">请耐心等待审批，详情可见</span>
              <a href="javascript:void(0)" id="link-order">我的工单</a>！
            </div>
          </div>

          <div class="form-article">
            <el-form-item>
              <el-button type="primary" @click="lastStep('mySqulForm')">上一步</el-button>
              <el-button type="primary" @click="submitForm('mySqulForm')">完成</el-button>
              <el-button @click="resetForm('mySqulForm')">重置</el-button>
            </el-form-item>
          </div>
        </el-form>


      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        radio: '1',
        editions:['5.7.17','5.8.3','6.2.1','7.3.6'],
        regions:['华东','华北','华南'],
        autoRun:100,
        cases:[
          {'label':'tcp','value':'1'},
          {'label':'http','value':'2'}
        ],//数据库实例
        algorithms:[
          {'label':'轮询','value':'1'},
          {'label':'权重','value':'2'}
        ],
        memories:[{'label':'8g','value':'8g'},{'label':'16g','value':'16g'},{'label':'32g','value':'32g'},{'label':'48g','value':'48g'},{'label':'64g','value':'64g'}],//内存
        activeStep:1,
        mySqulForm: {
          algro:'',
          name: '',
          databaseType: 'MySQL',
          edition:'5.7.17',
          case:"",
          memory:'',
          storageDisk:50,
          region:'华东',
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
      lastStep(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.activeStep =1;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      nextStep(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.activeStep+=1;
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
