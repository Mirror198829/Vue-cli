<template>
	  <div class="createMainWrap">
     <div class="createMain">
    <div>
      <el-steps  :active="activeStep"  :center="true" class="step">
        <el-step title="创建普通应用"></el-step>
        <el-step title="创建成功"></el-step>
        <el-step title="等待审批"></el-step>
    </el-steps>
    </div>

  

    <div class="main-wrap" v-if="activeStep ==1 ">


		<el-form ref="form" :model="createForm" label-width="130px"  class="form" >


			<div class="form-article">
			<h3 class="form-article-title">基本信息</h3>

      <el-form-item label="数据中心">
        <el-select v-model="createForm.dataCenter" placeholder="请选择数据中心" required>
          <el-option label="江浦" value="jp"></el-option>
          <el-option label="浦口" value="pk"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="集群">
        <el-select v-model="createForm.cluster" placeholder="请选择集群" required>
          <el-option label="EC" value="ec"></el-option>
          <el-option label="CRM" value="crm"></el-option>
           <el-option label="后台批量" value="bat"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item label="业务中心">
        <el-select v-model="createForm.busiCenter" placeholder="请选择业务中心">
          <el-option label="账务中心" value="accounting"></el-option>
          <el-option label="计费中心" value="billing"></el-option>
        </el-select>
      </el-form-item>
     <el-form-item label="分组">
        <el-select v-model="createForm.group" placeholder="请选择分组">
          <el-option label="泰州、盐城" value="12"></el-option>
        </el-select>
      </el-form-item>

		  <el-form-item label="应用名称">
		    <el-input v-model="createForm.name"></el-input>
		  </el-form-item>
           <el-form-item label="节点分配">
        <el-select v-model="createForm.node" multiple   placeholder="请选择部署节点">
            <el-option label="vdkapp51" value="51"></el-option>
            <el-option label="vdkapp52" value="52"></el-option>
            <el-option label="vdkapp53" value="53"></el-option>
        </el-select>
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
        </div>
		  	
        <div  v-if="createForm.isImageDisplay">
          <div class="form-article">
		<h3 class="form-article-title">镜像信息</h3>
     <el-form-item label="实例数">
        <el-input-number v-model="createForm.nums"  :min="1" :max="100"></el-input-number>  &nbsp;  &nbsp; &nbsp; &nbsp; 
         <el-button  @click="createForm.dialogTableVisible = true">选择镜像</el-button>
    </el-form-item>
     <el-form-item label="镜像列表">
  		 <el-table :data="createForm.imageData" stripe style="width: 100%" @row-click="clickImageRow">
             <el-table-column prop="imageName"  label="镜像名称" width="180"> </el-table-column>
             <el-table-column prop="imageTag" label="镜像标签" > </el-table-column>
              <el-table-column  label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    type="danger"
                    @click="deleteImage(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
       </el-table>
       </el-form-item>
      
      <el-dialog title="所有镜像列表" :visible.sync="createForm.dialogTableVisible" >
        <el-table :data="createForm.allImageData" @row-click="addImage">
          <el-table-column property="imageName" label="镜像名称" width="180"></el-table-column>
          <el-table-column property="imageTag" label="镜像标签" ></el-table-column>
        </el-table>
      </el-dialog>

       <el-form-item label="资源配置">
          <div class="resource-select validate-area">
            <div class="resource-box" v-for="resource in createForm.resourceArr" 
            @click="selectResource(resource)" :class="{'active': !createForm.currentImage.isCustomResource &&  createForm.currentImage.resource.cpu == resource.cpu && createForm.currentImage.resource.memory == resource.memory}">
                <p>{{ resource.cpu }}c / {{ resource.memory }} Mib</p>
                <p>{{ resource.title }}</p>
            </div>
            <div class="resource-box custom-resource-box" @click="createForm.currentImage.isCustomResource = true" :class="{'active': createForm.currentImage.isCustomResource}">
                <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Customize</span>
                </div>
                <div>
                    <input class="input"  v-model="createForm.currentImage.customResource.cpu" ng-pattern="/^[1-9]\d*$|^0$/" />
                    <span>CPU(num)</span>
                    <input class="input"  v-model="createForm.currentImage.customResource.memory"  ng-pattern="/^[1-9]\d*$|^0$/"/>
                    <span>Memory(Mib)</span>
                </div>
            </div>
        </div>
       </el-form-item>
     </el-form-item>
		 </div>
    </div>

    <div v-if="createForm.isCommonDisplay">
    <div class="form-article">
    <h3 class="form-article-title">普通信息</h3>
      <el-form-item label="应用路径">
        <el-input v-model="createForm.appPath"></el-input>
      </el-form-item>
      <el-form-item label="启动类">
        <el-input v-model="createForm.startClass"></el-input>
      </el-form-item>
       <el-form-item label="启动参数">
        <el-input v-model="createForm.startParam"></el-input>
      </el-form-item>
  
    </div>
    </div>
