<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navigasi">
    <b-navbar-brand href="#">ParkHour</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="cl">
      <b-navbar-nav>
        <b-nav-item to="/payment">Payment</b-nav-item>
        <b-nav-item to="/history">History</b-nav-item>
        <b-nav-item to="/reservation">Reservation</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {
  methods:{
    logout(){
      localStorage.clear()
      this.router.push('/login')
    }
  }
}
</script>

<style scoped>
.navigasi{
    background-color:black !important;
}
    
</style>