function sendMessage() {
    var name = document.getElementById("form_name").value;
    var email = document.getElementById("form_email").value;
    var phone = document.getElementById("form_phone").value;
    var message = document.getElementById("form_message").value || "Quiero cotizar un proyecto"; // Mensaje predeterminado si no se ingresa nada
  
    // Validación de teléfono: solo números y exactamente 10 dígitos
    if (!/^\d{10}$/.test(phone)) {
      alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
      return;
    }
  
    // Validación de correo: el campo de correo ya tiene validación con type="email"
    if (!email) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
  
    // Crear el mensaje para WhatsApp
    var whatsappMessage = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`);
  
    var whatsappLink = `https://wa.me/573177235107?text=${whatsappMessage}`; // Tu número de WhatsApp
    
    // Redirigir al enlace de WhatsApp
    window.location.href = whatsappLink;
  }
  