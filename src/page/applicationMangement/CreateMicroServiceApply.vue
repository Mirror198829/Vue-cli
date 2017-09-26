<template>
	<div class="content">

		<el-form ref="form" :model="createForm" label-width="80px" class="form">

			<p class="line"></p>
			<h3>基本信息</h3>

		  <el-form-item label="应用名称">
		    <el-input v-model="createForm.name"></el-input>
		  </el-form-item>
		   <el-form-item label="类型">
		    <el-select v-model="createForm.kind" placeholder="请选择应用类型">
		      <el-option label="有状态" value="stateful"></el-option>
		      <el-option label="无状态" value="deployment"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="描述">
		    <el-input type="textarea" v-model="createForm.desc"></el-input>
		  </el-form-item>
		   <el-form-item label="实例数">
 				<el-input-number v-model="createForm.nums" @change="handleChange" :min="1" :max="100"></el-input-number></el-form-item>
		
		  	<p class="line"></p>
		<h3>镜像信息</h3>
		<el-button>选择镜像</el-button>
		 <el-table :data="createForm.imageData" stripe style="width: 100%">
           <el-table-column prop="imageName"  label="镜像名称" width="180"> </el-table-column>
           <el-table-column prop="imageTag" label="镜像标签" > </el-table-column>
          </el-table>
	
		 <p class="line"></p>
			<h3>服务信息</h3>
		<el-form-item label="地址">
		    <el-input v-model="createForm.address"></el-input>
		  </el-form-item>

		  <p class="line"></p>

		<el-form-item>
		    <el-button type="primary" @click="onSubmit">启动</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>   


	</div>
</template>

<script>
export default {
  data() {
    return {
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
