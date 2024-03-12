<script setup>
  const letras = (['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']);

  const seleccionarLetra=(letra)=>{

    alert(letra);

  }
</script>

<template>

  <div class="teclado">
    <button v-for="(letra,index) in letras" :key="index" @click ="seleccionarLetra(letra)">{{letra}}</button>
  </div>

</template>

<style scoped>

div{
  display:flex;
  flex-wrap:wrap;
  button{
    margin:5px;
    padding:10px;
    font-size:16px;
  }
}

</style>