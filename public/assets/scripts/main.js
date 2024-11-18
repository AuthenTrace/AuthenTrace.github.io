//VALIDACION DE FORMULARIO

const form = document.querySelector('form[name="form"]');

form.addEventListener("submit", (event) => {
  const name = form.elements["name"].value;
  const lastname = form.elements["lastname"].value;
  const pais = form.elements["pais"].value;
  const correo = form.elements["correo"].value;
  const telefono = form.elements["telefono"].value;
  const empresa = form.elements["empresa"].value;
  const titulo = form.elements["titulo"].value;
  const opcional = form.elements["opcional"].value;
  const tamaño = form.elements["tamaño"].value;

  if (
    !name ||
    !lastname ||
    !pais ||
    !correo ||
    !telefono ||
    !empresa ||
    !titulo ||
    !opcional ||
    !tamaño
  ) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos");
  } else if (!validateEmail(email)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  }
});
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]/;
  return re.test(String(email).toLowerCase());
}


