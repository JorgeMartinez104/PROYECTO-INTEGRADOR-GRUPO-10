document.addEventListener('DOMContentLoaded', () => {
	const detalleProvincia = document.getElementById('provinceDetail');

	//Obtenemos el ID de la provincia desde la URL
	const urlParams = new URLSearchParams(window.location.search);
	const idProvincia = urlParams.get('id');

	//Obtenemos los datos de la provincia desde el localStorage
	const datosProvincias = JSON.parse(localStorage.getItem('provincias'));

	//Buscamos la provincia por ID
	const provinciaSeleccionada = datosProvincias.provincias.find(
		(provincia) => provincia.id == idProvincia
	);

	// Renderizado de provincias
	if (provinciaSeleccionada) {
		//Creamos un elemento div para mostrar los detalles y lo agregamos al DOM
		const contenedorDetallesProvincia = document.createElement('div');
		contenedorDetallesProvincia.classList.add('provinciaSelectedContainer');
		contenedorDetallesProvincia.innerHTML = `
      <h2 class="provinciaSelectedName">${provinciaSeleccionada.nombre}</h2>
      <div class="activity">
        <h3 class="activityTitle">${provinciaSeleccionada.descripcion1}</h3>
        <div>
        <img class="activityImage" src="${provinciaSeleccionada.imagen1}" alt="${provinciaSeleccionada.descripcion1}">
        </div>
        <p class="activityDescription">${provinciaSeleccionada.detalle1}</p>
      </div>

      <div class="activity">
        <h3 class="activityTitle">${provinciaSeleccionada.descripcion2}</h3>
        <div>
        <img class="activityImage" src="${provinciaSeleccionada.imagen2}" alt="${provinciaSeleccionada.descripcion2}">
        </div>
        <p class="activityDescription">${provinciaSeleccionada.detalle2}</p>
      </div>

      <div class="activity">
        <h3 class="activityTitle">${provinciaSeleccionada.descripcion3}</h3>
        <div>
        <img class="activityImage" src="${provinciaSeleccionada.imagen3}" alt="${provinciaSeleccionada.descripcion3}">
        </div>
        <p class="activityDescription">${provinciaSeleccionada.detalle3}</p>
      </div>

      <div class="activity">
        <h3 class="activityTitle">${provinciaSeleccionada.descripcion4}</h3>
        <div>
        <img class="activityImage" src="${provinciaSeleccionada.imagen4}" alt="${provinciaSeleccionada.descripcion4}">
        </div>
        <p class="activityDescription">${provinciaSeleccionada.detalle4}</p>
      </div>
      
      <div id="card-totalActivityPrice" class="activity">
      <button id="btn-totalActivityPrice" class="btn-activityPrice">Valor: ${provinciaSeleccionada.precio} USD</button>
      </div>
    `;
		//agregar a pagina principal
		detalleProvincia.appendChild(contenedorDetallesProvincia);
	}
});
