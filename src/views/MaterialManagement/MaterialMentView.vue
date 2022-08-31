<template>
  <div>
    <span>新增材料</span>
    <div class="NameandPress">
      <p>材料名称 <input type="text" /></p>
      <p>地址材料 <el-button type="info">上传材料</el-button></p>
    </div>
    <div class="UploadaAile">
      <p>上传文件(只能上传:xlsx,elsx等条件限制)</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span{
	margin-left: 2.5rem;
	margin-top: 1.875rem;
	display: inline-block;
}
.NameandPress{
	// background-color: skyblue;
	width: 18.75rem;
	height: 7.5rem;
	margin-top: .625rem;
	// text-align: center;
	margin-left: 11.1875rem;
}
.UploadaAile {
  width: 18.25rem;
  height: 13.5625rem;
  // background-color: red;
  border: 1px solid black;
	margin-left: 27.25rem;
	text-align: center;
	line-height: 7.3125rem;
	color: gray;
}
</style>
