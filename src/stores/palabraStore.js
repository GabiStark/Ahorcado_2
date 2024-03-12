import {defineStore} from "pinia";

export const palabraStore = defineStore ("palabraStore", ()=>{

    const palabras = ["arbol","casa","coche","pantalla","ordenador","impresora"];

    function elegirPalabra(){

        let palabraElegida="";

        palabraElegida=palabras[Math.floor(Math.random()*palabras.length)];

        let palabraGuiones = guiones(palabraElegida);

    }

    function guiones(palabraElegida){

        let palabraConGuiones="";

        for (let index=0;index<palabraElegida.length;index++){

            palabraConGuiones+="-";

        }

    }

    return elegirPalabra, guiones;

})