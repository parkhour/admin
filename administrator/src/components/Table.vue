<template>
  <div class="d-flex justify-content-center">
     <div>
        <b-table   hover :items="datanya" :fields="fieldnya" :per-page="perPage" :current-page="currentPage"  :tbody-tr-class="rowClass">
          <template slot="no" slot-scope="data">
            {{ data.index + 1 }}
          </template>
          </b-table>
          <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table">
          </b-pagination>
     </div>

  </div>
</template>

<script>
  export default {
    props:["datanya","fieldnya"],
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        // Note `isActive` is left out and will not appear in the rendered table
      }
    },
    methods:{
       rowClass(item, type) {
        if (!item) {
          return

        } else if (item.status === 'paid') {
          return 'table-success' 
        } 
        else if (item.status === 'waiting')
        { return 'table-warning' 

        } else if(item.status === 'canceled'){
          return 'table-danger'
        }
        
      }
    },
    computed: {
      rows() {
        return this.datanya.length
      }
    }
  }
</script>