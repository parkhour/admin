<template>
    <div>
        <h2>PAYMENT HISTORY</h2>    
    <div class="col-12 my-4 d-flex justify-content-between">
    <Table :datanya="paymentsHistory" :fieldnya="field"/>
    </div>        
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
    field:['no','licensePlate','parkingStart', 'parkingEnd', 'totalCharge','status']

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
        })
        .catch((err)=>{
          console.log(err)
        })
  }
},
    
}
</script>
