<template>
  <div>
    <h3>info</h3>
    <h5>{{ info }}</h5>
     <h5>{{ response }}</h5>
  </div>
</template>

<script>
import user1 from '@/api/user.js';
var that = null;
export default {

  head: {
    title: '关于我们',
    meta: [{ hid: 'keywords', name: 'keywords', content: '关键字' }, { hid: 'description', name: 'description', content: '页面描述' }]
  },
  data(){
    return {
      info:"000"
    }
  },
  mounted() {
    this.info="1234567";
  },
 async asyncData() {
     var data = { user: 'admin', passwor: '123456' };
   return  user1.login(data).then(res => {
              var response=JSON.stringify(res)
			  if(response=="[]"){
				  response="asyncData"
			  }
         return {response}
		 
       })
       .catch(error => {});
   }
};
</script>

<style></style>
