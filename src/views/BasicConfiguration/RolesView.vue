<template>
  <div class="user">
    <div class="header">
      <span>姓名：<input type="text" placeholder="请输入姓名" /></span>
      <span>所属部门：<input type="text" placeholder="请输入部门" /></span>
      <span>手机号：<input type="text" placeholder="请输入手机号" /></span>
    </div>
    <div class="but">
      <el-button icon="el-icon-search" size="mini">查询</el-button>
      <el-button icon="el-icon-refresh-right" size="mini">重置</el-button>
      <el-button @click="$router.push('/add-user')" type="success" icon="el-icon-circle-plus-outline" size="mini">新增用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="用户名称"> </el-table-column>
      <el-table-column prop="address" label="账号"> </el-table-column>
      <el-table-column prop="address" label="手机号"> </el-table-column>
      <el-table-column prop="address" label="所属角色"> </el-table-column>
      <el-table-column prop="address" label="所属职级"> </el-table-column>
      <el-table-column prop="address" label="所属部门"> </el-table-column>
      <el-table-column prop="address" label="操作" width="220px">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
          size="mini"
          @click="$router.push('/details')">详情</el-button>
      </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->
    <!-- 分页 -->
    <!-- <pagin :page="page"></pagin> -->
    <!-- 分页 -->
  </div>
</template>

<script>
// import pagin from '../components/paging.vue'
export default {
  name: '',
  // components: {
  //     pagin
  // },
  data() {
    return {
        page:1,
      tableData: [
        {
          id: 1,
          name: '超级管理员',
          address: 'admin'
        },
        {
          id: '2',
          name: '王小虎',
          address: '1 1517 弄'
        },
        {
          id: '3',
          name: '王小虎',
          address: '1 1519 弄'
        },
        {
          id: '4',
          name: '王小虎',
          address: '1 1516 弄'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {

  }
}
</script>
<style scoped lang="scss">

.user {
  width: 864px;
}
.header {
  width: 100%;
  font-size: 16px;
  color: rgba(119, 119, 119, 0.884);
  span {
    margin-right: 60px;
    input {
      padding: 3px 5px;
      font-size: 12px;
      outline: none;
    }
  }
}
.but {
  width: 100%;
  margin: 20px 0;
  .el-button:nth-child(3) {
    float: right;
    margin-right: 70px;
    background-color: #bfbfec;
    border: 1px solid #bfbfec;
  }
}
</style>
