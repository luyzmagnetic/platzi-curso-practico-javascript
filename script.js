//Se crean las variables que contendran las clases las cuales vamos a utilizar para hacer los eventos de interaccion de usuario con el documento html usando los atributos de querySelecto por nombre de clase.
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult =document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);

//Crear una funcion en js para ver los eventos del boton.
function sumarInputValues(event){
   //console.log({event});
   event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
};
