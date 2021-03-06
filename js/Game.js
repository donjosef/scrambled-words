const Game = (function() {
    
    const DOM = {};

    function cacheDOM() {
        DOM.form = document.getElementById('guess-form');
        DOM.guessInput = document.querySelector('.guess-form__input');
    }

    function bindEvents() {
        DOM.form.addEventListener('submit', checkMatch);
    }

    function checkMatch(e) {
        e.preventDefault();
        const inputText = DOM.guessInput.value;
        if(inputText === Word.randomWord) {
            Outcome.win();
            Score.increaseScore();

            setTimeout(() => {
                Word.getWords();
                Outcome.resetChances();
                Outcome.resetMessage();
             }, 2000); //get new word and reset chances after 2 seconds
        } else {
            Outcome.decreaseChances();
            if(Outcome.chances === 0) {
                Score.decreaseScore();

                setTimeout(() => {
                    Word.getWords();
                    Outcome.resetChances();
                    Outcome.resetMessage();
                 }, 3000);
            }
        }

        DOM.guessInput.value = ""; //clear input
    }

    function init() {
        cacheDOM();
        bindEvents();
    }
    
    return {
        init: init
    }
})();