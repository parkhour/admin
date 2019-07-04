<template>
    <div>
      </br>
      <h2>Reservations</h2>  
       <template v-if="loading==false">  
     </br>
        </br> 
      <div class="d-flex flex-column">
           <div>
               <div class="d-flex justify-content-center">
                  <input type="text" v-model="searchValue" class="form-control col-5 mr-2">
                  <Button  @click.prevent="search" class="btn btn-success  rounded-0">
                    Search
                  </Button>
              </div> 
           </div>  
           </br>
           <div class="mx-4">
             <Table :datanya="paymentsHistory" :fieldnya="field" class="col-12"/> 
           </div>
      </div> 
        </template>
      <template v-else>
         <div>
          <b-spinner class="m-5" label="Busy"></b-spinner>
        </div>
      </template>       
    </div>
</template>

<script>
import axios from '@/api/axios'
import Table from "@/components/Table.vue"
import data from '@/assets/mockData.json'
export default {
    name:"payment",
    components:{
        Table,
        
},
data(){
  return{
    paymentsHistory:[],
    field:['no','licencePlate','entrance','status','Number','totalCharge'],
    searchValue:'',
    paymentsHistorySearch:[],
    loading:true
  }
},
created() {
  this.getPayments()  
},
methods: {
  getPayments(){
          data.map((datum)=>{
              if(!datum.totalCharge){
                  datum.totalCharge= '-'                 
              }           
               datum.entrance = moment(new Date(datum.entrance)).format('llll')
          })
          console.log('kesini')
          this.paymentsHistory=data 
          this.paymentsHistorySearch=this.paymentsHistory
          this.loading=false
  },
  search(){
     if(this.searchValue==""){
       this.paymentsHistory=this.paymentsHistorySearch      
     }else{
        let regex = new RegExp(this.searchValue, 'i')
        let result = this.paymentsHistory.filter(el => {
            return (
                el.licencePlate.match(regex)
            )
        })
        this.paymentsHistory = result
     }
  },
  moment: function(date) {
      return moment(date)
    },
},
    
}
</script>
<style>
.inpsearch {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #dadadada;
  width:400px;
}
.inpsearch:focus {
  border-color: black
}
  
</style>
