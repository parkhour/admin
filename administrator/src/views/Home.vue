<template>
  <div class="home bg-light">    
    <Navbar/>
   <b-card class="text-center px-4 row bg-white col-10 mx-auto my-4"> 
     <router-view></router-view> 
   </b-card>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue"
import Payment from "@/components/Payment.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    Navbar,
    Payment
  },
  created(){
     if (!localStorage.access_token) {
      this.$router.push("/login");
    }
  }
}
</script>
