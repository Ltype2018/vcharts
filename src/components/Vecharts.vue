<template>
  <div class="v-echarts" ref="charts">echarts</div>
</template>

<script>
import echarts from "echarts";
import pieoption from "@/utils/pieoption";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Vecharts",
  computed: {
    ...mapState("origindata", ["isDataGet"]),
    ...mapGetters("echartsdata",["tenCountryAndOtherCountryData"]),
    mixPieoptionData() {
        if(this.isDataGet){
        let tempdata = this.tenCountryAndOtherCountryData.map(
          ({ countryName, confirmedCount }) => {
            return {
              value: confirmedCount,
              name: countryName,
            };
          }
        );
        pieoption.series[0].data = tempdata;
        return pieoption;
        }else{
            return ({})
        }

    },
  },
  watch:{
      isDataGet(){
          if(this.isDataGet){
              this.initCharts()
          }
      }
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(this.$refs.charts);
      myChart.setOption(this.mixPieoptionData);
    },
  },
};
</script>

<style scoped>
.v-echarts {
  width: 800px;
  height: 600px;
}
</style>