const coin = document.getElementById("coin");

const profileName = document.getElementById("profile-name");
const profileDescription = document.getElementById("profile-description");

let showingPerson1 = true;
let rotation = 0;


coin.addEventListener("click", function () {

    showingPerson1 = !showingPerson1;

    rotation += 180;

    coin.style.transform = `rotateY(${rotation}deg)`;


    if (showingPerson1) {

        profileName.textContent = "NOME DO COLEGA 1";

        profileDescription.textContent =
            "Aqui aparece toda a informação sobre a Pessoa 1.";

    } else {

        profileName.textContent = "NOME DO COLEGA 2";

        profileDescription.textContent =
            "Aqui aparece toda a informação sobre a Pessoa 2.";

    }

});
