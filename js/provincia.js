document.addEventListener("DOMContentLoaded", () => {
  const detalleProvincia = document.getElementById("detalle-provincia");

  //obtenemos el ID de la provincia de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProvincia = urlParams.get("id");

  //Obtenemos los datos de la provinvia desde el localStorage
  const datosProvincias = JSON.parse(localStorage.getItem("provincias"));

  //Buscamos la provincia por ID
  const provinciaSeleccionado = datosProvincias.provincias.find(
    (provincia) => provincia.id == idProvincia
  );

  if (provinciaSeleccionado) {
    //Creamos un elemento div para mostrar los detalles de la provincia y lo agregamos al DOM
    const contenedorDetallesProvincia = document.createElement("div");
    contenedorDetallesProvincia.classList.add("detalles-provincia");
    contenedorDetallesProvincia.innerHTML = `
    <h2>${provinciaSeleccionado.descripcion1}</h2>
    <img src="${provinciaSeleccionado.imagen1}" alt="${provinciaSeleccionado.descripcion1}">
    <p>${provinciaSeleccionado.detalle1}</p>
    <h2>${provinciaSeleccionado.descripcion2}</h2>
    <img src="${provinciaSeleccionado.imagen2}" alt="${provinciaSeleccionado.descripcion2}">
    <p>${provinciaSeleccionado.detalle2}</p>
    <h2>${provinciaSeleccionado.descripcion3}</h2>
    <img src="${provinciaSeleccionado.imagen3}" alt="${provinciaSeleccionado.descripcion3}">
    <p>${provinciaSeleccionado.detalle3}</p>
    <h2>${provinciaSeleccionado.descripcion4}</h2>
    <img src="${provinciaSeleccionado.imagen4}" alt="${provinciaSeleccionado.descripcion4}">
    <p>${provinciaSeleccionado.detalle4}</p>
    <p>Valor: ${provinciaSeleccionado.precio} USD</p>
    `;
    //agregar a pagina principal
    detalleProvincia.appendChild(contenedorDetallesProvincia);
    
  }
});

