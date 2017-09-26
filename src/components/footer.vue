<template>
  <footer id="footer">
  	<div id="footer-content" class="clearfix">
  		<div class="pull-left">
  			<p>©2017江苏新大陆（Newland） 京ICP备 12022551号  增值电信业务经营许可证A2.B1.B2-20090001</p> 
			<p>公司地址：江苏省南京市建邺区嘉陵江东街18号</p>
		</div>
  		<div class="pull-right">
  			<ul id="footer-nav" class="clearfix">
  				<li>官方微博</li>
  				<li>招贤纳士</li>
  				<li>用户协议</li>
  				<li>法律声明</li>
  			</ul>   
  		</div>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
     
    }
  }
}
</script>
<style  scoped>
	#footer{background-color: #333;height: 70px;padding-top:20px;box-sizing: border-box;min-width:1250px;}
	#footer-content{width: 1200px;margin:0 auto;color:#fff;font-size: 13px;}
	#footer-nav li{float:left;margin-left:10px;cursor: pointer;}
	#footer-nav li:hover{text-decoration: underline;}
</style>