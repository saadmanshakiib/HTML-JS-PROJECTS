let speech = new SpeechSynthesisUtterance();
window.onload = () => {
    document.querySelector("button").addEventListener("click", () => {
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    });
};
