<template>
	<div class="content">
    <h3 style="font-family: '微软雅黑'">负载均衡</h3>
		<el-form ref="form" :model="createForm" label-width="80px" class="form">

			<p class="line"></p>
			<h3>基本信息</h3>

		  <el-form-item label="名称">
		    <el-input v-model="createForm.name"></el-input>
		  </el-form-item>
      <el-form-item label="地域">
        <el-radio-group v-model="radio3" >
          <el-radio-button label="南京"></el-radio-button>
          <el-radio-button label="无锡"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="时长">
        <el-radio-group v-model="radio6" >
          <el-radio-button label="永久"></el-radio-button>
          <el-radio-button label="1个月"></el-radio-button>
          <el-radio-button label="2个月"></el-radio-button>
          <el-radio-button label="3个月"></el-radio-button>
          <el-radio-button label="4个月"></el-radio-button>
          <el-radio-button label="6个月"></el-radio-button>
          <el-radio-button label="1年"></el-radio-button>
          <el-radio-button label="2年"></el-radio-button>
        </el-radio-group>
      </el-form-item>


      <div style="margin: 15px 0;"></div>
		   <el-form-item label="类型">
		    <el-select v-model="createForm.kind" placeholder="请选择应用类型">
		      <el-option label="单可用" value="stateful"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="描述">
		    <el-input type="textarea" v-model="createForm.desc"></el-input>
		  </el-form-item>
		   <el-form-item label="实例数">
 				<el-input-number v-model="createForm.nums" @change="handleChange" :min="1" :max="100"></el-input-number></el-form-item>

		  	<p class="line"></p>



			<h3>网络与实例类型</h3>
      <el-form-item label="实例类型">
        <el-radio-group v-model="radio4" >
          <el-radio-button label="公网"></el-radio-button>
          <el-radio-button label="私网"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <p style="margin-bottom: 20px;margin-left: 40px;font-family: '12px Extra Extra Small';">您可以根据业务场景来选择配置对外公开或对内私有的负载均衡</p>
      <el-form-item label="计费方式">
        <el-radio-group v-model="radio5" >
          <el-radio-button label="流量"></el-radio-button>
          <el-radio-button label="带宽"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    <p style="margin-left: 40px;font-family: '12px Extra Extra Small';" > 开通即按使用流量计费，停止或释放实例才不会产生流量费用
进行变配操作时，若选择的计费方式与当前计费方式不同，则代表变更计费方式，变更计费方式将在第二天0点生效
    </p>
		  <p class="line"></p>

		<el-form-item>
		    <el-button type="primary" @click="onSubmit">确定</el-button>
		    <el-button @click="cancelCreate">取消</el-button>
		  </el-form-item>
		</el-form>


	</div>
</template>

<script>
export default {
  data() {
    return {
      radio3: '南京',
      radio4: '公网',
      radio5: '流量',
      radio6: '永久',
       createForm: {
          name: '',
          kind: '',
          desc: '',
          nums:1,
          min:1,
          max:100,
          imageData:[
          		{
		          	imageName:"tomcat",
		          	imageTag:"7.6.8"
	          	},
	          	{
					imageName:"mysql",
		          	imageTag:"5.1.7"
	          	}
          ]
        },
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    };
  },
  methods: {
    cancelCreate(){
      this.$router.push({ name: 'LoadBalance'});
    }
      ,
      onSubmit() {
        console.log('submit!');
      }
  }
}
</script>

<style scoped>
.content{
	align:center;
	margin:70px;
}
.form{
	width:100%;

}
.line {
    width: 100%;
    height: 1px;
    background: #d7d8d9;
    margin: 20px auto;
}
.form>h3{
	margin-left:10px;
	margin-bottom:20px;
}
</style>
