<template>
  <div id="app">
    <template v-loading.fullscreen.lock="fullscreenLoading">
    </template>
    <div class="Echarts">
      <Vecharts />
    </div>
    <div class="Etable">
      <ETable />
    </div>
  </div>
</template>

<script>
import ETable from "@/components/ETable";
import { mapGetters, mapState } from "vuex";
import Vecharts from "@/components/Vecharts";
export default {
  name: "App",
  components: {
    ETable,
    Vecharts,
  },
  data() {
    return {
      fullscreenLoading:true
    };
  },
  computed: {
    ...mapGetters("echartsdata", ["tenCountryAndOtherCountryData"]),
    ...mapState("origindata",['isDataGet'])
  },
  watch:{
    'isDataGet'(){
      if(this.isDataGet){
        this.fullscreenLoading =  false
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.Etable {
  width: 800px;
}
</style>
