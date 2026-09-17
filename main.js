const coin = document.getElementById("coin");

const profileName = document.getElementById("profile-name");
const profileDescription = document.getElementById("profile-description");

let showingMe = true;
let rotation = 0;


coin.addEventListener("click", function () {

    showingMe = !showingMe;

    rotation += 180;

    coin.style.transform = `rotateY(${rotation}deg)`;


    if (showingMe) {

        profileName.textContent = "O MEU NOME";

        profileDescription.textContent =
            "Aqui aparece toda a informação sobre mim.";

    } else {

        profileName.textContent = "NOME DO COLEGA";

        profileDescription.textContent =
            "Aqui aparece toda a informação sobre o meu colega.";

    }

});
