document.getElementById("petForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("http://localhost:5678/webhook-test/8a750194-067b-4a60-b825-68d6b26bf8a8", {
    method: "POST",
    body: formData
  });


  if (response.ok) {
    document.getElementById("status").innerText =
      "🐾 Pet cadastrado com sucesso!";
    form.reset();
  } else {
    document.getElementById("status").innerText =
      "❌ Erro ao cadastrar pet.";
  }
});
