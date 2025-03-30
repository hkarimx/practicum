// Opdracht 4b: Verander de kleur van de hotelnaam of restauranttitel bij klikken
function changeHotelNameColor(element) {
    element.style.color = element.style.color === "red" ? "orange" : "red";
}

// Opdracht 4c: Toggle de contrastmodus bij klikken op de knop
function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

// Opdracht 4d: Toon een alert bij klikken op 'About' of 'Info'
function giveAlert() {
    alert("Under construction");
}

// Opdracht 4e: Vraag een e-mailadres via prompt en toon een bericht
function givePrompt() {
    let email = prompt("Voer uw e-mailadres in:", "geen interesse");

    if (email && email !== "geen interesse") {
        document.getElementById("emailMessage").innerHTML =
            `We zullen zo snel mogelijk contact opnemen via: <strong>${email}</strong>`;
    } else {
        document.getElementById("emailMessage").innerHTML = "Geen contactgegevens ingevuld.";
    }
}