<div class="form-article">
      <h3 class="form-article-title">服务信息</h3>
    <el-form-item label="是否开启服务">
        <el-switch v-model="createForm.isServiceOpen" on-color="#13ce66" off-color="#bfcbd9" @change="changeServiceOpen"> </el-switch>   &nbsp;&nbsp;&nbsp;
         <el-button  @click="addPort">添加端口</el-button>
      </el-form-item>
      <div v-if="createForm.isServiceOpen">
        <el-form-item label="端口映射">
             <el-table :data="createForm.servicePorts" stripe style="width: 100%">
             <el-table-column prop="portName"  label="端口名称" width="180">
              <template scope="scope">
                  <el-input v-model="createForm.currentServicePort.portName"   placeholder="请输入端口名称"/>
                </template>
              </el-table-column>
             <el-table-column prop="targetPort" label="目标端口" > 
               <template scope="scope">
                  <el-input   v-model="createForm.currentServicePort.targetPort"  placeholder="请输入目标端口"/>
                </template>
             </el-table-column>
               <el-table-column prop="protocol"  label="协议" width="180"> 
               <template scope="scope">
                <el-select   v-model="createForm.currentServicePort.protocol"   placeholder="请选择协议">
                  <el-option
                    v-for="item in createForm.serviceProtocols"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
              </template>
               </el-table-column>
             <el-table-column prop="servicePort" label="服务端口"  width="180"> 
                  <template scope="scope">
                  <el-input  v-model="createForm.currentServicePort.servicePort"  placeholder="请输入服务端口"/>
                </template>
             </el-table-column>
              <el-table-column  label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    type="danger"
                    @click="deletePort(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
       </el-table>
        </el-form-item>
    </div>
    </div>
    <div class="form-article">
      <h3 class="form-article-title">日志配置</h3>
      <el-form-item label="节点">
          <el-select v-model="createForm.logNode" multiple   placeholder="请选择日志输出节点">
            <el-option label="vdkapp51" value="51"></el-option>
            <el-option label="vdkapp52" value="52"></el-option>
            <el-option label="vdkapp53" value="53"></el-option>
           </el-select>
      </el-form-item>
      <el-form-item label="路径">
             <el-input  v-model="createForm.logPath"  placeholder="请输入日志输出路径,比如:/var/log/app1"/>
      </el-form-item>
      <el-form-item label="格式">
           <el-input type="textarea" v-model="createForm.logFormater" placeholder="请输入日志输出格式,比如:appName^createTime^ip^user"></el-input>
      </el-form-item>
      <el-form-item label="采集工具">
            <el-select v-model="createForm.logGatherTool"    placeholder="请选择日志采集工具">
                <el-option label="flume" value="flume"></el-option>
                <el-option label="kafka" value="kafka"></el-option>
           </el-select>
      </el-form-item>
      </div>

		<div class="form-article">

		<el-form-item>
		    <el-button type="primary" @click="activeStep++">立即创建</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
      </div>
		</el-form>   

