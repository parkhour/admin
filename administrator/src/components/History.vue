<template>
   <div>
      <h2>History Payments</h2>    
      <div class="d-flex flex-column">
           <div>
               <div class="d-flex flex-row float-right">
                  <input type="text" v-model="searchValue" class="form-control col-8">
                  <Button  @click.prevent="search" class="btn btn-info">
                      searching
                  </Button>
              </div> 
           </div>  
           <div>
             <Table :datanya="paymentsHistory" :fieldnya="field"/> 
           </div>
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
    field:['no','licensePlate','parkingStart', 'parkingEnd', 'totalCharge','status'],
    searchValue:'',
    paymentsHistorySearch:''

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
        })
        .catch((err)=>{
          console.log(err)
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
