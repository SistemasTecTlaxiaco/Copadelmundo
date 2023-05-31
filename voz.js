window.contador = 0;
window.contadorcubogrande = 0;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var arreglovoz = [
    "Hola copa del mundo",
    "Gracias copa del mundo",
    "gracias copa del mundo",
    "eso es todo por ahora",
    "Eso es todo por ahora",
    "copa del mundo preséntate",
    "Copa del mundo preséntate",
    "copa dime un dato interesante del futbol",
    "copa dime un dato interesante del fútbol",
    "copa Dime un dato interesante del fútbol",
    "copa ¿que es el mundial de fútbol?",
    "copa Qué es el mundial de fútbol",
    "copa qué es el mundial de fútbol",
    "copa Hazte más grande",
    "copa hazte más grande",
    "copa muéstrate más pequeña",
    "copa Muéstrate más pequeña",
    "copa desaparece",
    "copa Desaparece",
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

    if (voz === "gracias copa del mundo" ||
        voz === "Gracias copa del mundo"
    ) {
        console.log("Estas dando las gracias");
        let utterance = new SpeechSynthesisUtterance(
            "no es nada amigo, necesitas saber algo mas?"
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "eso es todo por ahora" ||
        voz === "Eso es todo por ahora"
    ) {
        console.log("Estas diciendo que ya no necesitas nada");
        let utterance = new SpeechSynthesisUtterance(
            "de nada amigo, siempre es un placer ayudarte!"
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "copa del mundo preséntate" ||
        voz === "Copa del mundo preséntate"
    ) {
        console.log("La copa del mundo se esta presentando!");
        let utterance = new SpeechSynthesisUtterance(
            "Hola, yo soy la copa del mundo de futbol, y mi diseño representa a figuras humanas sosteniendo la tierra como simbolo de alegria y la grandeza del deportista en el momento del triunfo."
        );
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }

    if (voz === "copa dime un dato interesante del futbol" ||
        voz === "copa Dime un dato interesante del fútbol" ||
        voz === "copa dime un dato interesante del fútbol"
        
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
        voz === "copa ¿que es el mundial de fútbol?" ||
        voz === "copa Qué es el mundial de futbol" ||
        voz === "copa qué es el mundial de fútbol"
    ) {
        console.log("Hola, estas preguntando!");
        let utterance = new SpeechSynthesisUtterance("es un gran evento deportivo en el que compiten las mejores selecciones nacionales del mundo de este deporte");
        utterance.lang = "es-MX";
        speechSynthesis.speak(utterance);
    }
    //interaccion con RA
    if (voz === "copa hazte más grande" || 
        voz === "copa Hazte más grande") {
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
        voz === "copa muéstrate más pequeña" ||
        voz === "copa Muéstrate más pequeña"
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
        voz === "copa desaparece" ||
        voz === "copa Desaparece"
    ) {
        console.log("Estas queriendo que la copa desaparezca");

        let utterance = new SpeechSynthesisUtterance(
            "No puedo desaparecer porque me da miedo la oscuridad."
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