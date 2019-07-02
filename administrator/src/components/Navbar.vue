<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navigasi">
    <b-navbar-brand href="#">ParkHour</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Payment</b-nav-item>
        <b-nav-item href="#">History</b-nav-item>
        <b-nav-item href="#">User</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<style scoped>
.navigasi{
    background-color:rgb(255,207,0) !important;
}
    
</style>