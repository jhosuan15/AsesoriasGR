window.onload = function () {
    // Mensaje inicial del chatbot al cargar la página
    var initialMessage = document.createElement("div");
    initialMessage.className = "bot-message";
    initialMessage.innerText = "Chatbot: ¡Hola! ¿En qué puedo ayudarte?\n Escribe el numero:\n1.Preguntas basicas \n 2.Enviar mensaje whatsapp \n 3.Enviar Correo";

    // Agrega el mensaje inicial a la ventana de chat
    document.getElementById("chat-window").appendChild(initialMessage);

    // Desplázate hacia abajo para mostrar el mensaje inicial
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
};

function sendMessage() {
    // Obtiene el mensaje del usuario desde el input
    var userInput = document.getElementById("user-input").value;

    // Crea un nuevo elemento de mensaje para el usuario
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = "Usuario: " + userInput;

    // Agrega el mensaje del usuario a la ventana de chat
    document.getElementById("chat-window").appendChild(userMessage);

    // Borra el input del usuario
    document.getElementById("user-input").value = "";

    // Lógica para que el chatbot responda aquí
    // Puedes usar AJAX para enviar la solicitud a un servidor de chatbot o agregar respuestas predefinidas.

    if (userInput.includes("1")) {
        var botResponse = document.createElement("div");
        botResponse.className = "bot-message";
        botResponse.innerText = "Chatbot: Ingresa el numero de la pregunta:\n1:\n2:\n3:";
    }
    else if (userInput.includes("2")) {
        var botResponse = document.createElement("div");
        botResponse.className = "bot-message";
        botResponse.innerText = "Chatbot: Redirigiendote a whatsapp";

        var phoneNumber = "+50661189357"; // Reemplaza esto con tu número de teléfono (incluido el código de país).
        var message = "Buenas, quiero hacer una reserva para una asesoria."; // Mensaje predefinido opcional.

        // Crea el enlace de WhatsApp
        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        // Abre el enlace en una nueva ventana o pestaña.
        window.open(whatsappLink, "_blank");

    }
    else if (userInput.includes("3")) {
        var botResponse = document.createElement("div");
        botResponse.className = "bot-message";
        botResponse.innerText = "Chatbot: Redirigiendo al correo";
        window.location.href = "mailto:asesoriasgeogloremyregaikol@gmail.com?subject=Reserva Asesoria&body=Buenas\nMe gustaria hacer una reserva para una asesoria.";
    }
    else {
        var botResponse = document.createElement("div");
        botResponse.className = "bot-message";
        botResponse.innerText = "Chatbot: Escribe el numero:\n1.Preguntas basicas \n 2.Enviar mensaje whatsapp \n 3.Enviar";
    }
    // Agrega la respuesta del chatbot a la ventana de chat
    document.getElementById("chat-window").appendChild(botResponse);

    // Desplázate hacia abajo para mostrar el mensaje más reciente
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
}
