//-------------------------------------------------------------------
//ejecicio 1
//-------------------------------------------------------------------
const select=document.getElementById("elegirColor");
//valor por defecto para el input color blanco
document.getElementById("colorValue").value="#FFFFFF";
select.addEventListener("change", ()=>{
    const valorSelect=document.getElementById("elegirColor");
    const colorValue=document.getElementById("colorValue");
    const inputColor=valorSelect.options[valorSelect.selectedIndex].value;
    let codeColor="#"+inputColor;
    colorValue.value=codeColor;
    document.getElementById("numberIndex").value=valorSelect.selectedIndex;
    document.getElementById("colorCode").value=codeColor;
    const NombreColor=document.getElementById("textSelect").value=valorSelect.options[valorSelect.selectedIndex].text;
});
//-------------------------------------------------------------------
//ejecicio 2
//-------------------------------------------------------------------
const checkearTextArea=()=>{
    let textArea=document.getElementById("descripcion");
    if(textArea.value.length<=0){
         alert("campo vacio");
         textArea.style.border="solid red 1px"
        }else if(textArea.value.length>50){
            alert("El texto debe ser de 50max")
            textArea.style.border="solid red 1px"
        }else{
            alert("El Tamaño del texto es correcto")
            textArea.style.border="solid green 1px"
        }
    };
let btnEnviar=document.getElementById("enviar");
btnEnviar.addEventListener("click",checkearTextArea);

//-------------------------------------------------------------------
//ejecicio 3
//-------------------------------------------------------------------
let patronLetra=/[a-zA-Z]/;
let patronVocal=/[aeiouAEIOU]/;
let patronNumeros=/[0-9]{1}/;
let patronStartNumber=/^607[0-9]{7}/
let alertTrue="¡¡¡Correcto!!!"
let alertFalse1="texto NO contiene letra o NO contiene una vocal";
let alertFalse2="texto NO contiene letra, NO contiene un numero o excede el limite de caracteres";
let alertFalse3="el ingreso NO es correcto, NO inicia con 607 o excede el limite de caracteres";
//primer input

function validarTexto(){
    let ingreso1Eje3=document.getElementById("ingreso_text").value
    if( patronLetra.test(ingreso1Eje3) && patronVocal.test(ingreso1Eje3)){
        document.getElementById("casilla1AlertaEj3").innerHTML=alertTrue;
    }else{
        document.getElementById("casilla1AlertaEj3").innerHTML=alertFalse1;
    }
    

}
const btn5=document.getElementById("boton1_validar_Eje3");
btn5.addEventListener("click",validarTexto);
//segundo input

function validarTexto2(){
    let ingreso2Eje3=document.getElementById("eRLeVoNuLongitud").value
    if( patronLetra.test(ingreso2Eje3) && patronNumeros.test(ingreso2Eje3) && ingreso2Eje3.length<5 && patronVocal.test(ingreso2Eje3)){
        document.getElementById("casilla2AlertaEj3").innerHTML=alertTrue;
    }else{
        document.getElementById("casilla2AlertaEj3").innerHTML=alertFalse2;
    }
    

}
const btn6=document.getElementById("boton2_validar_Eje3");
btn6.addEventListener("click",validarTexto2);

//tercer input

function validarTexto3(){
    let ingreso3Eje3=document.getElementById("eRNumeros").value
    if(patronStartNumber.test(ingreso3Eje3) && ingreso3Eje3.length==10){
        document.getElementById("casilla3AlertaEj3").innerHTML=alertTrue;
    }else{
        document.getElementById("casilla3AlertaEj3").innerHTML=alertFalse3;
    }
    

}
const btn7=document.getElementById("boton3_validar_Eje3");
btn7.addEventListener("click",validarTexto3);

//-------------------------------------------------------------------
//ejecicio 4
//-------------------------------------------------------------------
//primer input------------------------------------------
let ingreso1Eje4=document.getElementById("ingreso1Ejercicio4")
ingreso1Eje4.addEventListener("input", ()=>{
    document.getElementById("casilla1AlertaEj4").innerHTML=ingreso1Eje4.value;

});

//segundo input-----------------------------------------------
let ingreso2Eje4=document.getElementById("ingreso2Ejercicio4");
let alertaEj4Menos50="Caracteres restantes: ";
let alertaEj4Mas50="La cantidad de caracteres supera el maximo de 50: ";
ingreso2Eje4.addEventListener("input", ()=>{
    let caracteres=ingreso2Eje4.value.length;
    if(caracteres<=50){
        document.getElementById("casilla2AlertaEj4").style.color="black";
        document.getElementById("casilla2AlertaEj4").innerHTML=alertaEj4Menos50 + (50-caracteres);
    }else{
        document.getElementById("casilla2AlertaEj4").style.color="red";
        document.getElementById("casilla2AlertaEj4").innerHTML=alertaEj4Mas50 + (50-caracteres);

    }
    

});
//ejercicio 5 /////////////////////////////////////////////////////////////////////////////////////////////
//primera forma
//function muestra(num) {
   // let imagen=document.images[num].src;
   // let grande=document.images["pantalla"];
   // grande.src=imagen
   // 
  //  
//}

//segunda forma

const imagen1=document.getElementById("imgUno");
const imagen2=document.getElementById("imgDos");
const imagen3=document.getElementById("imgTres");
const imagen4=document.getElementById("imgCuatro");
function muestra(num){
    let imagen=document.images[num].src;
    let grande=document.images["pantalla"];
    grande.src=imagen;
}
imagen1.addEventListener("click", ()=>muestra(1));
imagen2.addEventListener("click", ()=>muestra(2));
imagen3.addEventListener("click", ()=>muestra(3));
imagen4.addEventListener("click", ()=>muestra(4));

//ejercicio 6 /////////////////////////////////////////////////////////////////////////////////
///crear
const btnCrearEje6=document.getElementById("btnCrearEje6");
btnCrearEje6.addEventListener("click", ()=>{
    const nuevoP = document.createElement("p");
    nuevoP.setAttribute("id", "pEje6");
    const texto1Eje6 = document.createTextNode("nuevo parrafo creado");
    nuevoP.appendChild(texto1Eje6);
    document.getElementById("contenedorPeje6").appendChild(nuevoP);
})
/// duplicar

const btnDuplicarEje6=document.getElementById("btnDuplicarEje6");
btnDuplicarEje6.addEventListener("click", ()=>{
    const copiarNodo = document.getElementById("pEje6");
    copia=copiarNodo.cloneNode(true);
    document.getElementById("contenedorPeje6").appendChild(copia);
})
/// eliminar
const btnEliminarEje6=document.getElementById("btnEliminarEje6");
btnEliminarEje6.addEventListener("click", ()=>{
    const eliminarP = document.getElementById("pEje6");
    document.getElementById("contenedorPeje6").removeChild(eliminarP);
})
//ejercicio 7 /////////////////////////////////////////////////////////////////////////////////