<template>
   <div>
      <div class="content-top">
        <div class="content-top-text" >
          <h1 class="col">{{h1Title}}</h1>
          <br/>
          <p class="col">{{description}}</p>
          <br/>
        </div>
      </div>
      <ul>
        <li v-for="module in modules"/>
      </ul>
     <div class="content-body">
      <div  v-for="module in modules">

           <div v-if="module.displayType === 5">
            <div class="light-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-4 content-box-item-num-5" v-for="item in module.items">
                   <img :src="item.imageUrl" style="width: 197px; height: 95.48px;"></img>
                 </div>
               </div>
            </div>
         </div>
        <div v-if="module.displayType === 6">
             <div class="black-group">
               <div class="content-title">
                  <h2 x-model="module.title">{{module.title}}</h2>
               </div>
               <div class="content-box">
                 <div class="content-box-item-2 content-box-item-num-6" v-for="item in module.items">
                   <img :src="item.imageUrl"></img>
                   <div>
                     <h3>{{item.title}}</h3>
                     <p>{{item.content}}</p>
                   </div>
                 </div>
               </div>
            </div>
        </div>
        <div v-if="module.displayType === 4">
          <div class="light-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box">
              <div class="content-box-item-4  content-box-item-num-4" v-for="item in module.items">
                <div>
                  <h4>{{item.title}}</h4>
                   <ul>
                     <li v-for="item1 in item.items">{{item1}}</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div v-if="module.displayType === 7">
          <div class="dark-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
          </div>
        <div class="content-box-item-num-7 clearfix">
          <div class="content-box-item-num-7-left">
            <ul>
              <li v-for="(item,index) in module.items"  v-if="index === 0" class="ul-left ul-left-current" :li-id="index">{{item.title}}</li>
              <li v-for="(item,index) in module.items"  v-if="!index == 0" class="ul-left ul-left-current-no" :li-id="index">{{item.title}}</li>
            </ul>
          </div>
          <div class="content-box-item-num-7-right">
            <div class="div-right div-right-current"  v-for="(item,index) in module.items"  :div-id="index"  v-if="index === 0" >
              <p><br/></p>
              <p>{{item.content}}</p>
                 <p><br/></p>
              <img :src="item.imageUrl">
            </div>
            <div class="div-right  div-right-current-no"  v-for="(item,index) in module.items"  :div-id="index" v-if="!index == 0" >
               <p><br/></p>
                <p>{{item.content}}</p>
                   <p><br/></p>
              <img :src="item.imageUrl">
            </div>
          </div>
        </div>
      </div>

       </div>
       <!--第七个结束，第八个开始-->
      <div v-if="module.displayType === 8">
        <div class="black-group">
            <div class="content-title">
                <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box clearfix">
              <div class="content-box-item-4-min  content-box-item-num-8" v-for="item in module.items">
              <div>
                <img :src="item.imageUrl"/>
                <h4>{{item.title}}</h4>
                <p>{{item.content}}</p>
              </div>
          </div>
            </div>
        </div>
       </div>
       <!--第八个结束-->
           <!--第八个结束，第九个开始-->
      <div v-if="module.displayType === 9">
        <div class="light-group">
            <div class="content-title">
                <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box  content-box-bg clearfix">
              <div class="content-box-item-num-9 clearfix" v-for="item in module.items">
                <div class="content-box-item-num-9-left clearfix">
                  <img :src="item.imageUrl"/>
                  <h4>{{item.title}}</h4>
                </div>
                <div class="content-box-item-num-9-right">
                  <p v-for="item1 in item.contents">{{item1}}</p>
                </div>
                
          </div>
            </div>
        </div>
       </div>
       <!--第九个结束-->

          <!--第十个开始-->
        <div v-if="module.displayType === 10">
          <div class="black-group">
            <div class="content-title">
              <h2 x-model="module.title">{{module.title}}</h2>
          </div>
        <div class="content-box-item-num-10 clearfix">
          <div class="content-box-item-num-10-left">
            <ul>
              <li v-for="(item,index) in module.items"  v-if="index === 0" class="ul-left ul-left-current" :li-id="index">{{item.title}}</li>
              <li v-for="(item,index) in module.items"  v-if="!index == 0" class="ul-left ul-left-current-no" :li-id="index">{{item.title}}</li>
            </ul>
          </div>
          <div class="content-box-item-num-10-right">
            <div class="div-right div-right-current"  v-for="(item,index) in module.items"  :div-id="index"  v-if="index === 0" >
              <p><br/></p>
              <div v-for="item1 in  item.contents">{{item1}}</div>
              <img :src="item.imageUrl">
            </div>
            <div class="div-right  div-right-current-no"  v-for="(item,index) in module.items"  :div-id="index" v-if="!index == 0" >
                <div v-for="item1 in  item.contents">{{item1}}</div>
              <img :src="item.imageUrl">
            </div>
          </div>
        </div>
      </div>

       </div>
       <!--第十个结束--->

        <!--第十一个开始-->
      <div v-if="module.displayType === 11">
        <div class="light-group">
            <div class="content-title">
                <h2 x-model="module.title">{{module.title}}</h2>
            </div>
            <div class="content-box  content-box-bg clearfix" >
              <div class="content-box-item-num-11 " v-for="item in module.items">
                  <i class="fa" :class="item.classType"></i>
                  <h4>{{item.title}}</h4>
                
          </div>
            </div>
        </div>
       </div>

       <!--第十一个结束--->

      </div>
     </div>

   </div>

