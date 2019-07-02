<template>
    <div>
       
    <div class="col-12 my-4 d-flex justify-content-between">
      <div class="col-5 row">
        <div class="border-right col-12 px-2">
           <div class="input-group mt-4">
               <input type="text" v-model="licensePlate"  placeholder="Enter Here" class="form-control col-11 rounded-0 inputannya">
            </div>
              <Button  @click.prevent="findPayment" class="btn btn-warning float-left my-2 text-white rounded-0">
                   Search
              </Button>
               <Button  @click.prevent="clear" class="btn btn-info float-left my-2 ml-4 text-white rounded-0">
                   Clear
              </Button>
           </div>
      </div>
       <div class="col-7">
         <div v-if="this.payments==''">
             <img src="../assets/none.png" alt="" height="300px">
         </div>
          <div v-else >
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-between bawah pb-1 pt-3">
                 <div>Licence Plate</div>
                 <div> {{payments.licensePlate}}</div>
              </div>
              <div class="d-flex justify-content-between bawah pb-1 pt-3">
                 <div>Status</div>
                 <div> {{payments.status}}</div>
              </div>
              <div class="d-flex justify-content-between bawah pb-1 pt-3">
                 <div>Parking Start</div>
                 <div>{{payments.parkingStart}}</div>
              </div>
               <div class="d-flex justify-content-between bawah pb-1 pt-3">
                 <div>Parking End</div>
                 <div> {{payments.parkingEnd}}</div>
              </div>
               <div class="d-flex justify-content-between bawahh pb-1 pt-3 ">
                 <div>Total</div>
                 <div> {{payments.totalCharge}}</div>
              </div>
              
            </div>  
             <div class="mt-3">
          <Button class="btn btn-success float-right btnnya rounded-0" @click.prevent="confirm(payments._id)"  >
          Confirm
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
  // console.log(this.licensePlate)
  },
  confirm(value){
    // console.log(value);
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
// computed: {
//   capitalizedLicensePlate: () => {
//     return this.licensePlate.toUpperCase();
//   }
// },
watch: {
  licensePlate: function(val) {
    this.licensePlate = val.toUpperCase();
  }
}

    
}
</script>
<style scoped>
.listpayments{
  border-bottom: 1px solid;
}
.inputannya{
  height:13vh;
  font-size:6vh
}
.bawah{
  font-size:3vh;
  border: 0;
  border-bottom: 1px solid #dadada; 
  outline: 0;
}
.bawahh{
  border: 0;
  border-bottom: 1px solid; 
  outline: 0;
}
  
</style>
