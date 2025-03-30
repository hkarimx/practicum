function shuffleLetters() {
    const text = document.getElementById('wordToShuffle').innerText;
    const words = text.split(' ');
    const shuffledWords = words.map(word => {
        if (word.length <= 3) return word;

        const first = word[0];
        const last = word[word.length - 1];
        const middle = word.slice(1, -1).split('');

        for (let i = middle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [middle[i], middle[j]] = [middle[j], middle[i]];
        }

        return first + middle.join('') + last;
    });

    document.getElementById('wordToShuffle').innerText = shuffledWords.join(' ');
}

const mijnHotelKamers = {
  kamers: [
    {
      naam: "standard",
      type: "standard",
      bedden: 2,
      douche: true,
      toilet: true,
      tv: true
    },
    {
      naam: "standard",
      type: "standard",
      bedden: 3,
      douche: true,
      toilet: true,
      tv: true
    },
    {
      naam: "standard",
      type: "standard",
      bedden: 4,
      douche: true,
      toilet: true,
      tv: true
    },
    {
      naam: "luxe",
      type: "luxe",
      bedden: 2,
      douche: true,
      toilet: true,
      tv: true,
      bureau: true
    },
    {
      naam: "bruidssuite",
      type: "suite",
      bedden: 2,
      douche: true,
      toilet: true,
      tv: true,
      bubbelbad: true
    }
  ]
};

function beschikbareKamers(aantalPersonen) {
    return mijnHotelKamers.kamers.filter(kamer => kamer.bedden === aantalPersonen);
}

function showAvailableRooms() {
    const aantal = parseInt(document.getElementById('numPeople').value);
    const kamers = beschikbareKamers(aantal);

    const resultsDiv = document.getElementById('roomResults');
    const select = document.getElementById('roomSelect');
    const bookingSection = document.getElementById('bookingSection');

    if (kamers.length === 0) {
        resultsDiv.innerHTML = "Geen beschikbare kamers voor dit aantal personen.";
        bookingSection.style.display = "none";
        return;
    }

    resultsDiv.innerHTML = `<strong>Beschikbare kamers voor ${aantal} persoon/personen:</strong><br>` +
        kamers.map(k => `- ${k.naam} (${k.bedden} bedden)`).join("<br>");

    select.innerHTML = "";
    kamers.forEach(kamer => {
        const option = document.createElement('option');
        option.value = kamer.naam;
        option.textContent = `${kamer.naam} (${kamer.bedden} bedden)`;
        select.appendChild(option);
    });

    bookingSection.style.display = "block";
}

function bookRoom() {
    const selectedRoom = document.getElementById('roomSelect').value;
    document.getElementById('bookingMessage').innerText =
        `✅ Je hebt kamer "${selectedRoom}" succesvol geboekt!`;
}

function toonKamertypes() {
  const aantal = parseInt(document.getElementById("aantalPersonen").value);
  const select = document.getElementById("kamerKeuze");
  select.innerHTML = "";

  if (isNaN(aantal) || aantal < 1 || aantal > 4) return;

  const uniekeTypes = new Set();
  mijnHotelKamers.kamers.forEach(kamer => {
    if (kamer.bedden === aantal && !uniekeTypes.has(kamer.type)) {
      uniekeTypes.add(kamer.type);
      const optie = document.createElement("option");
      optie.value = kamer.type;
      optie.textContent = kamer.type;
      select.appendChild(optie);
    }
  });

  toonKamerSpecificatie();
}

function toonKamerSpecificatie() {
  const type = document.getElementById("kamerKeuze").value;
  const aantal = parseInt(document.getElementById("aantalPersonen").value);
  const container = document.getElementById("specificaties");

  const kamer = mijnHotelKamers.kamers.find(k => k.type === type && k.bedden === aantal);
  if (!kamer) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <h3>U hebt gekozen voor ${kamer.type} kamer met ${kamer.bedden} bed(en)</h3>
    <p>Deze kamer heeft:</p>
    <ul>
      ${kamer.douche ? "<li>douche</li>" : ""}
      ${kamer.toilet ? "<li>toilet</li>" : ""}
      ${kamer.tv ? "<li>tv</li>" : ""}
      ${kamer.bureau ? "<li>bureau</li>" : ""}
      ${kamer.bubbelbad ? "<li>bubbelbad</li>" : ""}
    </ul>
  `;
}

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

let menuVisible = false;

function makeMenuVisible() {
    const menu = document.getElementById('menu-items');
    menuVisible = !menuVisible;
    menu.style.transform = menuVisible ? 'scale(1)' : 'scale(0)';
}
