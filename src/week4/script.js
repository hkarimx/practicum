function changeHotelNameColor(el) {
  el.style.color = el.style.color === "orange" ? "white" : "orange";
}

function toggleContrast() {
  document.body.classList.toggle("dark-mode");
}

function giveAlert() {
  alert("Under construction");
}

function givePrompt() {
  const email = prompt("Vul hier je email adres in om contact op te nemen:", "geen interesse");
  if (email && email.toLowerCase() !== "geen interesse") {
    document.getElementById("emailMessage").innerHTML =
      `We zullen zo snel mogelijk contact met je opnemen via <strong>${email}</strong>.`;
  }
}
