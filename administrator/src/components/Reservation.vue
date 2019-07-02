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
export default {
    name:"payment",
    components:{
        Table,
        
},
data(){
  return{
    paymentsHistory:[],
    field:['no','licensePlate','mallName', 'uid','status','totalCharge'],
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
      axios
      .get("/reservations/admin",{
        headers: {
          authorization:localStorage.access_token
        }
      })
        .then(({data})=>{
          console.log(data)
          data.map((datum)=>{
              if(!datum.totalCharge){
                  datum.totalCharge= '-'
              }           
              datum.parkingEnd = moment(datum.parkingEnd).format('llll')
          })
          this.paymentsHistory=data.reverse()  
          this.paymentsHistorySearch=this.paymentsHistory
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally((err)=>{
          this.loading = false
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
