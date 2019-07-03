<template>
  <div class="col-">
  <select @change="onChange($event)" class="form-control col-6 ml-3 my-2 bordered-0" v-model="key">
   <option value="semua">All Weeks </option>
   <option value="satu">Week 1 (20/6/2019-27/6/2019)</option>
   <option value="dua">Week 2 (28/06/2019-05/07/2019)</option>
</select>
    <div class="col-12">
      <line-chart
      :width="800"
      :height="300"
      :labels="['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']"
      :datasets="displayedDatasets"
      :options="$options.options"
    ></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart';

const options = {
  // Omitted...
};

export default {
  name: 'monthly-sales-chart',
      options,
      components: {
        LineChart
      },
      data() {
        return {
          datasets : {
          satu: {
            label: 'Minggu 1',
            borderColor: 'rgba(50, 115, 220, 0.5)',
            backgroundColor: 'rgba(50, 115, 220, 0.5)',
            fill: false,   
            data: [1322000, 1200000, 750000,1206000, 1554000, 1759000,1300011]
          },
          dua: {
            label: 'Week 2',
           borderColor: 'rgba(255, 56, 96, 0.5)',
           backgroundColor: 'rgba(255, 56, 96, 0.5)',
            fill: false,   
            data: [1220000, 1430000, 1750000,1160000,1554000, 1159000,1300011]
          },
          },
          selectedYears: ["dua","satu"],
          key: ""
        }
      },
      watch: {   
      
        
      },
      computed: {
        displayedDatasets() {
          return this.selectedYears.map(year => this.datasets[year]);
        }   
      },
      methods: {
            onChange(event) {

               if(event.target.value!=="semua"){
                  this.selectedYears=[event.target.value]
               }else{
                  this.selectedYears = ["satu","dua"]

               }
            },        
        },
           
}
</script>