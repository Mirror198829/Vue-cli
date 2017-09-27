<template>
	<div class="content">
  <h2>创建普通应用</h2>
		<el-form ref="form" :model="createForm" label-width="80px" class="form">

			<p class="line"></p>
			<h3>基本信息</h3>

		  <el-form-item label="应用名称">
		    <el-input v-model="createForm.name"></el-input>
		  </el-form-item>
		   <el-form-item label="创建方式">
		    <el-select v-model="createForm.createType" placeholder="请选择应用创建方式" @change="handleCreateType">
		      <el-option label="从镜像创建" value="fromImage"></el-option>
		      <el-option label="普通创建" value="fromPath"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="描述">
		    <el-input type="textarea" v-model="createForm.desc"></el-input>
		  </el-form-item>

		  	<p class="line"></p>
        <div  v-if="createForm.isImageDisplay">
		<h3>镜像信息</h3>
     <el-form-item label="实例数">
        <el-input-number v-model="createForm.nums"  :min="1" :max="100"></el-input-number>  &nbsp;  &nbsp; &nbsp; &nbsp; 
         <el-button>选择镜像</el-button>
    </el-form-item>
     <el-form-item label="镜像列表">
  		 <el-table :data="createForm.imageData" stripe style="width: 100%" :row-click="clickImageRow">
             <el-table-column prop="imageName"  label="镜像名称" width="180"> </el-table-column>
             <el-table-column prop="imageTag" label="镜像标签" > </el-table-column>
       </el-table>
     </el-form-item>
		 <p class="line"></p>
			<h3>服务信息</h3>
		<el-form-item label="地址">
		    <el-input v-model="createForm.address"></el-input>
		  </el-form-item>
    </div>

    <div v-if="createForm.isCommonDisplay">
    <h3>普通信息</h3>
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
    </div>
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
          createType:'fromImage',
          isImageDisplay : true,
          isCommonDispaly: false,
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
      },
      handleCreateType(type){
        if("fromImage" == type){
         this.createForm.isImageDisplay = true;
         this.createForm.isCommonDisplay = false;
        }else{
        this.createForm.isImageDisplay = false;
         this.createForm.isCommonDisplay = true;
        }
      },
      clickImageRow(row, event, column){
        console.log(row);
        console.log(event);
        console.log(column);
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