</template>

<script>

export default {
  data() {
    return {
      h1Title: "K8S域",
      description: "通过将系统内部的对象“分配”到不同的域中，形成逻辑上分组的不同项目、小组或用户组，便于不同的分组在共享使用整个集群的资源的同时还能被分别管理",
      modules: [{
          title: "资源",
          items: [{
            classType: 'fa-server',
            title:"Services"
          }, {
            classType: 'fa-houzz',
            title:"Deployements"
          }, {
            classType: 'fa-glass',
            title:"Routers"
          }, {
            classType: 'fa-balance-scale',
            title:"LoadBablances"
          }, {
            classType: 'fa-copy',
            title:"Replicas"
          }, {
            classType: 'fa-caret-square-o-right',
            title:"Pods"
          }, {
            classType: 'fa-cog',
            title:"Configs"
          }, {
            classType: 'fa-magic',
            title:"Events"
          }, {
            classType: 'fa-microchip',
            title:"Nodes"
          }],
          displayType: 11
        }
      ]
    };
  },
  methods: {
    onCreate(event){
      console.log(event);
        this.$router.push({ name: 'CreateGeneralApply'});
    }
  },
   mounted:function(){
    $(".content-box-item-num-7-left ul li").mouseover(function(){
      $(".content-box-item-num-7-left ul li").css({"color":"#333","background-color":"#fff"});
      $(this).css({"color":"#fff","background-color":"#2883D6"});
    });
    $(".content-box-item-num-7-left ul .ul-left").mouseover(function(){
    var curId = $(this).attr("li-id");
    $("div[div-id='"+curId+"']").addClass("div-right-current");
     $("div[div-id!='"+curId+"']").addClass("div-right-current-no");
     $("div[div-id='"+curId+"']").removeClass("div-right-current-no");
     $("div[div-id!='"+curId+"']").removeClass("div-right-current");
      $("li[li-id='"+curId+"']").addClass("ul-left-current");
     $("li[li-id!='"+curId+"']").addClass("ul-left-current-no");
     $("li[li-id='"+curId+"']").removeClass("ul-left-current-no");
     $("li[li-id!='"+curId+"']").removeClass("ul-left-current");

    });

   $(".content-box-item-num-10-left ul li").mouseover(function(){
      $(".content-box-item-num-10-left ul li").css({"color":"#333","background-color":"#fff"});
      $(this).css({"color":"#fff","background-color":"#2883D6"});
    });
    $(".content-box-item-num-10-left ul .ul-left").mouseover(function(){
    var curId = $(this).attr("li-id");
    $("div[div-id='"+curId+"']").addClass("div-right-current");
     $("div[div-id!='"+curId+"']").addClass("div-right-current-no");
     $("div[div-id='"+curId+"']").removeClass("div-right-current-no");
     $("div[div-id!='"+curId+"']").removeClass("div-right-current");
      $("li[li-id='"+curId+"']").addClass("ul-left-current");
     $("li[li-id!='"+curId+"']").addClass("ul-left-current-no");
     $("li[li-id='"+curId+"']").removeClass("ul-left-current-no");
     $("li[li-id!='"+curId+"']").removeClass("ul-left-current");

    });

  }
}
</script>

