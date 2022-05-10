let cuotas = [
    {
        nombre: "Contado",
        cantidad: 1,
    },
    {
        nombre: "3 Cuotas",
        cantidad: 3,
    },
    {
        nombre: "6 Cuotas",
        cantidad: 6,
    },
    {
        nombre: "12 Cuotas",
        cantidad: 12,
    },
];

localStorage.clear();
sessionStorage.clear();

//Creo función cuotas
function agregarCuotaAHtml (cuota){
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerText = "Usted selecionó " + cuota.nombre;

    let li2 = document.createElement("li");
    li2.innerText = "Son " + cuota.cantidad + " cuotas sin interes";

    ul.append(li1, li2);

    contenedor.append(ul);
}
//Seleccionamos el contenedor

let contenedor = document.getElementById("contenedor"); 

//Seleccionamos el select
let select = document.getElementById("select-cuota");

//Creamos la opción nula
let optionNula = document.createElement("option");
optionNula.value = "";
optionNula.innerText = "Seleccionar forma de pago";
select.append(optionNula);

//Recorremos las cuotas
cuotas.forEach((cuota) =>{
    //Creamos la opción del select
    let option = document.createElement("option");
    option.value = cuota.cantidad;
    option.innerText = cuota.nombre;
    
    //Agregamos la opción al select
    select.append(option); 
});

//Seleccionamos botón
let boton = document.getElementById("boton-1");
boton.addEventListener("click", () => {
    const valueSelect = select.value;

    if(valueSelect !== ""){
        const cuotaEncontrada = cuotas.find( (cuota) => {
            return cuota.cantidad == valueSelect;
        } );
        agregarCuotaAHtml(cuotaEncontrada);
        
    }

    
    
})

//Cómo hago para guardar en sessionStorage solo cuando el usario apreta al botón de pagar?
//Dónde lo pongo? dentro de los corchetes del botón? abajo de todo, dentro del contenedor? eso es otra cosa que no sé dónde va
// Intenté ahcer algo de esto:
//Almacenamos en sessionStorage forma de pago seleccionada
//sessionStorage.setItem("forma_de_pago" -ES LA KEY-, agregarCuotaAHtml -ES EL VALOR-); --> está mal porque me tira error
//const fomraDePago = JSON.parse(sessionStorage.getItem(QUÉ VA ACÁ?))
//No entiendo :´(

