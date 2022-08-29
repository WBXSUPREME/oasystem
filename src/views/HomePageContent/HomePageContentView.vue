<template>
  <div>
    <!-- 顶部第一行表格 -->
    <div class="one">
      <!-- 待办事项表格 -->
      <div class="ToDo">
        <li>
          <h2>待办事项</h2>
          <a href="">查看更多</a>
        </li>
        <li>
          <p>【代办事项】您申请的报销还未审批，请及时查看，防止过期</p>
          <p>2022年8月</p>
        </li>
        <li>
          <p>【代办事项】您申请的报销还未审批，请及时查看，防止过期</p>
          <p>2022年8月</p>
        </li>
        <li>
          <p>【代办事项】您申请的报销还未审批，请及时查看，防止过期</p>
          <p>2022年8月</p>
        </li>
        <li>暂无代办事项</li>
      </div>
      <!-- 日期表 -->
      <div class="DateTable">
        <!-- 日期选择器 -->
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        <!-- 日期选择器 -->
      </div>
    </div>

    <!-- 第二行表格 -->
    <div class="two">
      <!-- 员工数据 -->
      <div class="TwoLeft">
        <div class="TwoLeftTop">
          <p>员工数据</p>
        </div>
        <div class="TwoLeftBottom">
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
          <li>
            <p>1111111111</p>
            <p>2000人</p>
          </li>
        </div>
      </div>
      <!-- 员工地区分布 -->
      <div class="TwoRight">
        <div class="TwoRightTop">
          <p>员工地区分布</p>
        </div>
        <div id="OnTheRightSideOfThePieChart"></div>
      </div>
    </div>

    <!-- 第三行员工生日 -->
    <div class="three">
      <div class="ThreeTop">
        <p>员工生日</p>
      </div>
      <div id="birthday"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: ''
    }
  },
  mounted() {
    var chartDom = document.getElementById('OnTheRightSideOfThePieChart')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    option && myChart.setOption(option)

    var chartDom = document.getElementById('birthday')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: 'category',
        data: [
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun',
          'adfadsf',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun',
          'adfadsf'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130,
            20, 30
          ],
          type: 'bar'
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.one {
  width: 100%;
  display: flex;
  .ToDo {
    width: 50.1875rem;
    height: 20.5rem;
    border: 0.0625rem solid black;
    // background-color: red;
    margin-top: 1.5625rem;
    margin-left: 1.125rem;
    li {
      width: 50.1875rem;
      height: 4rem;
      line-height: 4rem;
      // background-color: skyblue;
      list-style: none;
      border-bottom: 1px solid #bbbbbb;
      display: flex;
      justify-content: space-around;
    }
  }
  .DateTable {
    width: 32.5625rem;
    height: 20.5rem;
    // background-color: skyblue;
    margin-left: 0.625rem;
    margin-top: 1.5625rem;
    margin-left: 2rem;
  }
}
.two {
  width: 100%;
  display: flex;
  .TwoLeft {
    width: 46%;
    height: 22.5rem;
    border: 0.0625rem solid black;
    // background-color: rgb(8, 0, 255);
    margin-top: 2.1875rem;
    margin-left: 1.125rem;
    .TwoLeftTop {
      width: 40.9375rem;
      height: 2.875rem;
      // background-color: aqua;
      border-bottom: 2px solid #bbbbbb;
      line-height: 2.875rem;
      p {
        width: 6rem;
        height: 2rem;
        font-size: 1.125rem;
        text-align: center;
        color: rgba(16, 16, 16, 100);
        // margin-top: 7px;
        // background-color: red;
      }
    }
    .TwoLeftBottom {
      width: 40.9375rem;
      height: 19.625rem;
      // background-color: aqua;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      align-items: center;
      li {
        width: 13.5625rem;
        height: 5.8125rem;
        // background-color: aquamarine;
        list-style: none;
        border-right: 0.0625rem solid gray;
        text-align: center;
        p {
          margin-top: 0.6875rem;
          margin-bottom: 0.625rem;
        }
      }
      li:nth-child(3n) {
        border: none;
      }
    }
  }
  .TwoRight {
    width: 47%;
    height: 22.5rem;
    border: 0.0625rem solid black;
    // background-color: rgb(8, 0, 255);
    margin-top: 2.1875rem;
    margin-left: 2.125rem;
    #OnTheRightSideOfThePieChart {
      width: 100%;
      height: 100%;
    }
    .TwoRightTop {
      width: 40.9375rem;
      height: 2.875rem;
      // background-color: aqua;
      border-bottom: 2px solid #bbbbbb;
      line-height: 2.875rem;
      // margin-left: 20px;
      padding-left: 14px;
      font-size: 18px;
    }
  }
}
.three {
  width: 85rem;
  height: 18rem;
  // background-color: pink;
  margin-left: 1.0625rem;
  margin-top: 2.5625rem;
  border: 0.0625rem solid black;
  .ThreeTop {
    width: 100%;
    height: 2.875rem;
    // background-color: aqua;
    // border-bottom: 2px solid #bbbbbb;
    line-height: 2.875rem;
    p {
      margin-left: 6.25rem;
      font-size: 18px;
      // margin-top: 10px;
    }
  }
  #birthday {
    width: 100%;
    height: 100%;
  }
}
</style>