<style scoped>
.content-top{
  height: 350px;
  background:    url('../../../assets/k8s/infoDetail.jpg')  70%  20%  no-repeat;
  background-size:100% 100%;
}
.content-title{
  text-align:left;
  padding-left:50px;
  padding-top:20px;
  padding-bottom:20px;
}

.col{
  color:#ffffff
}
.content-box{
  padding-left:50px;
  text-align: center;
  width:92%;
}
.content-box-bg{
  background-color:#ffffff;
}
.content-box-item-3{
  display: inline-block;
  width: 32%;
}
.content-box-item-4{
  display: inline-block;
  width: 24%;
}
.content-box-item-4-min{
  width: 21%;
  margin:20px 2%;
}
.content-box-item-num-2{
  text-align: center;
  background-color: #ffffff;
  height:300px;
  margin:5px;
}
.content-box-item-num-2>img{
    margin-top:30px;
    margin-bottom:30px;
}
.content-box-item-num-3{
  text-align: left;
  height:300px;
  margin:5px;
  background-color: #ffffff;
}
.content-box-item-2{
  width: 49%;
}
.content-box-item-num-6{
  text-align: left;
  display: inline-block;
  background-color: #ffffff;
  height:140px;
  margin:5px;
}

.content-box-item-num-6>img{
  padding:10px;
  float:left;
}
.content-box-item-num-6>div{
  padding-top:10px;
  width:80%;
  float:left
}
.content-box-item-num-6>div>h3{
  color: #141a24;
    font-size: 16px;
    font-weight: 500;
}
.content-box-item-num-6>div>p{
  padding-top:10px;
   color: #666;
    font-size: 14px;
    line-height: 24px;
}
.content-box-item-num-7{
  text-align: left;
  background-color:#ffffff;
  height:400px;
  margin:5px;
}
.content-box-item-num-7-left{
  width:25%;
  float:left;
}
.content-box-item-num-7-left>ul>.ul-left{
    padding: 20px 0 20px 56px;
    color: #333;
    font-size: 16px;
    border: 1px solid #e6e6e6;
    margin-top: -1px;
    margin-bottom: -1px;
    margin-left: -1px;
    font-weight: 400;
    cursor: pointer;
}
.content-box-item-num-7-left>ul>.ul-left-current{
    border-right-color: #FFF;
    border-left-color: #108cee;
    color: #108cee;
}
.content-box-item-num-7-left>ul>.ul-left-current-no{
  color: #333;
  border-left-color: #e6e6e6;
}
.content-box-item-num-7-right{
  width:70%;
  float:left;
  padding-left:25px;
}
.content-box-item-num-7-right p{
  align:left;
}
.content-box-item-num-7-right img{
  align:center;
}
.content-box-item-num-7-right>.div-right-current-no{
  display:none;
}
.content-box-item-num-7-right>.div-right-current{
  display:true;
}
.content-box-item-num-8{
  background-color:#ffffff;
  float:left;
}
.content-box-item-num-8>div{
    height: 330px;
    padding: 20px 40px;
    text-align: center;

}
.content-box-item-num-8>div>img{
  text-align: center;
  margin: 0 auto 5px;
}
.content-box-item-num-8>div>h4{
    color: #666;
    line-height: 1.25;
    font-size: 16px;
    margin: 15px 0 5px;
    text-align: center;
    padding-bottom: 10px;
}
.content-box-item-num-8>div>p{
    font-size: 14px;
    color: #666;
    line-height: 22px;
    text-align: left;
}
.content-box-item-num-9{
   padding:10px;
}
.content-box-item-num-9-left{
  width:28%;
  float:left;

}
.content-box-item-num-9-right{
  width:70%;
  float:left;
  text-align: left;
}
.content-box-item-num-9-left>img{
  float:left;
}
.content-box-item-num-9-left>h4{
  float:left;
  margin-left: 20px;
  margin-top: 20px;
  color: #666;
    line-height: 1.25;
    font-size: 16px;
    padding-bottom: 10px;
}
.content-box-item-num-9-right>p{
    font-size: 14px;
    color: #666;
    line-height: 22px;
    text-align: left;
}

