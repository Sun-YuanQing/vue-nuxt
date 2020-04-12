<template>
   <div>
    <ul>
      <li :key="item.name" v-for="item of list">
        <nuxt-link :to="'/shopDetail/' + item.id">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    head: {
      title: '关于我们',
      meta: [{ hid: 'keywords', name: 'keywords', content: '关键字' }, { hid: 'description', name: 'description', content: '页面描述' }]
    },
    data() {
      return {
        list: [{ id: '001', name: 'iphone1ee', price: 878667 }, { id: '002', name: 'huawei1000e', price: 8888 }, { id: '003', name: 'chuizi1e01', price: 9999 }]
      };
    }
  };
</script>

<style>
</style>
