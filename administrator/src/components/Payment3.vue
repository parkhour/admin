<template>
    <div>
       <form>
  <label>
    <p class="label-txt">ENTER PLATE </p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
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
</form> 
  
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
form {
  width: 60%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
}
label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: #ffff;
  transition: ease .3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8BC34A;
  transition: ease .6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220,220,220);
  font-weight: bold;
  color: rgb(120,120,120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease .3s;
}

button:hover {
  background: #8BC34A;
  color: #ffffff;
}
</style>
