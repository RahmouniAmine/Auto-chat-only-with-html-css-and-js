const voiceBtn = document.getElementById("voiceIcon");
const inputEle = document.getElementById("input");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const grammar = '#JSGF V1.0;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onstart = () => {
    console.log("Speech recognition start");
}

recognition.onresult = (e) => {
    const current = e.resultIndex;
    inputEle.value = e.results[current][0].transcript;
};

recognition.onspeechend = () => {
    recognition.stop();
};

voiceBtn.addEventListener('click', () => {
    recognition.start();
});

