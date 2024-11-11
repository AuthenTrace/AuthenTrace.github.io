const messages = document.getElementById("messages");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

let step = 0; 


function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerText = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight; 
}


addMessage("Hola, soy IA ROTROT. ¿En qué puedo ayudarte hoy?", "bot");


chatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  if (step === 0) {
    addMessage("Antes de empezar. ¿Cuál es tu nombre?", "bot");
    step++;
  } else if (step === 1) {
    sessionStorage.setItem("nombre", text);
    addMessage("¿Y tu apellido?", "bot");
    step++;
  } else if (step === 2) {
    sessionStorage.setItem("apellido", text);
    addMessage("Perfecto. Ahora, ¿puedes decirme tu DNI?", "bot");
    step++;
  } else if (step === 3) {
    sessionStorage.setItem("dni", text);
    addMessage(
      "Gracias por la información. ¿En qué puedo ayudarte específicamente?",
      "bot"
    );
    step++;
  } else {

    addMessage("Estoy procesando tu solicitud...", "bot");
    setTimeout(() => {
      addMessage("Aquí tienes la respuesta a tu consulta.", "bot");
    }, 1000);
  }
});