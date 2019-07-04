<template>
   <div>
       </br>
      <h2>History Payments</h2>   
      <template v-if="loading==false">
       </br>
        </br> 
      <div class="d-flex flex-column">
           <div>
               <div class="d-flex justify-content-center">
                  <input type="text" v-model="searchValue" class="form-control col-5 mr-2">
                  <Button  @click.prevent="search" class="btn btn-success rounded-0">
                    Search
                  </Button>
              </div> 
           </div>  
           </br>
           <div class="mx-4">
             <Table :datanya="paymentsHistory" :fieldnya="field"/> 
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
export default {
    name:"payment",
    components:{
        Table,
        
},
data(){
  return{
    paymentsHistory:[],
    field:['no','licensePlate','parkingStart', 'parkingEnd', 'totalCharge','status'],
    searchValue:'',
    paymentsHistorySearch:'',
    loading:true

  }
},
created() {
  this.getPayments()  
},
methods: {
  getPayments(){
      axios
      .get("/payments",{
        headers: {
          authorization:localStorage.access_token
        }
      })
        .then(({data})=>{
          console.log(data)
          this.paymentsHistory=data  
          this.paymentsHistorySearch=data
           data.map((datum)=>{
              datum.parkingStart = moment(datum.parkingStart).format('llll')
                datum.parkingEnd = moment(datum.parkingEnd).format('llll')
          })
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          this.loading=false
        })
  },
  search(){
     if(this.searchValue==""){
       this.paymentsHistory=this.paymentsHistorySearch      
     }else{
        let regex = new RegExp(this.searchValue, 'i')
        let result = this.paymentsHistory.filter(el => {
            return (
                el.licensePlate.match(regex)
            )
        })
        this.paymentsHistory = result
     }
  }
},
    
}
</script>
