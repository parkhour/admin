<template>
    <div>
        <h2>PAYMENT</h2>    
    <div class="col-12 my-4 d-flex justify-content-between">
      <div class="col-4 row">
        <div class="border-right col-12 px-5">
           <div class="input-group">
             <div class="input-group-prepend">
               <span class="input-group-text" >Plat Id</span>
             </div>
               <input type="text" v-model="licensePlate" class="form-control">
            </div>
              <Button  @click.prevent="findPayment" class="btn btn-info float-right my-2 btnnya">
                   searching
              </Button>
        </div>
      </div>
       <div class="col-7">
         <div v-if="this.payments==''">
           data tidak ada
         </div>
          <div v-else >
           <table class="table">
               <tbody>
                <tr class="listpayments">
                  <td scope="row"> License Plate</td>
                  <td >{{payments.licensePlate}}</td>              
                </tr>  
                <tr class="listpayments">
                  <td scope="row"> status</td>
                  <td >{{payments.status}}</td>              
                </tr>  
               <tr class="listpayments">
                  <td scope="row"> parking start</td>
                  <td >{{payments.parkingStart}}</td>              
                </tr>  
              <tr class="listpayments">
                  <td scope="row"> parking end </td>
                  <td >{{payments.parkingEnd}}</td>              
                </tr>    
                 <tr class="listpayments">
                  <td scope="row"> total charge </td>
                  <td >{{payments.totalCharge}}</td>              
                </tr>                              
              </tbody>
            </table>
             <div>
          <Button class="btn btn-success float-right btnnya" @click.prevent="confirm(payments._id)"  >
          Lunas
          </Button>
         </div>        
         </div>
        </div>
      </div>
    </div>        
    </div>
</template>

<script>
import axios from "@/api/axios"
import Table from "@/components/Table.vue"
export default {
    name:"payment",
    components:{
        Table
},
data(){
  return {
    licensePlate:"",
    payments:''
  }
 
}, 
created(){
   
},
methods: {
  findPayment(){    
   axios
   .post("/payments",{
     "licensePlate":this.licensePlate
   },{
     headers: {
       authorization:localStorage.access_token
      
     }
   })
    .then(({data})=>{
      // this.payments=isi
      // alert(this.payments)
      this.payments = data

    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      this.licensePlate = ''
    })

  },
  confirm(value){
     axios
      .patch("/payments/"+value,{
          status:"completed"
        },{
          headers: {
            authorization:localStorage.access_token
          }
        })
          .then(({data})=>{
            this.payments=data
            console.log(data)
          })
          .catch((err)=>{
            console.log(err)
          })
          .finally(()=>{
            this.licensePlate = ''
          })
        
        }
},

    
}
</script>
<style scoped>
.listpayments{
  border-bottom: 1px solid;

}
  
</style>
