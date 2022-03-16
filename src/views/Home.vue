<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input v-model="model.avatar">
    {{ model.avatar }}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { ExampleItem } from '@/models/api-client/example/ExampleItem'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      model: new ExampleItem(),
    };
  },
});
</script>
