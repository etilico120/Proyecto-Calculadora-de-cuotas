import { createApp } from 'vue';
const { default: swal } = require("sweetalert");
const { setActionValue } = require("sweetalert/typings/modules/state");


const app = Vue.createApp({
    data() {
      return {
        item: null,
        fecha: null,
        error: null,
        meses: null,
        anios: null,
        anio: null,
        mes: null
      }
    },
    computed:{
        fechaMinima(){
            let hoy = new Date();
            let dia = hoy.getDate();
            let mes = hoy.getMonth();
            let anio = hoy.getFullYear();
            return hoy = dia + '/' + mes + '/' + anio;
        }
    },
    methods:{
        obtenerAnios(){
            const self = this;
            $.ajax({
                url: "https://run.mocky.io/v3/b5275613-53cc-4b8d-81d5-795cede38ed7",
                method: 'GET',
            }).done(function(data){
                self.anios = data;
            }).fail(function(){
                self.error = "Dato inexistente";
            })
        },
        obtenerMeses(){
            const self = this;
            $.ajax({
                url: "https://run.mocky.io/v3/03ff0e96-794f-4229-bbc9-b44a3771450b",
                method: "GET",
            }).done(function(data){
                self.meses = data;
            }).fail(function(){
                self.error = "Dato inexistente";
            })
        },
        datos(){
            const self = this;
            $.ajax({
                url: "https://run.mocky.io/v3/b6c25d5b-0298-47db-a045-308d1538c109",
                method: "GET",
            }).done (function(data){
                self.datosObtenidos = data;
            }).fail (function(){
                self.error = "Dato inexistente";
            })
        },
        calculo(){
            if ((!this.anio) && (!this.mes) && (!this.dia)){
                swal.fire({
                    title: 'Error!',
                    text:  'Seleccioná un año',
                    icon: 'information'
                })
                return;
            }
        },
        calculoConAumento(){
            let total = 0;
            let hoy = new Date();
            let fechaSeleccionada = new Date(this.fecha);
            let diferencia = new Date((fechaSeleccionada-fecha)).getDate()
            if (diferencia > 15){
                this.total = this.total + 400
            }
        },
    },
    mounted(){
        let vAnios = obtenerAnios();
        console.log(vAnios);
        obtenerMeses();
        datos();
    }
})