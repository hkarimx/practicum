// Object met hotelkamers
const mijnHotelKamers = {
    kamers: [
        { type: "Standaard", bedden: 2, faciliteiten: ["Douche", "Toilet", "TV"] },
        { type: "Standaard", bedden: 3, faciliteiten: ["Douche", "Toilet", "TV"] },
        { type: "Standaard", bedden: 4, faciliteiten: ["Douche", "Toilet", "TV"] },
        { type: "Luxe", bedden: 1, faciliteiten: ["Douche", "Toilet", "TV", "Bureau"] },
        { type: "Luxe", bedden: 2, faciliteiten: ["Douche", "Toilet", "TV", "Bureau"] },
        { type: "Bruidsuite", bedden: 2, faciliteiten: ["Douche", "Toilet", "TV", "Bubbelbad"] },
    ],
};

// Functie om kameropties bij te werken
function updateKamerOpties() {
    let aantalPersonen = document.getElementById("aantalPersonen").value;
    let kamerSelect = document.getElementById("kamerSelect");
    kamerSelect.innerHTML = "";

    if (!aantalPersonen || aantalPersonen < 1 || aantalPersonen > 4) {
        kamerSelect.innerHTML = "<option>Geen beschikbare kamers</option>";
        document.getElementById("kamerDetails").innerHTML = "";
        return;
    }

    let beschikbareKamers = mijnHotelKamers.kamers.filter(kamer => kamer.bedden == aantalPersonen);

    if (beschikbareKamers.length === 0) {
        kamerSelect.innerHTML = "<option>Geen beschikbare kamers</option>";
        document.getElementById("kamerDetails").innerHTML = "";
        return;
    }

    beschikbareKamers.forEach(kamer => {
        let optie = document.createElement("option");
        optie.value = kamer.type;
        optie.textContent = kamer.type;
        kamerSelect.appendChild(optie);
    });

    toonKamerSpecificaties();
}

// Functie om kamerdetails te tonen
function toonKamerSpecificaties() {
    let gekozenKamer = document.getElementById("kamerSelect").value;
    let kamerDetails = document.getElementById("kamerDetails");
    let kamerInfo = mijnHotelKamers.kamers.find(kamer => kamer.type === gekozenKamer);

    if (kamerInfo) {
        kamerDetails.innerHTML = `<h3>U hebt gekozen voor een ${kamerInfo.type} kamer met ${kamerInfo.bedden} bed(den)</h3>
                                  <p>Deze kamer heeft: ${kamerInfo.faciliteiten.join(", ")}</p>`;
    }
}

// Functie voor het reserveren van een maaltijd
function reserveerMaaltijd() {
    let mealType = document.getElementById("mealType").value;
    let reservationResult = document.getElementById("reservationResult");

    reservationResult.innerHTML = `Je hebt een ${mealType} gereserveerd.`;
    reservationResult.style.color = "green";
    reservationResult.style.fontWeight = "bold";
}

// Opdracht 4b: Verander de kleur van de hotelnaam of restauranttitel bij klikken
function changeHotelNameColor(element) {
    element.style.color = element.style.color === "red" ? "orange" : "red";
}

// Opdracht 4c: Toggle de contrastmodus bij klikken op de knop
function toggleContrast() {
    document.body.classList.toggle("high-contrast");

    // Sla de voorkeur op in de browser
    if (document.body.classList.contains("high-contrast")) {
        localStorage.setItem("contrastMode", "enabled");
    } else {
        localStorage.setItem("contrastMode", "disabled");
    }
}

// Check bij laden van de pagina of contrastmodus aan staat
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("contrastMode") === "enabled") {
        document.body.classList.add("high-contrast");
    }
});

// Opdracht 4d: Toon een alert bij klikken op 'About' of 'Info'
function giveAlert() {
    alert("Under construction");
}

// Opdracht 4e: Vraag een e-mailadres via prompt en toon een bericht
function givePrompt() {
    let email = prompt("Voer uw e-mailadres in:", "geen interesse");

    if (email && email.trim() !== "" && email !== "geen interesse") {
        document.getElementById("emailMessage").innerHTML =
            `We zullen zo snel mogelijk contact opnemen via: <strong>${email}</strong>`;
    } else {
        document.getElementById("emailMessage").innerHTML = "Geen contactgegevens ingevuld.";
    }
}

// Opdracht 5c: Shuffle functie (Extra opdracht)
function shuffleInputText() {
    let input = document.getElementById("inputText").value;
    let shuffledText = shuffleLetters(input);
    document.getElementById("shuffledText").textContent = shuffledText;
}

// Functie om de tekst te wissen
function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("shuffledText").textContent = "";
}

// Shuffle functie: eerste en laatste letter blijven, de rest wordt gehusseld
function shuffleLetters(sentence) {
    return sentence.split(" ").map(word => {
        if (word.length <= 3) {
            return word; // Kleine woorden blijven ongewijzigd
        }
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let middleLetters = word.slice(1, -1).split("");

        // Fisher-Yates shuffle
        for (let i = middleLetters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [middleLetters[i], middleLetters[j]] = [middleLetters[j], middleLetters[i]];
        }

        return firstLetter + middleLetters.join("") + lastLetter;
    }).join(" ");
}
