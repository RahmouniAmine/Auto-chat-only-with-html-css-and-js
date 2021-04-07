const voiceBtn = document.getElementById("voiceIcon");
const inputEle = document.getElementById("input");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;

const grammar = '#JSGF V1.0;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onstart = () => {
    console.log("Hello");
}

recognition.onresult = (e) => {
    inputEle.value = e;
};

recognition.onspeechend = () => {
    recognition.stop();
};

voiceBtn.addEventListener('click', () => {
    recognition.start();
});

