<template>
  <div>
    <!-- /**顶部三个搜索框 */ -->
    <div class="search">
      <p>姓名：<input placeholder="请输入姓名" /></p>
      <p>所属部门：<input placeholder="请输入部门" /></p>
      <p>手机号：<input placeholder="请输入手机号" /></p>
    </div>

    <!-- 搜索按钮 -->
    <div class="button">
      <div class="left">
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-back">重置</el-button>
      </div>

      <el-button class="el-buttons" icon="el-icon-circle-plus-outline"
        >新增用户</el-button
      >
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 95%">
      <el-table-column prop="id" label="id" width="60"> </el-table-column>
      <el-table-column prop="name" label="用户名称" width="160"> </el-table-column>
      <el-table-column prop="user" label="账号" width="160"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="160"> </el-table-column>
      <el-table-column prop="roles" label="所属角色" width="160"> </el-table-column>
      <el-table-column prop="zhiji" label="所属职级" width="160"> </el-table-column>
      <el-table-column prop="bumen" label="所属部门" width="160"> </el-table-column>
      <el-table-column prop="" label="操作" width="260">
				<template slot-scope="scope">
        <el-button type="primary" size="small" @click="xiu(scope.row)">修改</el-button>
        <el-button type="danger" size="small">删除</el-button>

      </template>
			</el-table-column>

    </el-table>

		<!-- 分页 -->
		<div class="pagination">
			<p>共20条</p>
			<p><el-button>上一页</el-button></p>
			<p>2/5</p>
			<p><el-button>下一页</el-button></p>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**element表格数据 */
      tableData: [
        {
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },
				{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },{
					id:1,
          name: '王小虎',
					user:'admin',
          phone: 15290355502,
					roles:"小丑",
					zhiji:"老总",
					bumen:"老总部",
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

.search {
  //搜索
  display: flex;
  justify-content: space-around;
  margin: 0.625rem 0;
  input {
    width: 18.75rem;
    height: 1.875rem;
  }
}
.button {
  // background-color: red;
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
	margin-bottom: 3.125rem;
  .el-buttons {
    background-color: #c2c2fb;
    color: white;
  }
}
.el-table{
	margin-left: 3.75rem;

}
.pagination{
	width: 40%;
	height: 2.5rem;

	display: flex;
	justify-content: space-around;
	text-align: center;
	margin-bottom: 3.75rem;
	margin-top: .9375rem;
	line-height: 2.5rem;
	margin-left: 45.625rem;
	p{
		padding: 0;
		margin: 0;
	}
}
</style>
