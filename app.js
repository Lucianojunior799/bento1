const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Bom Dia chefe");
    }

    else if(hr == 12) {
        speak("Bom dia chefe");
    }

    else if(hr > 12 && hr <= 17) {
        speak("boa tarde chefe");
    }

    else {
        speak("boa noite chefe");
    }
}

window.addEventListener('load', ()=>{
    speak("Ativando o bento");
    speak("Conectando");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = " Não entendi o que você disse tente novamente";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Olá chefe";
        speech.text = finalText;
    }


    else if(message.includes('como você está')) {
        const finalText = "Estou bem chefe me diga como posso ajudá-lo";
        speech.text = finalText;
    }


    else if(message.includes('qual é o seu nome')) {
        const finalText = "meu nome é bento";
        speech.text = finalText;
    }

    else if(message.includes('abrir google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Abrindo o Google";
        speech.text = finalText;
    }
  
    else if(message.includes('hora')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('data')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculadora')) {
        window.open('Calculator:///')
        const finalText = "Abertura da calculadora";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Encontrei algumas informações para " + message + " on google";
        speech.text = finalText;
    }
   

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}