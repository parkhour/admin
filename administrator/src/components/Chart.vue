<template>
  <div class="col-">
  <select  name="LeaveType" @change="onChange($event)" class="form-control" v-model="key">
   <option value="satu">Minggu 1</option>
   <option value="dua">Minggu 2</option>
    <option value="tiga">Minggu 3</option>
     <option value="empat">Minggu 4</option>
</select>
    <div class="col-8">
      <line-chart
      :width="800"
      :height="300"
      :labels="['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']"
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
            borderColor: '#3e95cd',
            fill: false,   
            data: [600, 550, 750,600, 550, 750,130]
          },
          dua: {
            label: 'Minggu 2',
            borderColor: '#8e5ea2',
            fill: false,   
            data: [900, 550, 750,600, 550, 750,130]
          },
          tiga: {
            label: 'Minggu 3',
            borderColor: '#3cba9f',
            fill: false,   
            data: [800,450,850,600, 550, 750,130]
          },
          empat: {
            label: 'Minggu 4',
            borderColor: '#e8c3b9',
            fill: false,
            data: [600, 450, 750,100, 850, 750,130]
          }
          },
          selectedYears: ["dua"],
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

                this.selectedYears=[event.target.value]
            },        
        },
           
}
</script>