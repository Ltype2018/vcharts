<template>
  <div class="e-table">
    <template>
      <div v-if="globalStats">
        <el-table :data="globalStats.countries" style="width: 100%" border :default-sort="{prop:'cases', order:'descending'}">
          <el-table-column prop="name" label="国家" width="180" sortable></el-table-column>
          <el-table-column prop="cases" label="病例" width="180" sortable></el-table-column>
          <el-table-column prop="deaths" label="死亡人数" sortable></el-table-column>
        </el-table>
      </div>
    </template>
  </div>
</template>


<script>
import { getGlobalStats } from "@/api";
export default {
  name: "ETable",
  data() {
    return {
      globalStats:{}
    };
  },
  mounted() {
    getGlobalStats().then((res) => (this.globalStats = res.data));
  },
};
</script>