.content-box-item-num-10{
  text-align: left;
  background-color:#ffffff;
  height:400px;
  margin:5px;
}
.content-box-item-num-10-left{
  width:25%;
  float:left;
}
.content-box-item-num-10-left>ul>.ul-left{
    padding: 20px 0 20px 56px;
    color: #333;
    font-size: 16px;
    border: 1px solid #e6e6e6;
    margin-top: -1px;
    margin-bottom: -1px;
    margin-left: -1px;
    font-weight: 400;
    cursor: pointer;
}
.content-box-item-num-10-left>ul>.ul-left-current{
    border-right-color: #FFF;
    border-left-color: #108cee;
    color: #108cee;
}
.content-box-item-num-10-left>ul>.ul-left-current-no{
  color: #333;
  border-left-color: #e6e6e6;
}
.content-box-item-num-10-right{
  width:70%;
  float:left;
  padding-left:25px;
}
.content-box-item-num-10-right p{
  align:left;
}
.content-box-item-num-10-right img{
  align:center;
}
.content-box-item-num-10-right>.div-right-current-no{
  display:none;
}
.content-box-item-num-10-right>.div-right-current{
  display:true;
}
.content-box-item-num-10-right>.div-right>div{
  margin:30px;
}

.content-box-item-num-11{
  float:left;
  border: 1px solid #eceff5;
  background: #eceff5;
  padding: 20px  0px;
  width:12%;
  margin:2%;
}
.content-box-item-num-11>h4{
  padding-top:15px;
}
.content-box-item-num-4{
  text-align: left;
  vertical-align: top;
  height:150px;
  margin:5px;
}
.content-box-item-num-5{
  text-align: center;
  vertical-align: middle;
  width: 20%;
  height: 112px;
  margin:5px;
  border: 1px solid #d2d2d2;
  background-color:#ffffff;
}

.content-box-item-num-4>div{
  margin-top:0px;
}
.content-body{

}
.content-top-text{
    padding: 50px;
    width:600px;
}

.square-image{
  width:70%;
  height:60%;
  background-color:red;
}
.content-title>h2{border-bottom:3px solid #2a89e0;margin-bottom:30px;display: inline-block;font-size: 20px;font-family: '微软雅黑';line-height: 35px;font-weight: 400}
.light-group{
  background-color: rgba(189, 230, 230, 0.18);
  padding-bottom :30px;
  text-align:center;
}
.dark-group{
  background-color: #e0f2f8;
  padding-bottom :30px;
  text-align:center;
}
.black-group{
  background-color: #0a2a53;
  padding-bottom :30px;

}
.black-group>div>h2{
  color: #ffffff;
}
.content-box-item-num-3 .top{
  width:100%;
  height:6px;
  background: #00c1de;
}
.c-title{
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    overflow: hidden;
    font-size: 16px;
    color: #373d41;
}
.t1 {
    font-weight: 600;
    margin-right: 5px;
}
.desc {
    font-family: Microsoft YaHei;
    font-size: 12px;
    color: #73777a;
    margin-top: 7px;
    height: 14px;
    line-height: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 22px;
}
.line {
    width: 98%;
    height: 1px;
    background: #d7d8d9;
    margin: 0 auto;
}
.how {
    width: 341px;
    height: 33px;
    margin: 0 auto;
    overflow: hidden;
    font-family: Microsoft YaHei;
    font-size: 0;
    color: #373d41;
    letter-spacing: 0;
    line-height: 28px;
    margin-bottom: 6px;
}
.tip_box {
    width: 341px;
    margin: 0 auto;
    font-family: Microsoft YaHei;
    font-size: 14px;
    color: #373d41;
    letter-spacing: 0;
    margin-bottom: 15px;
}
.tips {
    font-family: Microsoft YaHei;
    font-size: 12px;
    color: #73777a;
    margin: 15px auto 14px;
}
.h_list {
    font-size: 14px;
    display: inline-block;
    color: #373d41;
    transition: all .3s ease 0s;
}
.div-padding-10{
  padding:10px;
}
.tip-box>p{
   font-size: 14px;
  color: #373d41;
  transition: all .3s ease 0s;
}
.align-left{
  text-align: left;
}
.fa{font-size: 50px;color:#688fd9;}
</style>
