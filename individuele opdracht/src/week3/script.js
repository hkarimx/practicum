function shuffleLetters() {
    const text = document.getElementById('wordToShuffle').innerText;
    const words = text.split(' ');
    const shuffledWords = words.map(word => {
        if (word.length <= 3) return word;

        const first = word[0];
        const last = word[word.length - 1];
        const middle = word.slice(1, -1).split('');

        // Shuffle middle letters
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
            naam: "Standard 1",
            type: "standard",
            bedden: 2,
            douche: true,
            toilet: true,
            tv: true
        },
        {
            naam: "Standard 2",
            type: "standard",
            bedden: 3,
            douche: true,
            toilet: true,
            tv: true
        },
        {
            naam: "Standard 3",
            type: "standard",
            bedden: 4,
            douche: true,
            toilet: true,
            tv: true
        },
        {
            naam: "Luxe 1",
            type: "luxe",
            bedden: 1,
            douche: true,
            toilet: true,
            tv: true,
            bureau: true
        },
        {
            naam: "Luxe 2",
            type: "luxe",
            bedden: 2,
            douche: true,
            toilet: true,
            tv: true,
            bureau: true
        },
        {
            naam: "Bruidssuite",
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