</div>
<div v-if="activeStep ==2 ">
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
       createForm: {
          dataCenter : "",
          cluster : "",
          busiCenter :"",
          group : "",
          name: '',
          node:'',
          createType:'fromImage',
          isImageDisplay : true,
          isCommonDispaly: false,
          dialogTableVisible : false,
          appPath:'',
          startClass:"",
          startParam:"",
          resourceArr : [{
                cpu: "0.5",
                memory: "256",
                title: "最小"
            },
            {
                cpu: "1",
                memory: "512",
                title: "适中"
            },
            {
                cpu: "2",
                memory: "1024",
                title: "最大"
            }],
          resource : {
            cpu : '',
            memory :''
          },
          isCustomResource:!0,
          isServiceOpen:true,
          kind: '',
          desc: '',
          nums:1,
          min:1,
          max:100,
          imageData:[
          ],
          allImageData:[
              {
                imageName:"tomcat",
                imageTag:"7.6.8",
                isCustomResource:!1,
                resource: {
                  cpu : '0.5',
                  memory:'256'
                },
                customResource:{
                  cpu : '',
                  memory:''
                }
              },
              {
          imageName:"mysql",
                imageTag:"5.1.7",
                isCustomResource:!1,
                 resource: {
                  cpu : '0.5',
                  memory:"256"
                },
                customResource:{
                  cpu : '',
                  memory:''
                }
              },
              {
          imageName:"nginx",
                imageTag:"1.0.0",
                isCustomResource:!1,
                 resource: {
                  cpu : "0.5",
                  memory:"256"
                },
                customResource:{
                  cpu : '',
                  memory:''
                }
              }
          ],
          currentImage:{
           imageName:"",
            imageTag:"",
           resource: {
            cpu : '',
            memory:''
          }, customResource: {
            cpu : '',
            memory:''
          }
        },
          servicePorts : [
            {
              portName:'',
              targetPort:'',
              protocol:'tcp',
              servicePort:''
            }
          ],
          currentServicePort:{
            portName:'',
            targetPort:'',
            protocol:'tcp',
            servicePort:''
          },
          serviceProtocols:[
              {
              value:"tcp",
              label:"TCP"
              },
              {
              value:"udp",
              label:"UDP"
              }
          ],
          startClass:'',
          startParam:'',
          logNode:'',
          logPath:'',
          logFormater:'',
          logGatherTool:''
        },
        activeStep:1
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
      console.log(this.createForm.currentImage.resource);
      console.log(row.resource);
      console.log(this.createForm.currentImage.customResource);
      console.log(row.customResource);
      console.log(row);
        this.createForm.currentImage.imageName = row.imageName;
        this.createForm.currentImage.imageTag = row.imageTag;
        this.createForm.currentImage.resource.cpu = row.resource.cpu;
        this.createForm.currentImage.resource.memory = row.resource.memory;
        this.createForm.currentImage.customResource.cpu = row.customResource.cpu;
        this.createForm.currentImage.customResource.memory = row.customResource.memory;
        this.createForm.currentImage.isCustomResource = row.isCustomResource;
        if(this.createForm.currentImage.isCustomResource){

        }else{

        }
      },
      addImage(row, event, column){
        var isContain = false;
        row.resource.cpu = 0.5;
        row.resource.memory = 256;
        if(this.createForm.imageData && this.createForm.imageData.length >0){
          for(var  idx in this.createForm.imageData){
              if(this.createForm.imageData[idx].imageName == row.imageName &&  this.createForm.imageData[idx].imageTag == row.imageTag){
                          isContain = true;
                 }
              }
              if(!isContain){
                  this.createForm.imageData.push(row);
              }
           }else{
              console.log("else");
               this.createForm.imageData.push(row);
           }   
          
      },
       deleteImage(index,row){
        this.createForm.imageData.splice(index,1);
      },
      selectResource(resource){
          this.createForm.isCustomResource = !1;
          this.createForm.currentImage.resource.cpu = resource.cpu;
          this.createForm.currentImage.resource.memory = resource.memory;
          for(var  idx in this.createForm.imageData){
            if(this.createForm.imageData[idx].imageName == this.createForm.currentImage.imageName &&
            this.createForm.imageData[idx].imageTag == this.createForm.currentImage.imageTag){
              this.createForm.imageData[idx].resource.cpu = resource.cpu;
               this.createForm.imageData[idx].resource.memory = resource.memory;
            }
          }
          console.log(this.createForm.imageData);
      },
      changeServiceOpen(){
        if(!createForm.isServiceOpen){

        }else{

        }
      },
      addPort(){
          if(this.createForm.servicePorts && this.createForm.servicePorts.length>0){
            
            if('' == this.createForm.currentServicePort.portName || '' == this.createForm.currentServicePort.targetPort 
            || '' == this.createForm.currentServicePort.protocol || '' == this.createForm.currentServicePort.servicePort){
                return false;
            }
             this.createForm.servicePorts.push({
                portName :this.createForm.currentServicePort.portName,
                targetPort : this.createForm.currentServicePort.targetPort,
                protocol : this.createForm.currentServicePort.protocol,
                servicePort :  this.createForm.currentServicePort.servicePort
             });
              this.createForm.currentServicePort.portName = "";
              this.createForm.currentServicePort.targetPort = "";
              this.createForm.currentServicePort.protocol = "tcp";
              this.createForm.currentServicePort.servicePort = "";
              console.log(this.createForm.servicePorts);

          }else{
             this.createForm.servicePorts.push({
               portName :this.createForm.currentServicePort.portName,
                targetPort : this.createForm.currentServicePort.targetPort,
                protocol : this.createForm.currentServicePort.protocol,
                servicePort :  this.createForm.currentServicePort.servicePort

             });
           this.createForm.servicePorts.push(this.createForm.currentServicePort);
                this.createForm.currentServicePort.portName = "";
              this.createForm.currentServicePort.targetPort = "";
              this.createForm.currentServicePort.protocol = "tcp";
              this.createForm.currentServicePort.servicePort = "";
              console.log(this.createForm.servicePorts);
          }
         
      },
      deletePort(index,row){
        this.createForm.servicePorts.splice(index,1);
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
    }
     
  }
}
</script>

