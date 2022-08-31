<template>
  <div>
    <!-- 顶部权限管理搜索框，按钮等 -->
    <div class="searchheader">
      <span>权限管理</span>
      <input type="text" placeholder="请输入姓名" />
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-back">重置</el-button>
      <el-button class="el-buttons" icon="el-icon-circle-plus-outline"
        >新增权限</el-button
      >
    </div>
    <!-- 表格部分 -->
    <el-table :data="tableData3" height="250" border style="width: 95%">
      <el-table-column prop="date" label="菜单名称" width="200">
      </el-table-column>
      <el-table-column prop="name" label="菜单路径" width="200">
      </el-table-column>
      <el-table-column prop="name" label="排序" width="200"> </el-table-column>
      <el-table-column prop="name" label="菜单图标" width="200">
      </el-table-column>
      <el-table-column prop="name" label="菜单类型" width="200">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="200"> </el-table-column>
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
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.searchheader {
  margin-left: 1.25rem;
  margin-top: 1.875rem;
  span {
    margin-right: 0.625rem;
  }
  input {
    width: 12.5rem;
    height: 1.875rem;
    margin-right: 10px;
  }
  .el-button:nth-child(5) {
    background-color: #c2c2fb;
  }
}
.el-table {
  margin: 20px;
}
.pagination {
  width: 40%;
  height: 2.5rem;

  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 3.75rem;
  margin-top: 0.9375rem;
  line-height: 2.5rem;
  margin-left: 45.625rem;
  p {
    padding: 0;
    margin: 0;
  }
}
</style>
