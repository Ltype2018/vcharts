<template>
  <div class="e-table">
    <template>
      <div v-if="countryData">
        <el-table
          :data="countryData"
          style="width: 100%"
          border
          :default-sort="{prop:'confirmedCount', order:'descending'}"
        >
          <el-table-column prop="countryName" label="国家" width="180" sortable></el-table-column>
          <el-table-column prop="confirmedCount" label="全部病例" width="180" sortable></el-table-column>
          <el-table-column prop="currentConfirmedCount" label="当前病例" sortable></el-table-column>
          <el-table-column prop="deadCount" label="死亡人数" sortable></el-table-column>
          <el-table-column prop="curedCount" label="治愈病例" sortable></el-table-column>
          <el-table-column prop="deathRate" label="死亡率" :formatter="formatterRate"></el-table-column>
        </el-table>
      </div>
    </template>
  </div>
</template>


<script>
export default {
  name: "ETable",
  computed:{
    countryData(){
      return this.$store.getters.globalData
    }
  },
  created(){
    this.$store.dispatch('getCountriesData')
  },
  methods:{
    formatterRate(row){
      let rate = row.deadCount/row.confirmedCount
      rate = Number(rate*100).toFixed(2)+"%"
      return rate
    }
  }
};
</script>