<style scoped>
.createMainWrap{background-color: #f4f5f6;padding-bottom:50px;}
.createMain{width:1200px;margin:0 auto ;}
.step{width:700px;padding:20px 0 40px;margin: 0 auto}
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
form .resource-box{
  float: left;
  min-width: 100px;
  text-align: center;
  border: 1px solid #d8dee2;
  border-radius: 3px;
  padding: 10.5px;
  margin-right: 20px;
  cursor: pointer
}

form .resource-box.active {
  background-color: #c6e9fa;
  border-color: #39b3ef
}

form .resource-box.custom-resource-box {
  padding: 0;
  cursor: inherit
}

form .resource-box.custom-resource-box.active{
  background-color: initial
}

form .resource-box.custom-resource-box.active>div:first-child{
  background-color: #c6e9fa;
  color: #39b3ef;
  border-right: 1px solid #39b3ef
}

form .resource-box.custom-resource-box>div{
  vertical-align: middle
}

form .resource-box.custom-resource-box>div:first-child {
  width: 24px;
  background-color: #f4f7f9;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px
}

form .resource-box.custom-resource-box>div:last-child{
  padding: 10px
}
.correctTip{width: 800px;box-sizing: border-box;text-align: center;background-color: #fff;padding:40px;margin:0 auto ;}
#successTip{font-size:25px;font-weight:700;margin-left:10px;position:relative;top:-3px;font-weight:400;}
#tip{display:inline-block;margin-top:20px;}
#link-order{color:#0080cb;text-decoration:underline}
.fa-check-circle{font-size: 50px;color:#13ce66;}
.main-wrap{width: 1200px;box-sizing:border-box;margin:0 auto;}
.form-article{background-color: #fff;padding:30px 40px;margin-bottom:3px;}
.form-article-title{font-weight: 400;font-size: 20px;line-height: 50px;}
</style>
