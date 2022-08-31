<template>
  <div>
    <el-button class="el-buttons" icon="el-icon-plus">添加审批流程</el-button>

    <!-- 表格部分 -->
    <el-table :data="tableData" border style="width: 98%">
      <el-table-column prop="date" label="id"> </el-table-column>
      <el-table-column prop="name" label="流程名称"> </el-table-column>
      <el-table-column prop="name" label="状态"> </el-table-column>
      <el-table-column prop="name" label="最后修改人"> </el-table-column>
      <el-table-column prop="name" label="最后修改时间"> </el-table-column>
      <el-table-column prop="name" label="操作"> </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-button icon="el-icon-arrow-left"></el-button>
      <el-button
        v-for="(item, index) in page"
        :key="index"
        @click="pagebutton(index)"
        :class="{ active: i == index }"
        >{{ item.pagenum }}</el-button
      >
      <el-button icon="el-icon-arrow-right"></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /**表格数据 */
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      page: [
        {
          pagenum: 1
        },
        {
          pagenum: 2
        },
        {
          pagenum: 3
        },
        {
          pagenum: 4
        },
        {
          pagenum: 5
        },
        {
          pagenum: 6
        },
        {
          pagenum: 7
        },
        {
          pagenum: 8
        },
        {
          pagenum: 9
        }
      ],
      i: 0
    }
  },

  methods: {
    pagebutton(index) {
      console.log(index)
      this.i = index
    }
  }
}
</script>
<style lang="scss" scoped>
.el-buttons {
  background-color: #c2c2fb;
  color: white;
  // width: 149px;
  // height: 33px;
  text-align: center;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
}
.el-table {
  margin-top: 1.25rem;
  margin-left: 1.25rem;
}
.pagination {
  margin-top: 1.25rem;
  margin-right: 1.25rem;
  text-align: right;
}
.active {
  //分页背景色
  background-color: #1990ff;
  color: white;
}
</style>
