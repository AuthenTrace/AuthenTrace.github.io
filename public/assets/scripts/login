//VALIDACION DEL FORMULARIO REGISTRO

const register = document.querySelector('form[name="register"]');

register.addEventListener("submit", (event) => {
  const name = register.elements["name"].value;
  const lastname = register.elements["lastname"].value;
  const correo = register.elements["correo"].value;
  const contraseña = register.elements["password"].value;

  if (!name || !lastname || !correo || !contraseña) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos");
  } else if (!validateEmail(correo)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]+$/;
  return re.test(String(email).toLowerCase());
}

//VALIDACION DEL FORMULARIO INICIAR SESION

const loginForm = document.querySelector('form[name="login"]');

loginForm.addEventListener("submit", (event) => {
  const correo = loginForm.elements["email"].value;
  const contraseña = loginForm.elements["password"].value;

  if (!correo || !contraseña) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos.");
  } else if (!validateEmail(correo)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido.");
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
