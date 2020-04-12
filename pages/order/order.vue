<template>
  <div>
    <h3>order</h3>
    <p>{{ order }}</p>
  </div>
</template>

<script>
import user1 from '@/api/user.js';


export default {
  data (){
    return {
      order:null
    }
  },

  mounted() {
    var that = this;
    var data =  {po_vend:"",po_nbr:"",pod_pr:"",part:"",po_ord_date1:"2018-11-01",po_ord_date2:"",pod_due_date1:"2018-11-01",pod_due_date2:"",po_type:"" };
    user1
      .sp_po_mstr_untreated(data)
      .then(response => {
          that.order = response||"0000000008888";


        return that.order;
      })
      .catch(error => {});
  }
};
</script>

<style></style>
