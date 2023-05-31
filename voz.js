window.contador = 0;
window.contadorcubogrande = 0;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var arreglovoz = [
    "Hola copa del mundo",
    "gracias copa del mundo",
    "eso es todo por ahora",
    "copa del mundo preséntate",
    "copa dime un dato interesante del futbol",
    "copa dime un dato interesante de ftbol",
    "copa Dime un dato interesante de ftbol",
    "copa ¿que es el mundial de futbol?",
    "copa que es el mundial de futbol",
    "copa hazte mas grande",
    "copa Hazte mas grande",
    "copa muestrate más pequeña",
    "copa Muestrate más pequeña",
    "copa hazte más pequeña",
    "octocat Haz que Iron Cat desaparezca",
    "octocat Haz que ironcat desaparezca",
    "octocat regresa al escenario",
    "octocat regresa a la escena",
    "octocat vuelve",
];

var grammar =
    "#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = " +
    arreglovoz.join(" | ") +
    " ;";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "es-MX";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector("#text");
var vozHTML = "";
arreglovoz.forEach(function (v, i, a) {
    console.log(v, i);
});

window.onload = function () {
    function micro() {
        recognition.start();
        console.log("Estoy listo para escuchar.");
    }
    document.getElementById("micro-button").onclick = micro;
};

recognition.onresult = function (event) {
    var voz = event.results[0][0].transcript;
    diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
    bg = voz;
    var bg = document.querySelector("text");

    //VISUALIZO EN CONSOLA
    console.log(bg);
    console.log(voz);

    function randD(array) {
        var rand = (Math.random() * array.length) | 0;
        var result = array[rand];
        return result;
    }

    // Interacciones iniciales
    if (voz === "Hola copa del mundo") {
        console.log("Estas saludando!");
        let utterance = new SpeechSynthesisUtterance(
            "Hola amigo del fulvo, bienvenido. Estoy listo para responder algunas preguntas futboleras..."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "gracias copa del mundo") {
        console.log("Estas dando las gracias");
        let utterance = new SpeechSynthesisUtterance(
            "no es nada amigo, necesitas saber algo mas?"
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "eso es todo por ahora") {
        console.log("Estas diciendo que ya no necesitas nada");
        let utterance = new SpeechSynthesisUtterance(
            "de nada amigo, siempre es un placer ayudarte!"
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "copa del mundo preséntate") {
        console.log("La copa del mundo se esta presentando!");
        let utterance = new SpeechSynthesisUtterance(
            "Hola, yo soy la copa del mundo de futbol, y mi diseño representa a figuras humanas sosteniendo la tierra como simbolo de alegria y la grandeza del deportista en el momento del triunfo."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "copa dime un dato interesante del ftbol" ||
        voz === "copa Dime un dato interesante del ftbol" ||
        voz === "copa dime un dato interesante del futbol"
        
        ) {
        console.log("Hola, estas pregutando!");
        var datos = [
            "Uruguay fue el primer país anfitrión del mundial.",
            "El mayor goleador de la historia del mundial es el alemán Miroslav Klose con 16 tantos.",
            "Pelé es el jugador con más mundiales ganados.",
            "Brasil es el país que más veces ha ganado la copa mundial con 5.",
            "Pelé es el jugador más joven en marcar un gol en un mundial en Suecia 1958.",
            "El alemán Lothar Matthäus es el jugador que más partidos ha tenido con 25 encuentros.",
        ];
        var result = randD(datos);
        let utterance = new SpeechSynthesisUtterance(result);
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (
        voz === "copa ¿que es el mundial de futbol?" ||
        voz === "copa que es el mundial de futbol" ||
        voz === "copa ¿que es el mundial de ftbol?" ||
        voz === "copa que es el mundial de ftbol"
    ) {
        console.log("Hola, estas preguntando!");
        let utterance = new SpeechSynthesisUtterance("es un gran evento deportivo en el que compiten las mejores selecciones nacionales del mundo de este deporte");
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }
    //interaccion con RA
    if (voz === "copa hazte mas grande" || voz === "copa Hazte mas grande") {
        console.log("Estas queriendo hacer la copa mas grande");
        if (contadorcubogrande == 0) {
            var el = document.querySelector("#avatar");
            el.setAttribute("scale", "1 1 1");

            let utterance = new SpeechSynthesisUtterance(
                "Ahora la copa es más grande pero no tan grande como Messi"
            );
            utterance.lang = "es-MX";
            speechSynthesis.speak(utterance);
        }

        if (contadorcubogrande == 1) {
            let utterance = new SpeechSynthesisUtterance(
                "Ya habia mencionado que no soy tan grande como Messi."
            );
            utterance.lang = "es-MX";
            speechSynthesis.speak(utterance);
            contadorcubogrande = 0;
        }
        contadorcubogrande++;
    }

    if (
        voz === "copa muestrate más pequeña" ||
        voz === "copa Muestrate más pequeña" ||
        voz === "copa hazte más pequeña"
    ) {
        console.log("Estas queriendo hacerla mas pequeña");
        var el = document.querySelector("#avatar");
        el.setAttribute("scale", "0.1 0.1 0.1");

        let utterance = new SpeechSynthesisUtterance(
            "Reduciedome de tamaño. Ahora soy muy pequeña pero no me gusta porque no refleja mi grandeza."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }
    if (
        voz === "octocat Haz que ironcat desaparezca" ||
        voz === "octocat Haz que Iron Cat desaparezca"
    ) {
        console.log("Estas queriendo a ironcat transparente");
        var el = document.querySelector("#avatar");
        el.setAttribute("visible", "false");

        let utterance = new SpeechSynthesisUtterance(
            "Ironcat a desaparecido, a utilizado nanotecnologia y muchas librerias que ha econtrado en GitHub."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (
        voz === "octocat regresa al escenario" ||
        voz === "octocat regresa a la escena"
    ) {
        console.log("Estas queriendo regresar a octocat");
        var el = document.querySelector("#avatar");
        el.setAttribute(
            "src",
            "https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/octocatgit.glb?v=1648149096491"
        );
        el.setAttribute("scale", "0.1 0.1 0.1");
        el.setAttribute("position", "0 -0.25 0");
        el.setAttribute("rotation", "0 0 0");
        el.setAttribute("visible", "true");

        let utterance = new SpeechSynthesisUtterance(
            "Enseguida amigo. aunque ya me estoy cansando de esto."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    console.log("Confidence: " + event.results[0][0].confidence);
};

recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onnomatch = function (event) {
    diagnostic.setAttribute(
        "value",
        "No puedo escucharte claramente, por favor repiteme."
    );
};

recognition.onerror = function (event) {
    diagnostic.setAttribute(
        "value",
        "Ocurrio un error al escucharte: " + event.error
    );
};