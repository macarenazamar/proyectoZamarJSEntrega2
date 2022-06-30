fetch("cuotas.JSON")
  .then((resp) => resp.json())
  .then((data) => {
    //Recorremos las cuotas
    data.forEach((cuota) => {
      //Creamos la opción del select
      let option = document.createElement("option");
      option.value = cuota.nombre;
      option.innerText = cuota.nombre;

      //Agregamos la opción al select
      select.append(option);
    });
  });

//localStorage.clear();
sessionStorage.clear();

//Creo función cuotas
function agregarCuotaAHtml(cuota) {
  let ul = document.getElementById("mostrar"); //LLAMO ul para organizar los valores de los li

  let li1 = document.getElementById("seleccion"); //llamo al li con id seleccion para adjuntar la cuota seleccionada
  li1.innerText = "Usted selecionó " + cuota;

  let li2 = document.getElementById("son"); //llamo al li con id son para adjuntar la cuota seleccionada
  li2.innerText = "Son " + cuota + " sin interes";

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

//Seleccionamos botón
let boton = document.getElementById("boton-1");
boton.addEventListener("click", () => {
  const valueSelect = select.value;
  document.getElementById("contenedor").style.visibility = "visible"; //Muestra todos los resultado que se encuentra dentro del DIV con id "contenedor"

  if (valueSelect !== "") {
    console.log(valueSelect);
    //guardar pago seleccionado por más que cierre la página
    localStorage.setItem("cuota_aceptada", JSON.stringify(valueSelect));
    
    agregarCuotaAHtml(valueSelect);
    
    sessionStorage.setItem("Tipo", JSON.stringify(valueSelect));


    
  }
});

//Seleccionamos botón ACEPTAR
let botonAceptar = document.getElementById("boton-2");
botonAceptar.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
    
  });
  swalWithBootstrapButtons
  .fire({
    title: "¿ESTÁ DE ACUERDO CON LAS CUOTAS SELECCIONADAS?",
    text: "Puede modificar las cuotas",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "ACEPTAR CUOTAS SELECCIONADAS",
    cancelButtonText: "MODIFICAR LAS CUOTAS",
    reverseButtons: true,
  })
  .then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        "ACEPTÓ LAS CUOTAS",
        "Gracias por elegirnos",
        "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {// SI SELECCIONÓ, modificar las cuotas
        document.getElementById("contenedor").style.visibility = "hidden"; //Oculta todos los resultado que se encuentra dentro del DIV con id "contenedor"
        swalWithBootstrapButtons.fire(
          "MODIFICAR LAS CUOTAS",
          "Vuelva a elegir las cuotas",
          "error"
          );
        }
      });
    });
    