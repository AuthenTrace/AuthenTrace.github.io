function toggleAnswer(element) {
    const faqItem = element.parentElement;
    const answer = element.nextElementSibling;
  
    // Mostrar/ocultar la respuesta
    if (answer.style.display === "block") {
      answer.style.display = "none";
      faqItem.classList.remove("active");
    } else {
      answer.style.display = "block";
      faqItem.classList.add("active");
    }
  }

  