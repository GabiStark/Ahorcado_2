<script setup>
import { ref } from 'vue';
import router from "@/router/index.js";

let jugando=ref(false);
const viajarAhorcado = () =>{
  jugando=true;
  router.push({ name: "ahorcado" })
}
const viajarNuevoJuego = () => {
  router.push({ name: "ahorcado" })
}
const volver = () => {
  router.push({ name: "/" })
}
const salir = () => {
  window.close();
}

</script>

<template>

  <div class="topBar">
    <div class="izquierda">
      <button @click="salir">Salir</button>
    </div>
    <div class="alineado">
      <button v-show="!jugando" @click="viajarAhorcado">Jugar</button>
    </div>
    <div class="derecha">
      <img src="./icons/icon.jpg">
    </div>
  </div>

</template>

<style scoped>

.topBar{
  width: 100%;
  height: 50px;
  background-color: aquamarine;
  display:flex;
  .izquierda{
    margin-top: 15px;
    margin-left:15px;
    width:33%;
  }
  .alineado {
    margin-top: 15px;
    width:33%;
    button{
      margin-left:50%;
    }
  }
  .derecha{
    margin-left:33%;
    img {
      max-width: 50px !important;
      height: 50px;
      border-radius:3px;
    }

  }
}

</style>