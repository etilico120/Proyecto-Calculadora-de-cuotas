// import { createApp } from 'vue';
//const { default: swal } = require("sweetalert2");
//const { setActionValue } = require("sweetalert2/typings/modules/state");
//import Swal from 'sweetalert2'


const app = Vue.createApp({
    data() {
      return {
        item: null,
        fecha: null,
        error: null,
        anio: null,
        anios: null,
        meses: null,
        mes: null,
        total: null,
        min: null
      }
    },
    computed:{
        fechaMinima(){
            let hoy = new Date();
            let dd = hoy.getDate();
            let mm = hoy.getMonth()+1;
            let aaaa = hoy.getFullYear();
            if (dd<10){
                dd = '0' + dd;
            }
            if (mm<10){
                mm = '0' + mm;
            }
            return hoy = aaaa + '-' + mm + '-' + dd;
        },
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
            // const self = this;
            if ((!this.anio)){
                swal.fire({
                    title: 'Error!',
                    text:  'Seleccioná un año',
                    icon: 'info'
                })
                return;
            }
            if ((!this.mes)){
                swal.fire({
                    title: 'Error!',
                    text:  'Seleccioná un mes',
                    icon: 'info'
                })
                return;
            }
            if ((!this.fecha)){
                swal.fire({
                    title: 'Error!',
                    text:  'Seleccioná un día',
                    icon: 'info'
                })
                return;
            }
            this.total = 0;
            let mesSeleccionado = this.mes;
            switch (this.anio){
                case "primero":
                    this.total = this.datosObtenidos.primero[mesSeleccionado];
                    this.calculoConAumento();
                    break;
                case "segundo":
                    this.total = this.datosObtenidos.segundo[mesSeleccionado];
                    this.calculoConAumento();
                    break;
                case "tercero":
                    this.total = this.datosObtenidos.tercero[mesSeleccionado];
                    this.calculoConAumento();
                    break;
                case "cuarto":
                    this.total = this.datosObtenidos.cuarto[mesSeleccionado];
                    this.calculoConAumento();
                    break;
            }
        },
        calculoConAumento(){
            let total = 0;
            let hoy = new Date();
            let fechaSeleccionada = new Date(this.fecha);
            let diferencia = new Date((fechaSeleccionada-this.fecha)).getDate()
            if (diferencia > 15){
                this.total = this.total + 400
            }
        }
    },
    mounted(){
        this.obtenerAnios();
        this.obtenerMeses();
        this.datos();
    }
})