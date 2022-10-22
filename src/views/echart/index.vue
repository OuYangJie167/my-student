<template>
  <div id="student-echart" class="student-echart">
    <div class="areaChart"></div>
    <div class="sexChart"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  async createI() {
    this.getStuList();
  },
  computed: {
    ...mapState({
      stuList: (state) => {
        return state.stuList;
      },
    }),
  },
  methods: {
    init() {
      this.getData();
      this.option = {
        title: {
          text: "",
          subtext: "纯属虚构",
          left: "center",
        },
        legend: {
          data: [],
          orient: "vertical",
          left: "left",
        },
        series: {
          name: "",
          type: "pie",
          data: [],
          radius: "55%",
          center: ["50%", "60%"],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: "rgba(0,0,0,.5)",
            },
          },
        },
      };
    },
    async getData() {
      const arr = this.$api.stuList();
      console.log(arr);
      const This = this;
      //   $.ajax({
      //     url: "http://open.duyiedu.com/api/student/findAll?appkey=root123_1607126598790",
      //     success: function (data) {
      //       const list = JSON.parse(data).data;
      //       if (list.length > 0) {
      //         //绘制图表
      //         This.areaChart(list);
      //         This.sexChart(list);
      //       } else {
      //         alert("亲，没有数据哦~");
      //       }
      //     },
      //   });
    },
    areaChart(data) {
      var myChart = echarts.init($(".areaChart")[0]);
      var legendData = [];
      var seriesData = [];

      //{"address":"陕西","appkey":"kaivon_1574822824764","birth":2000,"ctime":1609994625,"email":"3862185@163.com","id":72668,"name":"得到","phone":"13902924233","sNo":"000074975","sex":0,"utime":1609994625}

      /*
                legend的数据格式为['北京','上海','广州']
                series的数据格式为[{ value: 1, name: '北京' },...]
             */

      var newData = {};
      data.forEach(function (item) {
        if (!newData[item.address]) {
          //如果这个条件满足说明这个地名是第一次出现
          newData[item.address] = 1;
          legendData.push(item.address);
        } else {
          newData[item.address]++;
        }
      });

      for (var prop in newData) {
        seriesData.push({
          name: prop,
          value: newData[prop],
        });
      }
      this.option.title.text = "渡一教育学生地区分布统计";
      this.option.legend.data = legendData;
      this.option.series.name = "地区分布";
      this.option.series.data = seriesData;

      myChart.setOption(this.option);
    },
    sexChart(data) {
      var myChart = echarts.init($(".sexChart")[0]);
      var legendData = ["男", "女"];

      //{"address":"陕西","appkey":"kaivon_1574822824764","birth":2000,"ctime":1609994625,"email":"3862185@163.com","id":72668,"name":"得到","phone":"13902924233","sNo":"000074975","sex":0,"utime":1609994625}

      /*
                legend的数据格式为['北京','上海','广州']
                series的数据格式为[{ value: 1, name: '北京' },...]
             */

      var newData = {};

      data.forEach(function (item) {
        if (!newData[item.sex]) {
          newData[item.sex] = 1;
        } else {
          newData[item.sex]++;
        }
      });

      var seriesData = [
        { name: "男", value: newData[0] },
        { name: "女", value: newData[1] },
      ];

      this.option.title.text = "渡一教育学生性别分布统计";
      this.option.legend.data = legendData;
      this.option.series.name = "性别分布";
      this.option.series.data = seriesData;
      console.log(this.option.series.data);
      myChart.setOption(this.option);
    },
    ...mapActions(["getStuList"]),
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.student-echart {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.areaChart,
.sexChart {
  width: 600px;
  height: 600px;
  margin: 0 50px;
  border: 1px solid #000;
}
</style>
