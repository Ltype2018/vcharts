<template>
  <div class="e-table">
    <template>
      <div v-if="countryData">
        <el-table :data="countryData" style="width: 100%" border :default-sort="{prop:'cases', order:'descending'}">
          <el-table-column prop="Country" label="国家" width="180" sortable></el-table-column>
          <el-table-column prop="Confirmed" label="全部病例" width="180" sortable></el-table-column>
          <el-table-column prop="Deaths" label="死亡人数" sortable></el-table-column>
          <el-table-column prop="newcase" label="新增人数" sortable></el-table-column>
          <el-table-column prop="newdeath" label="新增死亡" sortable></el-table-column>
          <el-table-column prop="Active" label="当前病例" sortable></el-table-column>
          <el-table-column prop="Recovered" label="治愈病例" sortable></el-table-column>
          <el-table-column prop="deathrate" label="死亡率" sortable></el-table-column>
        </el-table>
      </div>
    </template>
  </div>
</template>


<script>
import {getOneCountryData} from "@/api";
export default {
  name: "ETable",
  data() {
    return {
      countryData:{}
    };
  },
  mounted() {
    getOneCountryData('china').then(res =>{
      console.log(res.data[res.data.length-1])
      this.countryData = [res.data[res.data.length-1]]})
  },
};
</script>