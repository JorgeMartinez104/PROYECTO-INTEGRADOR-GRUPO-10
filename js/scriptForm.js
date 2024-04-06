//const formulario = document.querySelector("form");
const form = document.getElementById("form");
const borrarConfig = document.querySelector("#borrarConfig");
const nameForm = document.getElementById("nombre");
const lastNameForm = document.getElementById("apellido");
const emailForm = document.getElementById("mail");
const phoneForm = document.getElementById("telefono");
const listInputs = document.querySelectorAll(".form-input");
const resetBtn = document.getElementById('btn-clear');
const textArea = document.getElementById("consulta");
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]
const radio = document.getElementsByName("transporte");


// Escuchador de evento para cuando se envie el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let condicion = validateForm();

  if (condicion) {
    guardarConfig();
  }
});

function validateForm() {
  let testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  listInputs.forEach((element) =>
  {
    element.lastElementChild.innerHTML = "";
  });

  if(nameForm.value.trim() == "")
  {
    showMessError("nombre", "*Nombre no válido.");
    condicion = false;
  }
  console.log("falso")
  if(lastNameForm.value.trim() == "")
  {
    showMessError("apellido", "*Apellido no válido.");
    condicion = false;
  }

  if(phoneForm.value.length < 10 || phoneForm.value.trim() == "")
  {
    showMessError("telefono", "*Teléfono no válido.");
    condicion = false;
  }

  if(!testEmail.test(emailForm.value)){
    showMessError("mail", "*Email no válido.");
    condicion = false;
  }
}
function showMessError(classInput, mess)
{
  let eleName = document.querySelector(`.${classInput}`);
  eleName.lastElementChild.innerHTML = mess;
}

// Escuchador de evento para cuando se haga click en borrar configuracion
borrarConfig.addEventListener("click", limpiarConfig);
// Escuchador de evento para que cuando se cargue la página, se cargue la info del local storage en caso que exista
window.addEventListener("load", cargarConfig);

// Función para guardar la configuración del usuario en localStorage
function guardarConfig() {
  const userName = document.querySelector("#username").value;
  const saludarUsuario = document.querySelector("#saludarUsuario");
  localStorage.setItem("username", userName);
  saludarUsuario.textContent = `Hola ${userName}!`;
}

// Función para cargar la configuración del usuario desde localStorage
function cargarConfig() {
  const SavedUserName = localStorage.getItem("username");
  if (SavedUserName) {
    document.querySelector(
      "#saludarUsuario"
    ).textContent = `Hola ${SavedUserName}!`;
    document.querySelector("#username").value = SavedUserName;
  }
}

// Función para eliminar la configuración del usuario
function limpiarConfig() {
  localStorage.removeItem("username");
  document.querySelector("#saludarUsuario").textContent = ``;
  document.querySelector("#username").value = "";
  document.body.className = ``;
}

const reset = (e) => {

  e.preventDefault()

  var ele = radio;

  for (let input of inputs)
  input.value = ''

  select.value = 'bs-as'
  
  textArea.value = "";

  ele[0].checked = true;

  for(var i=1;i<ele.length;i++)
  { 
      ele[i].checked = false;
  }

  listInputs.forEach((element) =>
  {
    element.lastElementChild.innerHTML = "";
  });

}

resetBtn.addEventListener('click', reset)