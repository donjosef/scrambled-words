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
        } else {
            Outcome.decreaseChances();
            Score.decreaseScore();
        }
        
    }

    function init() {
        cacheDOM();
        bindEvents();
    }
    
    return {
        init: init
    }
})();