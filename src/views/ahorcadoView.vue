<script setup>

import TecladoComponent from "@/components/tecladoComponent.vue";
import {palabraStore} from "@/stores/palabraStore.js";
</script>

<template>
  <div class="grid">
    <div class="imagen">
      <img src="../components/img/0.jpg">
    </div>

    <div class="teclado">
      {{palabraStore.guiones}}
      <teclado-component/>
    </div>
  </div>
</template>

<style scoped>

.grid{
  margin-top:50px;
  background-color:grey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

</style>