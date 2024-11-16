const messages = document.getElementById("messages");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

let step = 0;
const initialPrompt = [
  { role: "system", content: "Eres un asistente que recopila datos: Nombre, Apellido, DNI y la Consulta." },
  { role: "assistant", content: "Hola, soy IA ROTROT. ¿En qué puedo ayudarte hoy?" }
];

let conversationHistory = [...initialPrompt];

// Función para añadir mensajes a la UI
function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerText = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

// Inicializa la conversación
addMessage(initialPrompt[1].content, "bot");

// Evento de envío del formulario
chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  // Añade el mensaje del usuario a la UI
  addMessage(text, "user");
  userInput.value = "";
  conversationHistory.push({ role: "user", content: text });
  const response = await getChatCompletion(conversationHistory);
  if (response) {
    const botReply = response.content;
    // Añade la respuesta del bot a la UI
    addMessage(botReply, "bot");
    // Añade la respuesta del bot al historial
    conversationHistory.push({ role: "assistant", content: botReply });
  } else {
    addMessage("Ocurrió un error. Por favor, intenta nuevamente.", "bot");
  }
});

// Función para hacer la solicitud a la API de Chat Completion
async function getChatCompletion(conversation) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ` // Reemplaza con tu clave API de OpenAI
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: conversation
      })
    });

    if (!response.ok) {
      console.error("Error en la API:", response.status, await response.text());
      return null;
    }

    const data = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error("Error de red o de la API:", error);
    return null;
  }
}
