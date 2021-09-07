<template>
	<!--
		在单文件组件中，template标签中写的是其组件的html结构，注意:只能有一个根标签，所以需要用div标签包裹
	-->
	<div>
		<h2>姓名:{{name}}</h2>
		<h2>年龄:{{age}}</h2>
	</div>
</template>

<script>
	//script标签写的是创建组件的内容
	//前面所接触到的组件都属于非单文件组件，而接下来我们需要知道一个以.vue为后缀的组件，为单文件组件，这是在Vue脚手架中使用的文件。
	export default{
		name : "Student",//通过name属性配置组件名   这里是指定当前组件名称
		data(){
			return{
				name : "张三",
				age : 18
			};
		},
	};
	//style 写的是该组件的样式内容
</script>

<style>
	div{
		background-color: orange;
	}
</style>
