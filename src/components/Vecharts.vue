<template v-if="option">
    <div class="v-echarts" ref="charts">
        echarts
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:"Vecharts",
    props:{
        option:{
            type:Object,
            required:true
        }
    },
    mounted(){
        this.initCharts(this.option)
    },
    methods:{
        initCharts(){
            let myChart = echarts.init(this.$refs.charts)
            myChart.setOption(this.option)
        }
    }
}
</script>

<style scoped>
.v-echarts{
    width: 800px;
    height: 600px;
}
</style>